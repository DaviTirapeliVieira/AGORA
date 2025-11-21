import CodeForm from "@/components/molecules/code-form/code-form.component";
import {
  CircularProgress,
  Alert,
} from "@mui/material";
import "./chat-area.component.scss";

const ChatArea = ({ onSend, onDownload, loading, error, disabled }) => {
  return (
    <div className="chat-area">
      <div className="chat-content">
        <div className="download-icon" onClick={onDownload} disabled={disabled}>
          <i className="bi bi-download"></i>
        </div>

        {loading && (
          <CircularProgress className="loading-alert" />
        )}

        {error && (
          <Alert severity="error" className="error-alert">
            Erro: {error}
          </Alert>
        )}
      </div>

      <CodeForm onChange={onSend} onDownload={onDownload} disabled={disabled} />
    </div>
  );
};

export default ChatArea;
