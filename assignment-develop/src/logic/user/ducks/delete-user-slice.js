import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  success: false,
  error: null,
  loading: false,
};

const deleteUserSlice = createSlice({
  name: 'delete-user',
  initialState,
  reducers: {
    deleteUserRequest: state => {
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
      };
    },
    deleteUserSuccess: state => {
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
      };
    },
    deleteUserFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
    },
  },
});

export const { deleteUserRequest, deleteUserSuccess, deleteUserFailure } =
  deleteUserSlice.actions;
export default deleteUserSlice.reducer;
