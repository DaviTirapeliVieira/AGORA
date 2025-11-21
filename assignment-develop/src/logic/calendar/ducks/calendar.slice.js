import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
  loading: false,
  error: null,
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addEventRequest: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    addEventSuccess: (state, action) => {
      state.events.push(action.payload);
      state.loading = false;
    },
    addEventFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { addEventRequest, addEventSuccess, addEventFailure } =
  calendarSlice.actions;

export default calendarSlice.reducer;
