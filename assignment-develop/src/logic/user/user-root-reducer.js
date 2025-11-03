import { combineReducers } from '@reduxjs/toolkit';
import getUserDetailsReducer from './ducks/get-user-slice';
import getUsersReducer from './ducks/get-users-slice';
import deleteUserReducer from './ducks/delete-user-slice';

const userRootReducer = combineReducers({
  userList: getUsersReducer,
  userDetails: getUserDetailsReducer,
  deleteUser: deleteUserReducer,
});

export default userRootReducer;
