import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Container } from "react-bootstrap";
import LoginScreen from "./LoginScreen";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Redirect,
  Navigate,
} from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import Livestream from "./components/Livestream";
import { AuthContextProvider, useAuth } from "./context/AuthContext";
import withAuth from "./AuthChecker";
import AuthChecker from "./AuthChecker";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Route {...rest} element={<Element />} />;
};
const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(true);
  const handleToggleSidebar = () => toggleSidebar(!sidebar);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="flex text-xl text-black">
        <Sidebar
          sidebar={sidebar}
          handleToggleSidebar={handleToggleSidebar}
          className="relative z-50"
        />
        <Container
          sidebar={sidebar}
          fluid
          className={`  transform duration-700 absolute   ${
            sidebar ? "ml-[250px]" : "ml-0"
          }`}
        >
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  // const { user } = useAuth();
  return (
    <AuthContextProvider>
        <Routes>
        {/* {!user && <Route path="/" element={<Navigate to="/login" />} />} */}
          <Route path="/" element={<LoginScreen />} />
          <Route
            path="/home"
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
    </AuthContextProvider>
  );
};

export default App;
