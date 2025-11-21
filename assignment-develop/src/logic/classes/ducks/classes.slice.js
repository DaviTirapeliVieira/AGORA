import { createSlice } from '@reduxjs/toolkit';

const classesSlice = createSlice({
  name: 'classes',
  initialState: {
    classesToday: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchTodayClassesRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTodayClassesSuccess: (state, action) => {
      state.loading = false;
      state.classesToday = action.payload;
    },
    fetchTodayClassesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchTodayClassesRequest,
  fetchTodayClassesSuccess,
  fetchTodayClassesFailure,
} = classesSlice.actions;

export default classesSlice.reducer;
