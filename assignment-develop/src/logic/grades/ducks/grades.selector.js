export const selectGradesState = state => state.grades;

export const selectGradeFilters = state => selectGradesState(state).filters;

export const selectGradeFilterOptions = state =>
  selectGradesState(state).filterOptions;

export const selectGradeRows = state => selectGradesState(state).rows;

export const selectGradeOriginalList = state =>
  selectGradesState(state).originalList;

export const selectGradeLoading = state => selectGradesState(state).loading;

export const selectGradeSaving = state => selectGradesState(state).saving;

export const selectGradeError = state => selectGradesState(state).error;
