export const selectCallState = (state) => state.call;
export const selectAlunos = (state) => state.call.alunos;
export const selectPresenca = (state) => state.call.presenca;
export const selectSelectedIndex = (state) => state.call.selectedIndex;
export const selectLoading = (state) => state.call.loading;
export const selectError = (state) => state.call.error;

export const selectAlunoSelecionado = (state) => {
  const { alunos, selectedIndex } = state.call;
  return alunos[selectedIndex] || null;
};

export const selectPresencaDoAluno = (nome) => (state) => {
  return state.call.presenca[nome];
};
