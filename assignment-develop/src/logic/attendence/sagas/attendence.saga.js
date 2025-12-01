import { call, put, takeLatest, all } from 'redux-saga/effects';
import { AttendanceApi } from '../api/attendence.api';

import {
  fetchAnosRequest,
  fetchAnosSuccess,
  fetchAnosFailure,
  fetchFrequenciaRequest,
  fetchFrequenciaSuccess,
  fetchFrequenciaFailure,
} from '../ducks/attendence.slice';

// Test
// import {
//   fetchAttendanceAnosApi,
//   fetchAttendanceFrequenciaApi,
// } from '@/logic/attendence/api/attendence.api.test';

function* fetchAnosWorker() {
  try {
    const res = yield call(AttendanceApi.getAnos);

    if (!res?.payload) throw new Error('Resposta inválida ao carregar anos.');

    yield put(fetchAnosSuccess(res.payload));
  } catch (error) {
    yield put(fetchAnosFailure(error.response?.data?.message || error.message));
  }
}

function* fetchFrequenciaWorker(action) {
  try {
    const ano = action.payload;
    const res = yield call(AttendanceApi.getFrequencia, ano);

    if (!res?.payload)
      throw new Error('Resposta inválida ao carregar frequência.');

    yield put(fetchFrequenciaSuccess(res.payload));
  } catch (error) {
    yield put(
      fetchFrequenciaFailure(error.response?.data?.message || error.message),
    );
  }
}

export default function* attendanceWatcher() {
  yield all([
    takeLatest(fetchAnosRequest.type, fetchAnosWorker),
    takeLatest(fetchFrequenciaRequest.type, fetchFrequenciaWorker),
  ]);
}
