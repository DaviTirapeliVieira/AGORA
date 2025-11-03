import { call, put, takeEvery } from 'redux-saga/effects';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
} from '../ducks/auth-slice';
import loginApi from '../api/auth-api';

const loginSaga = function* loginSaga(action) {
  try {
    const response = yield call(loginApi, action.payload);
    yield put(loginSuccess({ token: response.access_token }));
    localStorage.setItem('token', response.access_token);
  } catch (error) {
    yield put(loginFailure(error.message));
  }
};

const logoutSaga = function* logoutSaga() {
  localStorage.removeItem('token');
  yield;
};

const watchLoginSaga = function* watchLoginSaga() {
  yield takeEvery(loginRequest.type, loginSaga);
  yield takeEvery(logout.type, logoutSaga);
};

export default watchLoginSaga;
