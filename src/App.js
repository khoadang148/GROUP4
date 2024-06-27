import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setRole, setID } from "./redux/actions/auth.action";
import Cookies from "js-cookie";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import ForgotPasswordScreen from "./ForgotPasswordScreen";
import HomeScreen from "./HomeScreen";
import Livestream from "./Livestream";
import ExploreScreen from "./ExploreScreen";
import Footer from "./components/Footer";
import SavedCourses from "./SavedCourses";
import CertificationCenter from "./CertificationCenter";
import DashBoard from "./DashBoard";
import AllInstructors from "./AllInstructors";
import InstructorProfile from "./InstructorProfile";
import HeaderPages from "./components/HeaderPages";
import About from "./About";
import Dashboard2 from "./Dashboard2";
import OurBlog from "./OurBlog";
import Help from "./Help";
import SettingAccount from "./Setting";
import Privacy from "./Privacy";
import BillingandPayout from "./BillingandPayout";
import ApiClients from "./ApiClients";
import CloseAccount from "./CloseAccount";
import Notification from "./Notification";

// Import useNavigate from react-router-dom
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(true);
  const handleToggleSidebar = () => toggleSidebar(!sidebar);
  const role = useSelector((state) => state.auth.role);

  return (
    <div className="flex flex-col h-screen">
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="flex text-black">
        {(role === "student" || role === "teacher") && (
          <Sidebar
            sidebar={sidebar}
            handleToggleSidebar={handleToggleSidebar}
            className="relative z-50"
          />
        )}
        <Container
          fluid
          className={`min-h-screen transform duration-700 ${
            sidebar ? "ml-[250px]" : ""
          }`}
        >
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { sidebar })
          )}
        </Container>
      </div>
      <Footer sidebar={sidebar} />
    </div>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const [isHomeVisited, setIsHomeVisited] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);
  
  // Initialize useNavigate here
  const navigate = useNavigate();

  useEffect(() => {
    const tokenFromCookie = Cookies.get("token");
    const idFromCookie = Cookies.get("id");
    if (tokenFromCookie) {
      dispatch(setToken(tokenFromCookie));
      dispatch(setRole(tokenFromCookie)); // Assuming setRole sets both token and role
      dispatch(setID(idFromCookie));
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    if (role === "student" && isHomeVisited) {
      navigate("/dashboard2");
    } else if (role === "teacher" && isHomeVisited) {
      navigate("/dashboard");
    }
  }, [role, isHomeVisited, navigate]);

  const handleHomeVisit = () => {
    setIsHomeVisited(true);
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<SignupScreen />} />
      <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
      <Route
        path="/home"
        element={
          token ? (
            <Layout>
              <HomeScreen onVisit={handleHomeVisit} />
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
            <Layout>
              <ExploreScreen />
            </Layout>
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
        path="/instructorprofile"
        element={
          token ? (
            <Layout>
              <InstructorProfile />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/help"
        element={
          token ? (
            <Layout>
              <Help />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/allinstructors"
        element={
          token ? (
            <Layout>
              <AllInstructors />
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
            <div className="flex flex-col min-h-screen">
              <CertificationCenter />
              <Footer />
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/blog"
        element={
          token ? (
            <div className="flex flex-col min-h-screen">
              <HeaderPages />
              <OurBlog />
              <Footer />
            </div>
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
              <HeaderPages />
              <About />
              <Footer />
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/setting"
        element={
          token ? (
            <Layout>
              <SettingAccount />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/notification"
        element={
          token ? (
            <Layout>
              <Notification />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/privacy"
        element={
          token ? (
            <Layout>
              <Privacy />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/billing"
        element={
          token ? (
            <Layout>
              <BillingandPayout />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/apiclient"
        element={
          token ? (
            <Layout>
              <ApiClients />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/closeAccount"
        element={
          token ? (
            <Layout>
              <CloseAccount />
            </Layout>
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
      {role === "student" && (
        <Route
          path="/dashboard2"
          element={
            token ? (
              <Layout>
                <Dashboard2 />
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
