import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alunos: [],
  notas: {},
  loading: false,
  error: null,
};

const gradesSlice = createSlice({
  name: "grades",
  initialState,
  reducers: {
    fetchGradesRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchGradesSuccess(state, action) {
      state.loading = false;
      state.alunos = action.payload.alunos;
      state.notas = action.payload.notas;
    },
    fetchGradesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    updateGrade(state, action) {
      const { idAluno, nota } = action.payload;
      state.notas[idAluno] = nota;
    },

    saveGradesRequest(state, action) {
      state.loading = true;
      state.error = null;
    },
    saveGradesSuccess(state) {
      state.loading = false;
    },
    saveGradesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchGradesRequest,
  fetchGradesSuccess,
  fetchGradesFailure,
  updateGrade,
  saveGradesRequest,
  saveGradesSuccess,
  saveGradesFailure,
} = gradesSlice.actions;

export default gradesSlice.reducer;
