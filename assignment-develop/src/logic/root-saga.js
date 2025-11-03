import { all } from 'redux-saga/effects';
import watchLoginSaga from '@/logic/authentication/sagas/auth-saga';
import userRootSaga from '@/logic/user/user-root-saga';
import notificationsWatcher from '@/logic/notifications/sagas/notifications-saga';
import chamadaSaga from '@/logic/call/sagas/call.saga';
import chatSaga from "@/logic/chat/sagas/chat.saga";

export default function* rootSaga() {
  yield all([
    watchLoginSaga(),
    userRootSaga(),
    notificationsWatcher(),
    chamadaSaga(),
    chatSaga(),
  ]);
}
