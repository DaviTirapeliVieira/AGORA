import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import {
  fetchGradeScreenDataRequest,
  fetchGradeScreenDataSuccess,
  fetchGradeScreenDataFailure,
  searchGradesRequest,
  searchGradesSuccess,
  searchGradesFailure,
  saveGradesRequest,
  saveGradesSuccess,
  saveGradesFailure,
} from '../ducks/grades.slice';
import {
  selectGradeFilters,
  selectGradeOriginalList,
} from '../ducks/grades.selector';

import { GradesApi } from '../api/grades.api';

// Test
// import {
//   fetchGradeScreenDataApi,
//   searchGradesApi,
//   saveGradesApi,
// } from '@/logic/grades/api/grades.api.test';

function* handleFetchGradeScreenData() {
  try {
    const response = yield call(GradesApi.getGrades);
    yield put(fetchGradeScreenDataSuccess(response));
  } catch (error) {
    yield put(
      fetchGradeScreenDataFailure(
        error?.message || 'Erro ao carregar dados da tela de notas.',
      ),
    );
  }
}

function* handleSearchGrades() {
  try {
    const filters = yield select(selectGradeFilters);

    const result = yield call(GradesApi.searchGrades, filters);
    yield put(searchGradesSuccess(result));
  } catch (error) {
    yield put(
      searchGradesFailure(error?.message || 'Erro ao carregar alunos.'),
    );
  }
}

function* handleSaveGrades() {
  try {
    const filters = yield select(selectGradeFilters);
    const originalList = yield select(selectGradeOriginalList);

    yield call(GradesApi.saveGrades, { filters, originalList });

    yield put(saveGradesSuccess());
  } catch (error) {
    yield put(saveGradesFailure(error?.message || 'Erro ao salvar as notas.'));
  }
}

export default function* gradesSaga() {
  yield all([
    takeLatest(fetchGradeScreenDataRequest.type, handleFetchGradeScreenData),
    takeLatest(searchGradesRequest.type, handleSearchGrades),
    takeLatest(saveGradesRequest.type, handleSaveGrades),
  ]);
}
