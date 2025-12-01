import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchBoletimAnosRequest,
  fetchBoletimAnosSuccess,
  fetchBoletimAnosFailure,
  fetchBoletimRequest,
  fetchBoletimSuccess,
  fetchBoletimFailure,
  sendBoletimEmailRequest,
  sendBoletimEmailSuccess,
  sendBoletimEmailFailure,
} from '../ducks/bulletin.slice';
import { BulletinApi } from '../api/bulletin.api';

// Test
// import {
//   fetchBoletimAnosApi,
//   fetchBoletimApi,
//   sendBoletimEmailApi,
// } from '@/logic/bulletin/api/bulletin.api.test';

function* fetchBoletimAnosWorker() {
  try {
    const res = yield call(BulletinApi.getAnos);
    yield put(fetchBoletimAnosSuccess(res.payload));
  } catch (error) {
    yield put(
      fetchBoletimAnosFailure('Erro ao carregar anos do boletim.'),
    );
  }
}

function* fetchBoletimWorker(action) {
  try {
    const ano = action.payload;
    const res = yield call(BulletinApi.getBoletim, ano);
    yield put(fetchBoletimSuccess(res.payload));
  } catch (error) {
    yield put(fetchBoletimFailure('Erro ao carregar boletim.'));
  }
}

function* sendBoletimEmailWorker() {
  try {
    const res = yield call(BulletinApi.sendBoletimEmail);
    if (res.success) {
      yield put(sendBoletimEmailSuccess());
    } else {
      yield put(sendBoletimEmailFailure());
    }
  } catch (error) {
    yield put(sendBoletimEmailFailure());
  }
}

export default function* boletimWatcher() {
  yield all([
    takeLatest(fetchBoletimAnosRequest.type, fetchBoletimAnosWorker),
    takeLatest(fetchBoletimRequest.type, fetchBoletimWorker),
    takeLatest(sendBoletimEmailRequest.type, sendBoletimEmailWorker),
  ]);
}
