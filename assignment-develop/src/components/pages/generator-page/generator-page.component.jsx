import { useDispatch } from "react-redux";
import { sendMessageRequest } from "@/logic/chat/ducks/chat.slice";
import ChatArea from "@/components/organisms/chat-area/chat-area.component";
import MainLayout from "@/components/templates/main-layout/main-layout.component";
import Sidebar from "@/components/organisms/sidebar-code/sidebar-code.component";
import "./generator-page.component.scss";

const GeneratorPage = () => {
  const dispatch = useDispatch();

  const handleSend = (msg) => {
    dispatch(sendMessageRequest(msg));
  };

  return (
    <MainLayout>
      <Sidebar />
      <ChatArea onSend={handleSend} />
    </MainLayout>
  );
};

export default GeneratorPage;
