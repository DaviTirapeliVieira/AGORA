import { useSelector } from "react-redux";
import {
  selectChatMessages,
  selectChatLoading,
  selectChatError,
} from "@/logic/chat/ducks/chat.selector";
import ChatInput from "@/components/molecules/code-form/code-form.component";
import "./chat-area.component.scss";

const ChatArea = ({ onSend }) => {
  const messages = useSelector(selectChatMessages);
  const loading = useSelector(selectChatLoading);
  const error = useSelector(selectChatError);

  return (
    <div className="chat-area">
      <div className="chat-content">
        {messages.map((msg, i) => (
          <p key={i} className={msg.sender}>
            <strong>{msg.sender === "user" ? "Você" : "IA"}:</strong> {msg.text}
          </p>
        ))}

        {loading && <p className="loading">Carregando resposta...</p>}
        {error && <p className="error">Erro: {error}</p>}
      </div>

      <ChatInput onSend={onSend} />
    </div>
  );
};

export default ChatArea;
