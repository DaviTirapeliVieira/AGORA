import { call, put, takeEvery } from "redux-saga/effects";
import {
  sendMessageRequest,
  sendMessageSuccess,
  sendMessageFailure,
} from "../ducks/generator.slice";
import generatorApi from "../api/generator.api";

function* handleSendMessageSaga(action) {
  try {
    const response = yield call(generatorApi.sendMessage, action.payload);
    yield put(sendMessageSuccess(response));
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
    yield put(
      sendMessageFailure(
        error.response?.data?.message || error.message || "Erro ao enviar mensagem"
      )
    );
  }
}

function* watchChatSaga() {
  yield takeEvery(sendMessageRequest.type, handleSendMessageSaga);
}

export default watchChatSaga;
