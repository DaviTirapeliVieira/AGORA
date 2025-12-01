import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  anos: [],
  ano: null,
  loading: false,
  sendingEmail: false,
  emailStatus: null,
  error: null,
};

const bulletinSlice = createSlice({
  name: 'boletim',
  initialState,
  reducers: {
    fetchBoletimAnosRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchBoletimAnosSuccess(state, action) {
      state.loading = false;
      state.anos = Array.isArray(action.payload) ? action.payload : [];
    },
    fetchBoletimAnosFailure(state, action) {
      state.loading = false;
      state.error = action.payload || 'Erro ao carregar anos do boletim.';
    },
    fetchBoletimRequest(state, action) {
      state.loading = true;
      state.error = null;
    },
    fetchBoletimSuccess(state, action) {
      const { ano, items } = action.payload || {};

      state.loading = false;
      state.ano = ano ?? null;
      state.items = Array.isArray(items) ? items : [];
      state.error = null;
    },
    fetchBoletimFailure(state, action) {
      state.loading = false;
      state.error = action.payload || 'Erro ao carregar boletim.';
      state.items = [];
    },
    sendBoletimEmailRequest(state) {
      state.sendingEmail = true;
      state.emailStatus = null;
    },
    sendBoletimEmailSuccess(state) {
      state.sendingEmail = false;
      state.emailStatus = 'success';
    },
    sendBoletimEmailFailure(state) {
      state.sendingEmail = false;
      state.emailStatus = 'failure';
    },
  },
});

export const {
  fetchBoletimAnosRequest,
  fetchBoletimAnosSuccess,
  fetchBoletimAnosFailure,
  fetchBoletimRequest,
  fetchBoletimSuccess,
  fetchBoletimFailure,
  sendBoletimEmailRequest,
  sendBoletimEmailSuccess,
  sendBoletimEmailFailure,
} = bulletinSlice.actions;

export default bulletinSlice.reducer;
