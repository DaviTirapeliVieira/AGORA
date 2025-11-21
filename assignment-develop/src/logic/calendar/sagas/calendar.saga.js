import { takeEvery, put, call } from 'redux-saga/effects';
import {
  addEventRequest,
  addEventSuccess,
  addEventFailure,
} from '../ducks/calendar.slice';
import { CalendarApi } from '../api/calendar-api';

function* handleAddEvent(action) {
  try {
    const response = yield call(CalendarApi.getEvents, action.payload);
    yield put(addEventSuccess(response));
  } catch (error) {
    console.error('Erro ao adicionar evento:', error);
    yield put(addEventFailure('Erro ao adicionar evento'));
  }
}

export default function* calendarSaga() {
  yield takeEvery(addEventRequest.type, handleAddEvent);
}
