import { call, put, takeEvery } from "redux-saga/effects";
import {
  downloadFolderRequest,
  downloadFolderSuccess,
  downloadFolderFailure,
} from "../ducks/generator.slice";

import generatorApi from "../api/generator.api";

function* handleDownloadFolderSaga() {
  try {
    const response = yield call(generatorApi.gerarPasta);

    // Cria link para disparar download automático
    const link = document.createElement("a");
    link.href = response.url;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    link.remove();

    yield put(downloadFolderSuccess());
  } catch (error) {
    yield put(
      downloadFolderFailure(
        error.response?.data?.message || error.message || "Erro ao baixar pasta"
      )
    );
  }
}

function* watchDownloadSaga() {
  yield takeEvery(downloadFolderRequest.type, handleDownloadFolderSaga);
}

export default watchDownloadSaga;
