import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '@/logic/authentication/ducks/auth-slice';
import headerReducer from '@/logic/header/ducks/header-slice';
import footerReducer from '@/logic/footer/ducks/footer-slice';
import userRootReducer from '@/logic/user/user-root-reducer';
import notificationsReducer from '@/logic/notifications/ducks/notifications-slice';
import callReducer from '@/logic/call/ducks/call.slice';
import gradesReducer from '@/logic/grades/ducks/grades.slice';
import generatorReducer from '@/logic/generator/ducks/generator.slice';
import calendarReducer from '@/logic/calendar/ducks/calendar.slice';
import classesReducer from '@/logic/classes/ducks/classes.slice';
import passwordRecoveryReducer from '@/logic/password_recovery/ducks/password_recovery.slice';
import boletimReducer from '@/logic/bulletin/ducks/bulletin.slice';
import attendenceReducer from '@/logic/attendence/ducks/attendence.slice';
import disciplineCreateReducer from '@/logic/discipline/ducks/discipline-create.slice';
import teacherReducer from '@/logic/teacher/ducks/teacher.slice'

const rootReducer = combineReducers({
  auth: authReducer,
  header: headerReducer,
  footer: footerReducer,
  notifications: notificationsReducer,
  user: userRootReducer,
  call: callReducer,
  grades: gradesReducer,
  generator: generatorReducer,
  calendar: calendarReducer,
  classes: classesReducer,
  passwordRecovery: passwordRecoveryReducer,
  boletim: boletimReducer,
  attendence: attendenceReducer,
  disciplineCreate: disciplineCreateReducer,
  teachers: teacherReducer,
});

export default rootReducer;
