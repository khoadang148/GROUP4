import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Container } from "react-bootstrap";
import {
  BrowserRouter,
  Routes,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import Livestream from "./components/Livestream";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(true);
  const handleToggleSidebar = () => toggleSidebar(!sidebar);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="flex text-xl text-black ">
        <Sidebar
          sidebar={sidebar}
          handleToggleSidebar={handleToggleSidebar}
          className="relative"
        />
        <Container
          sidebar={sidebar}
          fluid
          className={` duration-700 absolute transform ${
            sidebar ? "ml-[250px]" : ""
          }`}
        >
          {children}
        </Container>
      </div>
    </>
  );
};
const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomeScreen />
          </Layout>
        }
      />
      <Route
        path="/livestream"
        element={
          <Layout>
            <Livestream />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
