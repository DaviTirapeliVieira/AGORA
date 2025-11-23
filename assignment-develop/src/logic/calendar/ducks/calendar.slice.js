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
    fetchEventsRequest: state => {
      state.loading = true;
      state.error = null;
    },
    fetchEventsSuccess: (state, action) => {
      state.events = action.payload;
      state.loading = false;
    },
    fetchEventsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addEventRequest: state => {
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

export const {
  fetchEventsRequest,
  fetchEventsSuccess,
  fetchEventsFailure,
  addEventRequest,
  addEventSuccess,
  addEventFailure,
} = calendarSlice.actions;

export default calendarSlice.reducer;
