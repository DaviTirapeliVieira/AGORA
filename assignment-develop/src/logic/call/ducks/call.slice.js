import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alunos: [],
  presenca: {},
  selectedIndex: 0,
  loading: false,
  error: null,
};

const chamadaSlice = createSlice({
  name: "chamada",
  initialState,
  reducers: {
    fetchChamadaRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchChamadaSuccess: (state, action) => {
      state.loading = false;
      state.alunos = action.payload;
      state.presenca = action.payload.reduce((acc, aluno) => {
        acc[aluno.nome] = false;
        return acc;
      }, {});
    },
    fetchChamadaFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    togglePresenca: (state, action) => {
      const nome = action.payload;
      state.presenca[nome] = !state.presenca[nome];
    },
    moveSelectedUp: (state) => {
      if (state.alunos.length > 0)
        state.selectedIndex =
          (state.selectedIndex - 1 + state.alunos.length) % state.alunos.length;
    },
    moveSelectedDown: (state) => {
      if (state.alunos.length > 0)
        state.selectedIndex = (state.selectedIndex + 1) % state.alunos.length;
    },
    saveChamadaRequest: (state) => {
      state.loading = true;
    },
    saveChamadaSuccess: (state) => {
      state.loading = false;
    },
    saveChamadaFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchChamadaRequest,
  fetchChamadaSuccess,
  fetchChamadaFailure,
  togglePresenca,
  moveSelectedUp,
  moveSelectedDown,
  saveChamadaRequest,
  saveChamadaSuccess,
  saveChamadaFailure,
} = chamadaSlice.actions;

export default chamadaSlice.reducer;
