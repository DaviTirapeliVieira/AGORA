export const selectChamadaState = (state) => state.chamada;
export const selectAlunos = (state) => state.chamada.alunos;
export const selectPresenca = (state) => state.chamada.presenca;
export const selectSelectedIndex = (state) => state.chamada.selectedIndex;
export const selectLoading = (state) => state.chamada.loading;
export const selectError = (state) => state.chamada.error;

export const selectAlunoSelecionado = (state) => {
  const { alunos, selectedIndex } = state.chamada;
  return alunos[selectedIndex] || null;
};

export const selectPresencaDoAluno = (nome) => (state) => {
  return state.chamada.presenca[nome];
};
