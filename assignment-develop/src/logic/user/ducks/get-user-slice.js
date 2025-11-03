import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  error: null,
  loading: false,
};

const getUserSlice = createSlice({
  name: 'user-details',
  initialState,
  reducers: {
    fetchUserRequest: state => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    fetchUserSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };
    },
    fetchUserFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  },
});

export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } =
  getUserSlice.actions;
export default getUserSlice.reducer;
