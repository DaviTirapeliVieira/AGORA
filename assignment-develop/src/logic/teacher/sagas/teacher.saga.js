import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchTeachersRequest,
  fetchTeachersSuccess,
  fetchTeachersFailure,
} from '../ducks/teacher.slice';

import { fetchTeachersApi } from '../api/teacher.api';

function* fetchTeachersSaga() {
  try {
    const response = yield call(fetchTeachersApi.getTeacher);
    yield put(fetchTeachersSuccess(response));
  } catch (error) {
    yield put(
      fetchTeachersFailure(
        error.response?.data?.message || 'Erro ao carregar professores',
      ),
    );
  }
}

export default function* teacherSaga() {
  yield takeLatest(fetchTeachersRequest.type, fetchTeachersSaga);
}
