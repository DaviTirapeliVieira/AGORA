import { call, put, takeLatest, select } from 'redux-saga/effects';
import {
  fetchTodayClassesRequest,
  fetchTodayClassesSuccess,
  fetchTodayClassesFailure,
} from '../ducks/classes.slice';

import { ClassesApi } from '../api/classes.api';

function* fetchTodayClassesSaga() {
  try {
    const user = yield select(state => state.userDetails.user);

    if (!user || !user.id || !user.role) {
      yield put(fetchTodayClassesFailure('Usuário não autenticado'));
      return;
    }

    const classes = yield call(ClassesApi.getClasses, user.id, user.role);

    yield put(fetchTodayClassesSuccess(classes));
  } catch (error) {
    console.error('ERRO AO CARREGAR AULAS:', error);
    yield put(
      fetchTodayClassesFailure(
        error.response?.data?.message || 'Failed to load classes',
      ),
    );
  }
}

export default function* classesSaga() {
  yield takeLatest(fetchTodayClassesRequest.type, fetchTodayClassesSaga);
}
