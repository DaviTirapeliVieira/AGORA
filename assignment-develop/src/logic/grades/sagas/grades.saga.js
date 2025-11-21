import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchGradesRequest,
  fetchGradesSuccess,
  fetchGradesFailure,
  saveGradesRequest,
  saveGradesSuccess,
  saveGradesFailure,
} from "../ducks/grades.slice";
import { getGrades, saveGrades } from "../api/grades.api";

function* fetchGradesSaga() {
  try {
    const data = yield call(getGrades);
    yield put(fetchGradesSuccess(data));
  } catch (error) {
    console.error("Erro ao buscar notas:", error);
    yield put(fetchGradesFailure(error.response?.data?.message || "Erro ao carregar notas"));
  }
}

function* saveGradesSaga(action) {
  try {
    yield call(saveGrades, action.payload);
    yield put(saveGradesSuccess());
    alert("Notas salvas com sucesso!");
  } catch (error) {
    console.error("Erro ao salvar notas:", error);
    yield put(saveGradesFailure(error.response?.data?.message || "Erro ao salvar notas"));
  }
}

export default function* gradesSaga() {
  yield takeLatest(fetchGradesRequest.type, fetchGradesSaga);
  yield takeLatest(saveGradesRequest.type, saveGradesSaga);
}
