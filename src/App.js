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
import InstructorProfie from "./InstructorProfile";
import HeaderPages from "./components/HeaderPages";
import About from "./About";
import InstructorProfile from "./InstructorProfile";
import Dashboard2 from "./Dashboard2";
import OurBlog from "./OurBlog";

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
    <div className="flex flex-col h-screen">
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
          className={`min-h-screen transform duration-700  ${
            sidebar ? "ml-[250px]" : ""
          }`}
        >
          {/* {children} */}
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
  const [sidebar, toggleSidebar] = useState(true);
  const [isHomeVisited, setIsHomeVisited] = useState(false);
  const handleToggleSidebar = () => toggleSidebar(!sidebar);
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);
  const navigate = useNavigate();

  useEffect(() => {
    const tokenFromCookie = Cookies.get("token");
    if (tokenFromCookie) {
      dispatch(setToken(tokenFromCookie));
      dispatch(setRole(tokenFromCookie));
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
            <>
              <Layout>
                <ExploreScreen sidebar={sidebar} />
              </Layout>
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
        path="/instructorprofile"
        element={
          token ? (
            <Layout>
              <InstructorProfile sidebar={sidebar} />
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
        path="/blog"
        element={
          token ? (
            <div className="flex flex-col min-h-screen">
              <HeaderPages/>
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
