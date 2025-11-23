import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchNotificationsRequest,
  fetchNotificationsSuccess,
  fetchNotificationsFailure,
} from '../ducks/notifications-slice';
import notificationsApi from '../api/notifications-api';

function* fetchNotificationsSaga() {
  try {
    const notifications = yield call(notificationsApi, '/notifications', 'GET');
    yield put(fetchNotificationsSuccess(notifications));
  } catch (error) {
    yield put(fetchNotificationsFailure(error.message));
  }
}

export default function* notificationsWatcher() {
  yield takeLatest(fetchNotificationsRequest.type, fetchNotificationsSaga);
}
