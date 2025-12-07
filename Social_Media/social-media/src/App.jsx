import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CreatePost from "./components/Sidebar/Post/CreatePost";
import PostList from "./components/Sidebar/Post/PostList";

import Sidebar from "./components/Sidebar/Sidebar";
import { PostListProvider } from "./components/Store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div className="main-container">
          <Sidebar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          ></Sidebar>

          <div className="container1">
            <Header />
            {selectedTab === "Home" ? <PostList /> : <CreatePost />}

            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
