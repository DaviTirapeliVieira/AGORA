import { all } from 'redux-saga/effects';
import watchLoginSaga from '@/logic/authentication/sagas/auth-saga';
import userRootSaga from '@/logic/user/user-root-saga';
import notificationsWatcher from '@/logic/notifications/sagas/notifications-saga';
import callSaga from '@/logic/call/sagas/call.saga';
import gradesSaga from '@/logic/grades/sagas/grades.saga';
import generatorSaga from "@/logic/generator/sagas/generator.saga";
import calendarSaga from "@/logic/calendar/sagas/calendar.saga";
import classesSaga from "@/logic/classes/sagas/classes.saga";
import watchSendResetLink from '@/logic/password_recovery/sagas/password_recovery.saga';
import boletimWatcher from '@/logic/bulletin/sagas/bulletin.saga';
import attendanceWatcher from '@/logic/attendence/sagas/attendence.saga';
import teacherSaga from '@/logic/teacher/sagas/teacher.saga';

export default function* rootSaga() {
  yield all([
    watchLoginSaga(),
    userRootSaga(),
    notificationsWatcher(),
    callSaga(),
    gradesSaga(),
    generatorSaga(),
    calendarSaga(),
    classesSaga(),
    watchSendResetLink(),
    boletimWatcher(),
    attendanceWatcher(),
    teacherSaga()
  ]);
}
