import { createSlice } from '@reduxjs/toolkit';

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchNotificationsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchNotificationsSuccess(state, action) {
      state.loading = false;
      state.notifications = action.payload;
    },
    fetchNotificationsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchNotificationsRequest,
  fetchNotificationsSuccess,
  fetchNotificationsFailure,
} = notificationsSlice.actions;

export default notificationsSlice.reducer;
