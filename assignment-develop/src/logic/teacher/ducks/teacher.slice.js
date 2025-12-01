import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const teacherSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    fetchTeachersRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchTeachersSuccess(state, action) {
      state.loading = false;
      state.items = action.payload;
    },
    fetchTeachersFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchTeachersRequest,
  fetchTeachersSuccess,
  fetchTeachersFailure,
} = teacherSlice.actions;

export default teacherSlice.reducer;
