import { call, put, takeLatest, select } from 'redux-saga/effects';
import {
  fetchCallSuccess,
  fetchCallFailure,
  saveCallSuccess,
  saveCallFailure,
  fetchCallRequest,
  saveCallRequest,
} from '../ducks/call.slice';
import { CallApi } from '../api/call-api';

// Test
// import { fetchCallApi, saveCallApi } from '../api/call.api.test';

function* fetchCallSaga(action) {
  try {
    const classId = action.payload;

    const user = yield select(state => state.userDetails.user);

    if (!user || !user.id) {
      yield put(fetchCallFailure('Usuário não está autenticado'));
      return;
    }

    if (user.role === 'teacher') {
      const classesToday = yield select(state => state.classes.classesToday);

      const aulaDoProfessor = classesToday.find(c => c.id === classId);

      if (!aulaDoProfessor) {
        yield put(
          fetchCallFailure('Você não tem permissão para ver esta chamada'),
        );
        return;
      }
    }
    const response = yield call(CallApi.getCall, classId);

    yield put(fetchCallSuccess(response));
  } catch (error) {
    yield put(
      fetchCallFailure(
        error.response?.data?.message || 'Erro ao carregar chamada',
      ),
    );
  }
}

function* saveCallSaga(action) {
  try {
    const { classId, presenca } = action.payload;

    const user = yield select(state => state.userDetails.user);

    if (!user || !user.id) {
      yield put(saveCallFailure('Usuário não autenticado'));
      return;
    }

    yield call(CallApi.saveCal, { classId, presenca });

    yield put(saveCallSuccess());
  } catch (error) {
    yield put(
      saveCallFailure(
        error.response?.data?.message || 'Erro ao salvar chamada',
      ),
    );
  }
}

export default function* watchCallSaga() {
  yield takeLatest(fetchCallRequest.type, fetchCallSaga);
  yield takeLatest(saveCallRequest.type, saveCallSaga);
}
