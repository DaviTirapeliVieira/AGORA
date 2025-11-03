export const selectAlunos = (state) => state?.grades?.alunos || [];
export const selectNotas = (state) => state?.grades?.notas || {};
export const selectLoading = (state) => state?.grades?.loading || false;
export const selectError = (state) => state?.grades?.error || null;
