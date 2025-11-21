import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createUserRequest(state){
      state.loading = true
      state.error = null
    },
    createUserSuccess(state, action){
      state.loading = false
      state.data = action.payload
    },
    createUserFailure(state, action){
      state.loading = false
      state.error = action.payload
    }
  }
})

export const { createUserRequest, createUserSuccess, createUserFailure } = userSlice.actions
export default userSlice.reducer
