import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchChamadaSuccess,
  fetchChamadaFailure,
  saveChamadaSuccess,
  saveChamadaFailure,
  fetchChamadaRequest,
  saveChamadaRequest,
} from "../ducks/call.slice";
import { getCall, saveCall } from "../api/call-api";

function* fetchChamadaSaga() {
  try {
    const data = yield call(getCall);
    yield put(fetchChamadaSuccess(data));
  } catch (error) {
    console.error("Erro ao buscar chamada:", error);
    yield put(
      fetchChamadaFailure(error.response?.data?.message || "Erro ao carregar chamada")
    );
  }
}

function* saveChamadaSaga(action) {
  try {
    yield call(saveCall, action.payload);
    yield put(saveChamadaSuccess());
    alert("Chamada salva com sucesso!");
  } catch (error) {
    console.error("Erro ao salvar chamada:", error);
    yield put(
      saveChamadaFailure(error.response?.data?.message || "Erro ao salvar chamada")
    );
  }
}

export default function* chamadaSaga() {
  yield takeLatest(fetchChamadaRequest.type, fetchChamadaSaga);
  yield takeLatest(saveChamadaRequest.type, saveChamadaSaga);
}
