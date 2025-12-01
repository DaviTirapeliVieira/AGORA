import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  created: false,
};

const disciplineCreateSlice = createSlice({
  name: 'disciplineCreate',
  initialState,
  reducers: {
    createDisciplineRequest(state) {
      state.loading = true;
      state.error = null;
      state.created = false;
    },
    createDisciplineSuccess(state) {
      state.loading = false;
      state.error = null;
      state.created = true;
    },
    createDisciplineFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.created = false;
    },
  },
});

export const {
  createDisciplineRequest,
  createDisciplineSuccess,
  createDisciplineFailure,
} = disciplineCreateSlice.actions;

export default disciplineCreateSlice.reducer;
