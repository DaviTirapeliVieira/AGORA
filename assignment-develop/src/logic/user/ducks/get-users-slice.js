import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  error: null,
  loading: false,
};

const getUsersSlice = createSlice({
  name: 'user-list',
  initialState,
  reducers: {
    fetchUsersRequest: state => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    fetchUsersSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: null,
      };
    },
    fetchUsersFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  },
});

export const { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } =
  getUsersSlice.actions;
export default getUsersSlice.reducer;
