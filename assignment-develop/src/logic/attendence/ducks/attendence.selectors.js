import { createSelector } from '@reduxjs/toolkit';

export const selectAttendenceState = state => state.attendence;

export const selectItems = createSelector(
  selectAttendenceState,
  attendence => attendence.items,
);

export const selectAnos = createSelector(
  selectAttendenceState,
  attendence => attendence.anos,
);

export const selectAno = createSelector(
  selectAttendenceState,
  attendence => attendence.ano,
);

export const selectLoading = createSelector(
  selectAttendenceState,
  attendence => attendence.loading,
);

export const selectError = createSelector(
  selectAttendenceState,
  attendence => attendence.error,
);
