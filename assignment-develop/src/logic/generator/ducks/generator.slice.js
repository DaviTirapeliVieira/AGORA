import { createSlice } from "@reduxjs/toolkit";

const generatorSlice = createSlice({
  name: "generator",
  initialState: {
    history: [{ title: "Conversa 1" }],
    messages: [],
    loading: false,
    error: null,
    downloading: false,
    downloadError: null,
  },
  reducers: {
    sendMessageRequest: (state, action) => {
      state.loading = true;
      state.error = null;
      state.messages.push({
        text: action.payload,
        sender: "user",
        timestamp: new Date().toISOString(),
      });
    },
    sendMessageSuccess: (state, action) => {
      state.loading = false;
      const botReply =
        typeof action.payload === "object"
          ? action.payload.reply || JSON.stringify(action.payload)
          : action.payload;
      state.messages.push({
        text: botReply,
        sender: "bot",
        timestamp: new Date().toISOString(),
      });
    },
    sendMessageFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.messages.push({
        text: "Erro ao enviar mensagem. Tente novamente.",
        sender: "system",
        timestamp: new Date().toISOString(),
      });
    },

    downloadFolderRequest: (state) => {
      state.downloading = true;
      state.downloadError = null;
    },
    downloadFolderSuccess: (state) => {
      state.downloading = false;
    },
    downloadFolderFailure: (state, action) => {
      state.downloading = false;
      state.downloadError = action.payload;
    },
  },
});

export const {
  sendMessageRequest,
  sendMessageSuccess,
  sendMessageFailure,
  downloadFolderRequest,
  downloadFolderSuccess,
  downloadFolderFailure,
} = generatorSlice.actions;

export default generatorSlice.reducer;
