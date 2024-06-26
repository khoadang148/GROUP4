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
import HomeScreen from "./HomeScreen";
import Livestream from "./Livestream";
import { AuthContextProvider, useAuth } from "./context/AuthContext";
import withAuth from "./AuthChecker";
import AuthChecker from "./AuthChecker";
import { useDispatch, useSelector } from "react-redux";
import ExploreScreen from "./ExploreScreen";
import Footer from "./components/Footer";
import SavedCourses from "./SavedCourses";
import CertificationCenter from "./CertificationCenter";
import DashBoard from "./DashBoard";
import { setToken, setRole } from "./redux/actions/auth.action";
import Cookies from "js-cookie";
import HeaderPages from "./components/HeaderPages";
import About from "./About";

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
  const role = useSelector((state) => state.auth.role);

  return (
    <div className="flex flex-col min-h-screen">
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="flex text-black">
        {role === "student" && (
          <Sidebar
            sidebar={sidebar}
            handleToggleSidebar={handleToggleSidebar}
            className="relative z-50"
          />
        )}
        {role === "teacher" && (
          <Sidebar
            sidebar={sidebar}
            handleToggleSidebar={handleToggleSidebar}
            className="relative z-50"
          />
        )}
        <Container
          fluid
          className={`transform duration-700  ${
            sidebar ? "ml-[250px]" : "ml-0 "
          }`}
        >
          {children}
        </Container>
      </div>
      <Footer sidebar={sidebar} />
    </div>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const [sidebar, toggleSidebar] = useState(true);
  const [visibleAvatars, setVisibleAvatars] = useState(7);
  const handleToggleSidebar = () => {
    toggleSidebar(!sidebar);
    setVisibleAvatars(visibleAvatars === 7 ? 6 : 7);
  };
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);
  const navigate = useNavigate();

  useEffect(() => {
    // Đọc token từ cookie
    const tokenFromCookie = Cookies.get("token");
    if (tokenFromCookie) {
      dispatch(setToken(tokenFromCookie));
      dispatch(setRole(tokenFromCookie));
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    if (token && role === "teacher") {
      navigate("/dashboard");
    }
  }, [token, role, navigate]);

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
      <Route
        path="/explore"
        element={
          token ? (
            <>
              <div className="flex flex-col min-h-screen">
                <Header handleToggleSidebar={handleToggleSidebar} />
                <div className="flex text-xl flex-grow text-black">
                  <Sidebar
                    sidebar={sidebar}
                    handleToggleSidebar={handleToggleSidebar}
                    className="relative z-50"
                  />
                  <Container
                    sidebar={sidebar}
                    fluid
                    className={`  transform duration-700    ${
                      sidebar ? "ml-[250px]" : "ml-0"
                    }`}
                  >
                    <ExploreScreen sidebar={sidebar} />
                  </Container>
                </div>
                <Footer sidebar={sidebar} />
              </div>
            </>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/savedcourses"
        element={
          token ? (
            <Layout>
              <SavedCourses />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/certificationcenter"
        element={
          token ? (
            <>
              <div className="flex flex-col min-h-screen">
                <CertificationCenter />
                <Footer />
              </div>
            </>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/about"
        element={
          token ? (
            <div className="flex flex-col min-h-screen">
              <HeaderPages/>
              <About />
              <Footer />
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      {role === "teacher" && (
        <Route
          path="/dashboard"
          element={
            token ? (
              <Layout>
                <DashBoard />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      )}

      <Route path="*" element={<Navigate to={token ? "/home" : "/login"} />} />
    </Routes>
  );
};

export default App;
