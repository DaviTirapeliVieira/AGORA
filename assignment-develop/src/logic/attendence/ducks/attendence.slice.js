import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  anos: [],
  ano: null,
  loading: false,
  error: null,
};

const attendanceSlice = createSlice({
  name: 'attendance',
  initialState,
  reducers: {
    fetchAnosRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchFrequenciaRequest(state, action) {
      state.loading = true;
      state.error = null;
    },

    fetchAnosSuccess(state, action) {
      state.loading = false;
      state.anos = action.payload || [];
    },
    fetchFrequenciaSuccess(state, action) {
      state.loading = false;
      state.items = action.payload.items || [];
      state.ano = action.payload.ano || null;
    },

    fetchAnosFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchFrequenciaFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchAnosRequest,
  fetchAnosSuccess,
  fetchAnosFailure,
  fetchFrequenciaRequest,
  fetchFrequenciaSuccess,
  fetchFrequenciaFailure,
} = attendanceSlice.actions;

export default attendanceSlice.reducer;
