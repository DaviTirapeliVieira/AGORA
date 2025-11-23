import { takeEvery, put, call } from 'redux-saga/effects';
import {
  fetchEventsRequest,
  fetchEventsSuccess,
  fetchEventsFailure,
  addEventRequest,
  addEventSuccess,
  addEventFailure,
} from '../ducks/calendar.slice';
import { CalendarApi } from '../api/calendar-api';

function* handleFetchEvents() {
  try {
    const events = yield call(CalendarApi.getEvents);
    yield put(fetchEventsSuccess(events));
  } catch (error) {
    console.error('Erro ao buscar eventos:', error);
    yield put(fetchEventsFailure('Erro ao buscar eventos'));
  }
}

function* handleAddEvent(action) {
  try {
    const event = yield call(CalendarApi.addEvent, action.payload);
    yield put(addEventSuccess(event));
    yield call(handleFetchEvents);
  } catch (error) {
    console.error('Erro ao adicionar evento:', error);
    yield put(addEventFailure('Erro ao adicionar evento'));
  }
}

export default function* calendarSaga() {
  yield takeEvery(fetchEventsRequest.type, handleFetchEvents);
  yield takeEvery(addEventRequest.type, handleAddEvent);
}
