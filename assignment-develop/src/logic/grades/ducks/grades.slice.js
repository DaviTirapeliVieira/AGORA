import { createSlice } from '@reduxjs/toolkit';

const calcularSituacao = conceito => {
  switch (conceito) {
    case 'MB':
    case 'B':
      return { situacao: 'Aprovado', situacaoClass: 'aprovado' };
    case 'R':
      return { situacao: 'Em Recuperação', situacaoClass: 'recuperacao' };
    case 'I':
      return { situacao: 'Reprovado', situacaoClass: 'reprovado' };
    default:
      return { situacao: '-', situacaoClass: 'default' };
  }
};

const initialState = {
  filters: {
    anoLetivo: '',
    curso: '',
    serie: '',
    turma: '',
    componente: '',
    periodo: '',
  },

  filterOptions: {
    anosLetivos: [],
    cursos: [],
    series: [],
    turmas: [],
    componentes: [],
    periodos: [],
  },

  rows: [], // dados "achatados" para a tela
  originalList: [], // estrutura completa vinda da API

  loading: false,
  saving: false,
  error: null,
};

const gradesSlice = createSlice({
  name: 'grades',
  initialState,
  reducers: {
    // tela inicial
    fetchGradeScreenDataRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchGradeScreenDataSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.filters = action.payload.filters;
      state.filterOptions = action.payload.filterOptions;
    },
    fetchGradeScreenDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload || 'Erro ao carregar dados de notas.';
    },

    // buscar alunos
    searchGradesRequest(state) {
      state.loading = true;
      state.error = null;
      state.rows = [];
      state.originalList = [];
    },
    searchGradesSuccess(state, action) {
      state.loading = false;
      state.error = null;

      const componente = state.filters.componente;
      const periodo = state.filters.periodo;

      state.originalList = action.payload;

      state.rows = action.payload.map(aluno => {
        const dadosComponente = aluno[componente]?.[periodo] || {};

        const faltas = dadosComponente.faltas ?? '';
        const conceito = dadosComponente.conceito ?? '';
        const conceito2 = dadosComponente.conceito2 ?? '';
        const conceito3 = dadosComponente.conceito3 ?? '';

        const { situacao, situacaoClass } = calcularSituacao(conceito);

        return {
          id: aluno.id,
          ra: aluno.ra,
          nome: aluno.nome,
          curso: aluno.curso,
          serie: aluno.serie,
          turma: aluno.turma,

          faltas,
          conceito,
          conceito2,
          conceito3,
          situacao,
          situacaoClass,
        };
      });
    },
    searchGradesFailure(state, action) {
      state.loading = false;
      state.error = action.payload || 'Erro ao buscar notas.';
    },

    // alterar filtros (ano, curso, série, turma, componente, período)
    updateGradeFilter(state, action) {
      const { field, value } = action.payload;
      state.filters[field] = value;
    },

    // alterar faltas / conceitos para um aluno
    updateStudentGrade(state, action) {
      const { studentId, field, value } = action.payload;

      const rowIndex = state.rows.findIndex(row => row.id === studentId);
      if (rowIndex === -1) return;

      // atualiza row para a UI
      const rows = [...state.rows];
      const updatedRow = { ...rows[rowIndex], [field]: value };

      // recalcula situação se conceito principal mudar
      if (field === 'conceito') {
        const { situacao, situacaoClass } = calcularSituacao(value);
        updatedRow.situacao = situacao;
        updatedRow.situacaoClass = situacaoClass;
      }

      rows[rowIndex] = updatedRow;
      state.rows = rows;

      // atualiza estrutura original para salvar corretamente
      const componente = state.filters.componente;
      const periodo = state.filters.periodo;

      const originalIndex = state.originalList.findIndex(
        aluno => aluno.id === studentId,
      );
      if (originalIndex === -1) return;

      const originalList = [...state.originalList];
      const originalAluno = { ...originalList[originalIndex] };

      if (!originalAluno[componente]) {
        originalAluno[componente] = {};
      }
      if (!originalAluno[componente][periodo]) {
        originalAluno[componente][periodo] = {};
      }

      originalAluno[componente][periodo][field] = value;

      // se mudar conceito, atualiza também a situação "derivada" se quiser guardar
      // (opcional, normalmente situação é sempre calculada no backend)
      originalList[originalIndex] = originalAluno;
      state.originalList = originalList;
    },

    saveGradesRequest(state) {
      state.saving = true;
      state.error = null;
    },
    saveGradesSuccess(state) {
      state.saving = false;
      state.error = null;
    },
    saveGradesFailure(state, action) {
      state.saving = false;
      state.error =
        action.payload || 'Erro ao salvar as notas. Tente novamente.';
    },

    resetGradesState() {
      return initialState;
    },
  },
});

export const {
  fetchGradeScreenDataRequest,
  fetchGradeScreenDataSuccess,
  fetchGradeScreenDataFailure,
  searchGradesRequest,
  searchGradesSuccess,
  searchGradesFailure,
  updateGradeFilter,
  updateStudentGrade,
  saveGradesRequest,
  saveGradesSuccess,
  saveGradesFailure,
  resetGradesState,
} = gradesSlice.actions;

export default gradesSlice.reducer;
