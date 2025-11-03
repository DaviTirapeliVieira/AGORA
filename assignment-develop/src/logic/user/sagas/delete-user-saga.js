import { call, put, takeEvery } from 'redux-saga/effects';
import {
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFailure,
} from '../ducks/delete-user-slice';
import { fetchUsersRequest } from '../ducks/get-users-slice';
import { deleteUserById } from '../api/user-api';

const deleteUserSaga = function* deleteUserSaga(action) {
  try {
    yield call(deleteUserById, action.payload);
    yield put(deleteUserSuccess());
    yield put(fetchUsersRequest()); // Trigger reload of user list
  } catch (error) {
    yield put(deleteUserFailure(error.message));
  }
};

const watchDeleteUserSaga = function* watchDeleteUserSaga() {
  yield takeEvery(deleteUserRequest.type, deleteUserSaga);
};

export { watchDeleteUserSaga };
