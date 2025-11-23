import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  success: false,
};

const passwordRecoverySlice = createSlice({
  name: 'passwordRecovery',
  initialState,
  reducers: {
    sendResetLinkRequest: (state, action) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    sendResetLinkSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    sendResetLinkFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetPasswordRecoveryState: (state) => initialState,
  },
});

export const {
  sendResetLinkRequest,
  sendResetLinkSuccess,
  sendResetLinkFailure,
  resetPasswordRecoveryState,
} = passwordRecoverySlice.actions;

export default passwordRecoverySlice.reducer;
