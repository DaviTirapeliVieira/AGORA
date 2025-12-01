const delay = ms => new Promise(res => setTimeout(res, ms));

export const fetchGradeScreenDataApi = async () => {
  await delay(300);

  return {
    filters: {
      anoLetivo: '2025',
      curso: '',
      serie: '',
      turma: '',
      componente: '',
      periodo: '',
    },

    filterOptions: {
      anosLetivos: [
        { value: '2024', label: '2024' },
        { value: '2025', label: '2025' },
      ],
      cursos: [
        { value: 'DS', label: 'Desenvolvimento de Sistemas' },
        { value: 'ADM', label: 'Administração' },
      ],
      series: [
        { value: '1', label: '1ª Série' },
        { value: '2', label: '2ª Série' },
        { value: '3', label: '3ª Série' },
      ],
      turmas: [
        { value: '1DS', label: '1DS-A' },
        { value: '2DS', label: '2DS-B' },
        { value: '3DS', label: '3DS-A' },
      ],
      componentes: [
        { value: 'Matematica', label: 'Matemática' },
        { value: 'PAM', label: 'PAM II' },
        { value: 'BD', label: 'Banco de Dados' },
      ],
      periodos: [
        { value: '1Bimestre', label: '1º Bimestre' },
        { value: '2Bimestre', label: '2º Bimestre' },
        { value: '3Bimestre', label: '3º Bimestre' },
      ],
    },
  };
};

export const searchGradesApi = async filters => {
  await delay(350);

  const alunosMock = [
    {
      id: 1,
      ra: '123456',
      nome: 'Davi',
      curso: 'DS',
      serie: '3',
      turma: '3DS',

      Matematica: {
        '1Bimestre': {
          faltas: 3,
          conceito: 'B',
          conceito2: 'B',
          conceito3: 'R',
        },
        '2Bimestre': {
          faltas: 10,
          conceito: 'R',
          conceito2: 'B',
          conceito3: 'MB',
        },
        '3Bimestre': {
          faltas: 10,
          conceito: 'MB',
          conceito2: 'B',
          conceito3: 'R',
        },
      },
    },

    {
      id: 2,
      ra: '654321',
      nome: 'Luis',
      curso: 'DS',
      serie: '2',
      turma: '3DS',

      Matematica: {
        '1Bimestre': {
          faltas: 8,
          conceito: 'R',
          conceito2: 'I',
          conceito3: 'R',
        },
        '2Bimestre': {
          faltas: 4,
          conceito: 'B',
          conceito2: 'B',
          conceito3: 'MB',
        },
        '3Bimestre': {
          faltas: 7,
          conceito: 'R',
          conceito2: 'R',
          conceito3: 'R',
        },
      },
    },

    {
      id: 3,
      ra: '987654',
      nome: 'Felipe',
      curso: 'DS',
      serie: '3',
      turma: '3DS',

      Matematica: {
        '1Bimestre': {
          faltas: 15,
          conceito: 'I',
          conceito2: 'I',
          conceito3: 'R',
        },
        '2Bimestre': {
          faltas: 10,
          conceito: 'R',
          conceito2: 'R',
          conceito3: 'I',
        },
        '3Bimestre': {
          faltas: 12,
          conceito: 'I',
          conceito2: 'I',
          conceito3: 'I',
        },
      },
    },
  ];

  return alunosMock.filter(
    aluno =>
      aluno.curso === filters.curso &&
      aluno.serie === filters.serie &&
      aluno.turma === filters.turma,
  );
};

export const saveGradesApi = async ({ filters, rows }) => {
  await delay(700);
  return { success: true };
};
