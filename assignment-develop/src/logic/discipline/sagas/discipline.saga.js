import { call, put, takeLatest } from 'redux-saga/effects';
import {
  createDisciplineRequest,
  createDisciplineSuccess,
  createDisciplineFailure,
} from '../ducks/discipline-create.slice';

import { createDisciplineAPI } from '../api/discipline.api';

function* createDisciplineSaga(action) {
  try {
    yield call(createDisciplineAPI.create, action.payload);
    yield put(createDisciplineSuccess());
  } catch (error) {
    yield put(createDisciplineFailure(error.response?.data?.message || 'Erro ao criar disciplina.'));
  }
}

export default function* disciplineSaga() {
  yield takeLatest(createDisciplineRequest.type, createDisciplineSaga);
}
