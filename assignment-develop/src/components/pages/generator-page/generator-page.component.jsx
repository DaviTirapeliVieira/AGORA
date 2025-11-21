import { useDispatch, useSelector } from "react-redux";
import { sendMessageRequest, downloadFolderRequest } from "@/logic/generator/ducks/generator.slice";
import { selectDownloading } from "@/logic/generator/ducks/generator.selector";
import ChatArea from "@/components/organisms/chat-area/chat-area.component";
import MainLayout from "@/components/templates/main-layout/main-layout.component";
import Sidebar from "@/components/organisms/sidebar-code/sidebar-code.component";
import "./generator-page.component.scss";

const GeneratorPage = () => {
  const dispatch = useDispatch();
  const downloading = useSelector(selectDownloading);

  const handleSend = (msg) => {
    dispatch(sendMessageRequest(msg));
  };

  const handleDownload = () => {
    dispatch(downloadFolderRequest());
  };

  return (
    <MainLayout>
      <Sidebar />
      <div className="chat-and-download">
        <ChatArea onSend={handleSend} onDownload={handleDownload} disabled={downloading} />
      </div>
    </MainLayout>
  );
};

export default GeneratorPage;
