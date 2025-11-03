import { all } from 'redux-saga/effects';
import watchFetchUserSaga from './sagas/get-user-saga';
import watchFetchUsersSaga from './sagas/get-users-saga';
import { watchDeleteUserSaga } from './sagas/delete-user-saga';

export default function* userRootSaga() {
  yield all([
    watchFetchUserSaga(),
    watchFetchUsersSaga(),
    watchDeleteUserSaga(),
  ]);
}
