import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from '../ducks/get-users-slice';
import { fetchAllUsers } from '../api/user-api';
import User from '../models/user-model';

const fetchUsersSaga = function* fetchUsersSaga() {
  try {
    const usersResponse = yield call(fetchAllUsers);
    const users = usersResponse.map(user =>
      User.fromPlainObject(user).toPlainObject(),
    );
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
};

const watchFetchUsersSaga = function* watchFetchUsersSaga() {
  yield takeEvery(fetchUsersRequest.type, fetchUsersSaga);
};

export default watchFetchUsersSaga;
