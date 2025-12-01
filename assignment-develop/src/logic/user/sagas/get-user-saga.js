import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
} from '../ducks/get-user-slice';
import { UserApi } from '../api/user-api';
import User from '../models/user-model';

// Test
// import { fetchUserTest } from '../api/user-api.test';

const fetchUserSaga = function* fetchUserSaga(action) {
  try {
    const userResponse = yield call(UserApi.fetchUserById, action.payload);
    const user = User.fromPlainObject(userResponse);
    yield put(fetchUserSuccess(user.toPlainObject()));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
};

const watchFetchUserSaga = function* watchFetchUserSaga() {
  yield takeEvery(fetchUserRequest.type, fetchUserSaga);
};

export default watchFetchUserSaga;
