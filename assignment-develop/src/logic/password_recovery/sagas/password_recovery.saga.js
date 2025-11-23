import { call, put, takeLatest } from 'redux-saga/effects';
import {
  sendResetLinkRequest,
  sendResetLinkSuccess,
  sendResetLinkFailure,
} from '../ducks/password_recovery.slice';
import { sendResetLink as apiSendResetLink } from '../api/password_recovery.api';

function* handleSendResetLink(action) {
  try {
    yield call(apiSendResetLink, action.payload);
    yield put(sendResetLinkSuccess());
  } catch (error) {
    yield put(sendResetLinkFailure(error.response?.data?.message || error.message));
  }
}

export default function* watchSendResetLink() {
  yield takeLatest(sendResetLinkRequest.type, handleSendResetLink);
}
