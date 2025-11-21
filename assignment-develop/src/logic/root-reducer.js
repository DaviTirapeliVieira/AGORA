import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '@/logic/authentication/ducks/auth-slice';
import headerReducer from '@/logic/header/ducks/header-slice';
import footerReducer from '@/logic/footer/ducks/footer-slice';
import userRootReducer from '@/logic/user/user-root-reducer';
import notificationsReducer from '@/logic/notifications/ducks/notifications-slice';
import callReducer from '@/logic/call/ducks/call.slice';
import gradesReducer from '@/logic/grades/ducks/grades.slice';
import generatorReducer from "@/logic/generator/ducks/generator.slice";
import calendarReducer from "@/logic/calendar/ducks/calendar.slice";
import classesReducer from "@/logic/classes/ducks/classes.slice";

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
});

export default rootReducer;
