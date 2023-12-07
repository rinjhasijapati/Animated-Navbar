import Channelbar from "./components/ChannelBar/Channelbar";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import SideBar from "./components/SideBar/Sidebar";



function App() {
  return (
    <div className="flex">
      <SideBar />
      <Channelbar />
      <ContentContainer />
    </div>
  );
}

export default App;
