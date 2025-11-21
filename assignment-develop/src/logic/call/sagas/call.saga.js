import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchCallSuccess,
  fetchCallFailure,
  saveCallSuccess,
  saveCallFailure,
  fetchCallRequest,
  saveCallRequest,
} from "../ducks/call.slice";
import { getCall, saveCall } from "../api/call-api";

function* fetchCallSaga() {
  try {
    const data = yield call(getCall);
    yield put(fetchCallSuccess(data));
  } catch (error) {
    console.error("Erro ao buscar chamada:", error);
    yield put(
      fetchCallFailure(error.response?.data?.message || "Erro ao carregar chamada")
    );
  }
}

function* saveCallSaga(action) {
  try {
    yield call(saveCall, action.payload);
    yield put(saveCallSuccess());
    alert("Chamada salva com sucesso!");
  } catch (error) {
    console.error("Erro ao salvar chamada:", error);
    yield put(
      saveCallFailure(error.response?.data?.message || "Erro ao salvar chamada")
    );
  }
}

export default function* watchCallSaga() {
  yield takeLatest(fetchCallRequest.type, fetchCallSaga);
  yield takeLatest(saveCallRequest.type, saveCallSaga);
}
