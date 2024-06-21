import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
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
  // const [footer, toggleFooter] = useState(true);
  const handleToggleSidebar = () => toggleSidebar(!sidebar);
  // const handleToggleFooter = () => toggleFooter(!footer);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="flex text-xl text-black ">
        <Sidebar
          sidebar={sidebar}
          handleToggleSidebar={handleToggleSidebar}
          className=" z-50 relative"
        />
        <Container
          sidebar={sidebar}
          fluid
          className={`  overflow-hidden duration-700 absolute transform ${
            sidebar  ? "ml-[250px]" : ""
          }`}
        >
          {children}
         
        </Container>
      
        
       
       
      
        </div>
     <Footer 
     sidebar={sidebar}
     />
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
