import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '@/logic/authentication/ducks/auth-slice';
import headerReducer from '@/logic/header/ducks/header-slice';
import footerReducer from '@/logic/footer/ducks/footer-slice';
import userRootReducer from '@/logic/user/user-root-reducer';
import notificationsReducer from '@/logic/notifications/ducks/notifications-slice';
import chamadaReducer from '@/logic/call/ducks/call.slice';
import chatReducer from "@/logic/chat/ducks/chat.slice";

const rootReducer = combineReducers({
  auth: authReducer,
  header: headerReducer,
  footer: footerReducer,
  notifications: notificationsReducer,
  user: userRootReducer,
  chamada: chamadaReducer,
  chat: chatReducer
});

export default rootReducer;
