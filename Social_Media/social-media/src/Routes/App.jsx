import { useState } from "react";
import "./App.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import CreatePost from "../components/Sidebar/Post/CreatePost";
import PostList from "../components/Sidebar/Post/PostList";

import Sidebar from "../components/Sidebar/Sidebar";
import { PostListProvider } from "../components/Store";
import { Outlet } from "react-router-dom";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div className="main-container">
          <Sidebar setSelectedTab={setSelectedTab}></Sidebar>

          <div className="container1">
            <Header />
            {/* {selectedTab === "Home" ? <PostList /> : <CreatePost />} */}
            <Outlet />

            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
