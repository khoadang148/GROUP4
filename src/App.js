import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";

// const ProtectedRoute = ({ element: Element, ...rest }) => {
//   const { user } = useAuth();

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   return <Route {...rest} element={<Element />} />;
// };
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
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.role);
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      // Nếu không có token trong localStorage, điều hướng đến trang login
      return <Navigate to="/login" />;
    }
  }, [token]);

  return (
    <Routes>
    <Route path="/login" element={<LoginScreen />} />
    <Route
      path="/home"
      element={
        token ? (
          <Layout>
            <HomeScreen />
          </Layout>
        ) : (
          <Navigate to="/login" />
        )
      }
    />
    <Route
      path="/livestream"
      element={
        token ? (
          <Layout>
            <Livestream />
          </Layout>
        ) : (
          <Navigate to="/login" />
        )
      }
    />
    <Route path="*" element={<Navigate to={token ? "/home" : "/login"} />} />
  </Routes>
  );
};

export default App;
