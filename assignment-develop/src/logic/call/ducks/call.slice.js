import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alunos: [],
  presenca: {},
  selectedIndex: 0,
  loading: false,
  error: null,
  numAulas: [],
};

const callSlice = createSlice({
  name: "call",
  initialState,
  reducers: {
    fetchCallRequest: (state) => {
      state.loading = true;
      state.error = null;
    },

    fetchCallSuccess: (state, action) => {
      state.loading = false;

      const alunos = action.payload?.alunos ?? [];
      const numAulas = action.payload?.numAulas ?? 0;

      state.alunos = alunos;
      state.numAulas = numAulas;

      state.presenca = alunos.reduce((acc, aluno) => {
        acc[aluno.name] = Array(numAulas).fill(false);
        return acc;
      }, {});
    },

    fetchCallFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    togglePresenca: (state, action) => {
      const { name, aulaIndex } = action.payload;
      if (!state.presenca[name]) {
        state.presenca[name] = Array(state.numAulas).fill(false);
      }
      state.presenca[name][aulaIndex] = !state.presenca[name][aulaIndex];
    },

    moveSelectedUp: (state) => {
      if (state.alunos.length > 0) {
        state.selectedIndex =
          (state.selectedIndex - 1 + state.alunos.length) % state.alunos.length;
      }
    },

    moveSelectedDown: (state) => {
      if (state.alunos.length > 0) {
        state.selectedIndex =
          (state.selectedIndex + 1) % state.alunos.length;
      }
    },

    saveCallRequest: (state) => {
      state.loading = true;
    },
    saveCallSuccess: (state) => {
      state.loading = false;
    },
    saveCallFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCallRequest,
  fetchCallSuccess,
  fetchCallFailure,
  togglePresenca,
  moveSelectedUp,
  moveSelectedDown,
  saveCallRequest,
  saveCallSuccess,
  saveCallFailure,
} = callSlice.actions;

export default callSlice.reducer;
