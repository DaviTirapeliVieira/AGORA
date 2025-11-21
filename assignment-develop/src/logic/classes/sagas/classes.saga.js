import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchTodayClassesRequest,
  fetchTodayClassesSuccess,
  fetchTodayClassesFailure,
} from '../ducks/classes.slice';
import { getClasses } from '../api/classes.api';

function* fetchTodayClassesSaga() {
  try {
    const data = yield call(getClasses);
    yield put(fetchTodayClassesSuccess(data));
  } catch (error) {
    yield put(
      fetchTodayClassesFailure(error.response?.data?.message || 'Failed to load classes')
    );
  }
}

export default function* classesSaga() {
  yield takeLatest(fetchTodayClassesRequest.type, fetchTodayClassesSaga);
}
