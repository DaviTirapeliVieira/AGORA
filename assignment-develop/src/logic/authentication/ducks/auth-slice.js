import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token') || null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: state => ({
      ...state,
      loading: true,
    }),
    loginSuccess: (state, action) => ({
      ...state,
      loading: false,
      token: action.payload.token,
      error: null,
    }),
    loginFailure: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
    logout: state => ({
      ...state,
      token: null,
      error: null,
      loading: false,
    }),
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } =
  authSlice.actions;
export default authSlice.reducer;
