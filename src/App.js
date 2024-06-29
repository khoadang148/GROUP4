import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Container } from "react-bootstrap";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import ForgotPasswordScreen from "./ForgotPasswordScreen";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Redirect,
  Navigate,
} from "react-router-dom";
import HomeScreen from "../src/pages/HomeScreen";
import Livestream from "./pages/Livestream";
import { AuthContextProvider, useAuth } from "./context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import ExploreScreen from "../src/pages/ExploreScreen";
import Footer from "./components/Footer";
import SavedCourses from "./SavedCourses";
import CertificationCenter from "./CertificationCenter";
import DashBoard from "./DashBoard";
import { setToken, setRole, setID } from "./redux/actions/auth.action";
import Cookies from "js-cookie";
import AllInstructors from "../src/pages/AllInstructors";
import HeaderPages from "./components/HeaderPages";
import About from "./pages/About";
import InstructorProfile from "../src/pages/InstructorProfile";
import Dashboard2 from "./Dashboard2";
import OurBlog from "./pages/OurBlog";
import Help from "./pages/Help";
import SettingAccount from "../src/pages/Setting";
import Privacy from "../src/pages/Privacy";
import BillingandPayout from "../src/pages/BillingandPayout";
import ApiClients from "../src/pages/ApiClients";
import CloseAccount from "../src/pages/CloseAccount";
import Notification from "../src/pages/Notification";
import BlogSingle from "./pages/BlogSingle";
import CompanyDetails from "./pages/CompanyDetails";
import ReportHistory from "./ReportHistory";
import SendFeedback from "./SendFeedback";
import AddLiveStream from "./AddLiveStream";
import Earning from "./Earning";
import CertificationFillForm from "./CertificationFillForm";
import Press from "./pages/Press";
import ShoppingCart from "../src/pages/ShoppingCart";
import Career from "./pages/Career";
import Copyright from "./pages/Copyright";
import StudentNotification from "./pages/TeacherNotification";
import TeacherNotification from "./pages/TeacherNotification";
import JobApply from "./pages/JobApply";

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
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    const tokenFromCookie = Cookies.get("token");
    const idFromCookie = Cookies.get("id");

    // Check if we are on signup or forgot password screen
    if (
      tokenFromCookie &&
      !window.location.pathname.includes("/signup") &&
      !window.location.pathname.includes("/forgot-password")
    ) {
      dispatch(setToken(tokenFromCookie));
      dispatch(setRole(tokenFromCookie));
      dispatch(setID(idFromCookie));
    } else if (
      !window.location.pathname.includes("/signup") &&
      !window.location.pathname.includes("/forgot-password")
    ) {
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
        path="/help"
        element={
          token ? (
            <Layout>
              <Help sidebar={sidebar} />
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
              <AllInstructors sidebar={sidebar} />
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
        path="/certificationfillform"
        element={
          token ? (
            <>
              <div className="flex flex-col min-h-screen">
                <HeaderPages />
                <CertificationFillForm />
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
        path="/blogsingle"
        element={
          token ? (
            <div className="flex flex-col min-h-screen">
              <HeaderPages />
              <BlogSingle />
              <Footer />
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/company"
        element={
          token ? (
            <div className="flex flex-col min-h-screen">
              <HeaderPages />
              <CompanyDetails />
              <Footer />
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/press"
        element={
          token ? (
            <div className="flex flex-col min-h-screen">
              <HeaderPages />
              <Press />
              <Footer />
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/career"
        element={
          token ? (
            <div className="flex flex-col min-h-screen">
              <HeaderPages />
              <Career />
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
        path="/jobapply"
        element={
          token ? (
            <div className="flex flex-col min-h-screen">
              <HeaderPages />
              <JobApply />
              <Footer />
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/shoppingcart"
        element={
          token ? (
            <>
              <div className="flex flex-col min-h-screen">
               <ShoppingCart/>
                <Footer />
              </div>
            </>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/setting"
        element={
          token ? (
            <>
              <Layout>
                <SettingAccount sidebar={sidebar}/>
              </Layout>
            </>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/reporthistory"
        element={
          token ? (
            <Layout>
              <ReportHistory />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/sendfeedback"
        element={
          token ? (
            <Layout>
              <SendFeedback />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/addlivestream"
        element={
          token ? (
            <>
              <Layout>
                <AddLiveStream sidebar={sidebar} />
              </Layout>
            </>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/notification"
        element={
          token ? (
            <>
              <Layout>
                <Notification sidebar={sidebar}/>
              </Layout>
            </>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/privacy"
        element={
          token ? (
            <>
              <Layout>
                <Privacy sidebar={sidebar} />
              </Layout>
            </>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/billing"
        element={
          token ? (
            <>
              <Layout>
               <BillingandPayout sidebar={sidebar}/>
              </Layout>
            </>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/copyright"
        element={
          token ? (
            <div className="flex flex-col min-h-screen">
              <HeaderPages />
              <Copyright />
              <Footer />
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/apiclient"
        element={
          token ? (
            <>
              <Layout>
                <ApiClients sidebar={sidebar}/>
              </Layout>
            </>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/closeAccount"
        element={
          token ? (
            <>
              <Layout>
                <CloseAccount sidebar={sidebar}/>
              </Layout>
            </>
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
      {role === "teacher" && (
        <Route
          path="/earning"
          element={
            token ? (
              <Layout>
                <Earning />
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
      {role === "teacher" && (
        <Route
          path="/teachernotifi"
          element={
            token ? (
              <Layout>
              <TeacherNotification/>
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
