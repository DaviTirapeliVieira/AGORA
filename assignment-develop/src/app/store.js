import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { setUpInterceptors } from '@/app/interceptor';
import rootSaga from '@/logic/root-saga';
import rootReducer from '@/logic/root-reducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

setUpInterceptors(store);

export default store;
