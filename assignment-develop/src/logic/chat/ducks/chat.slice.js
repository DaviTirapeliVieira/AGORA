import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    history: [{ title: "Conversa 1" }],
    messages: [],
    loading: false,
    error: null,
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
  },
});

export const {
  sendMessageRequest,
  sendMessageSuccess,
  sendMessageFailure,
} = chatSlice.actions;

export default chatSlice.reducer;
