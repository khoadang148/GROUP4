import React, { useState } from "react";
import { Menu } from "antd";
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faHeadset,
  faMagnifyingGlass,
  faCirclePlus,
  faGear,
  faCircleQuestion,
  faFlag,
  faMessage,
  faLayerGroup,
  faBorderAll,
  faBook,
  faChartLine,
  faComment,
  faBell,
  faTrophy,
  faDollarSign,
  faWallet,
  faNewspaper,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faStar,
  faCircleCheck,
} from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/auth.action";

const { SubMenu } = Menu;

const Sidebar = ({ sidebar }) => {
  const handleClick = (e) => {
    console.log("click ", e);
  };

  const [handleShowScrollbar, setHandShowScroll] = useState(false);
  const slidebarStyles = {
    overflow: handleShowScrollbar ? "auto" : "hidden",
    maxHeight: "100vh",
    backgroundColor: "white",
    color: "black",
    fontWeight: "500",
  };

  const navigate = useNavigate();
  const handleLivestream = () => {
    navigate("/livestream");
  };
  const handleHome = () => {
    navigate("/");
  };
  const handleInstructorProfile = () => {
    navigate("/instructorprofile");
  };
  const handleExplore = () => {
    navigate("/explore");
  };
  const handleSavedCourses = () => {
    navigate("/savedcourses");
  };
  const handleCertificationCenter = () => {
    navigate("/certificationcenter");
  };
  const role = useSelector((state) => state.auth.role);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login"); // Chuyển hướng đến trang login sau khi logout
  };

  return (
    <Menu
      onMouseEnter={() => setHandShowScroll(true)}
      onMouseLeave={() => setHandShowScroll(false)}
      style={slidebarStyles}
      onClick={handleClick}
      className={`transition-transform duration-700 drop-shadow-lg h-full w-[250px] bg-white transform ${
        sidebar ? "mt-[65px] fixed translate-x-0 z-50" : "translate-x-[-100%]"
      } top-0 left-0`}
      mode="inline"
    >
      {role === "student" && (
        <Menu.Item key="1" className="flex items-center" onClick={handleHome}>
          <FontAwesomeIcon icon={faHouse} className="mr-2 icon" />
          Home
        </Menu.Item>
      )}

      {role === "student" && (
        <Menu.Item key="2" onClick={handleLivestream}>
          <FontAwesomeIcon icon={faHeadset} className="mr-2 icon" />
          Live Stream
        </Menu.Item>
      )}
      {role === "student" && (
        <Menu.Item key="3" onClick={handleExplore}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2 icon" />
          Explore
        </Menu.Item>
      )}
      {role === "student" && (
        <SubMenu
          key="sub2"
          icon={<FontAwesomeIcon icon={faLayerGroup} />}
          title="Categories"
          style={{ color: "black" }}
          className="submenu-hover"
        >
          <div className="font-normal pl-5">
            <Menu.Item key="4">Development</Menu.Item>
            <Menu.Item key="5">Business</Menu.Item>
            <Menu.Item key="6">Finance & Accounting</Menu.Item>
            <Menu.Item key="7">IT & Software</Menu.Item>
            <Menu.Item key="8">Office Productive</Menu.Item>
            <Menu.Item key="9">Personal Development</Menu.Item>
            <Menu.Item key="10">Design</Menu.Item>
            <Menu.Item key="11">Marketing</Menu.Item>
            <Menu.Item key="12">Lifestyle</Menu.Item>
            <Menu.Item key="13">Photography</Menu.Item>
            <Menu.Item key="14">Health & Fitness</Menu.Item>
            <Menu.Item key="15">Music</Menu.Item>
            <Menu.Item key="16">Teaching & Academics</Menu.Item>
          </div>
        </SubMenu>
      )}

      <Menu.Divider />
      {role === "student" && (
        <SubMenu
          key="sub4"
          icon={<SettingOutlined />}
          title="Tests"
          style={{ color: "black" }}
          className="submenu-hover"
        >
          <div className="font-normal pl-5">
            <Menu.Item key="17" onClick={handleCertificationCenter}>
              Certification Center
            </Menu.Item>
            <Menu.Item key="18">Certification Fill Form</Menu.Item>
            <Menu.Item key="19">Test View</Menu.Item>
            <Menu.Item key="20">Test Result</Menu.Item>
            <Menu.Item key="21">My Certification</Menu.Item>
          </div>
        </SubMenu>
      )}
      {role === "student" && (
        <Menu.Item key="22" onClick={handleSavedCourses}>
          <FontAwesomeIcon icon={faHeart} className="mr-2 icon" />
          Save Courses
        </Menu.Item>
      )}
      {role === "student" && (
        <SubMenu
          key="sub5"
          icon={<SettingOutlined />}
          title="Pages"
          style={{ color: "black" }}
          className="submenu-hover"
        >
          <div className="font-normal pl-5">
            <Menu.Item key="23">About</Menu.Item>
            <Menu.Item key="24">Sign In</Menu.Item>
            <Menu.Item key="25">Sign Up</Menu.Item>
            <Menu.Item key="26">Sign Up Steps</Menu.Item>
            <Menu.Item key="27">Paid Membership</Menu.Item>
            <Menu.Item key="28">Course Detail View</Menu.Item>
            <Menu.Item key="29">Checkout</Menu.Item>
            <Menu.Item key="30">Invoice</Menu.Item>
            <Menu.Item key="31">Career</Menu.Item>
            <Menu.Item key="32">Job Apply</Menu.Item>
            <Menu.Item key="33">Our Blog</Menu.Item>
            <Menu.Item key="34">Blog Detail View</Menu.Item>
            <Menu.Item key="35">Company Details</Menu.Item>
            <Menu.Item key="36">Press</Menu.Item>
            <Menu.Item key="37">Live Steam View</Menu.Item>
            <Menu.Item key="38">Add Live Steam</Menu.Item>
            <Menu.Item key="39">Search Result</Menu.Item>
            <Menu.Item key="40">Thank you</Menu.Item>
            <Menu.Item key="41">Coming Soon</Menu.Item>
            <Menu.Item key="42">Error 404</Menu.Item>
          </div>
        </SubMenu>
      )}

      <hr />
      {role === "student" && (
        <Menu.ItemGroup
          key="sub6"
          title="SUBSCRIPTIONS"
          style={{ color: "black" }}
        >
          <Menu.Item key="43" onClick={handleInstructorProfile}>
            <div className="flex items-center">
              <img
                src={img1}
                className="h-auto w-[30px] rounded-lg"
                alt="Rock Smith"
              />
              <p className="ml-6 pt-3">Rock Smith</p>
            </div>
          </Menu.Item>
          <Menu.Item key="44">
            <div className="flex items-center">
              <img
                src={img2}
                className="h-auto w-[30px] rounded-lg"
                alt="Rock Smith"
              />
              <p className="ml-6 pt-3">Jassica William</p>
            </div>
          </Menu.Item>
          <Menu.Item key="45">
            <FontAwesomeIcon icon={faCirclePlus} className="mr-2 icon" />
            Browser Instructors
          </Menu.Item>
        </Menu.ItemGroup>
      )}

      {role === "student" && (
        <Menu.Item key="46">
          <FontAwesomeIcon icon={faGear} className="mr-2 icon" />
          Setting
        </Menu.Item>
      )}
      {role === "student" && (
        <Menu.Item key="47">
          <FontAwesomeIcon icon={faCircleQuestion} className="mr-2 icon" />
          Help
        </Menu.Item>
      )}
      {role === "student" && (
        <Menu.Item key="48">
          <FontAwesomeIcon icon={faFlag} className="mr-2 icon" />
          Report History
        </Menu.Item>
      )}
      {role === "student" && (
        <Menu.Item key="49">
          <FontAwesomeIcon icon={faMessage} className="mr-2 icon" />
          Send Feedback
        </Menu.Item>
      )}

      {role === "teacher" && (
        <Menu.Item key="50" className="flex items-center" onClick={handleHome}>
          <FontAwesomeIcon icon={faBorderAll} className="mr-2 icon" />
          Dashboard
        </Menu.Item>
      )}
      {role === "teacher" && (
        <Menu.Item key="51" className="flex items-center" onClick={handleHome}>
          <FontAwesomeIcon icon={faBook} className="mr-2 icon" />
          Coures
        </Menu.Item>
      )}
      {role === "teacher" && (
        <Menu.Item key="52" className="flex items-center" onClick={handleHome}>
          <FontAwesomeIcon icon={faChartLine} className="mr-2 icon" />
          Analyics
        </Menu.Item>
      )}
      {role === "teacher" && (
        <Menu.Item key="53" className="flex items-center" onClick={handleHome}>
          <FontAwesomeIcon icon={faCirclePlus} className="mr-2 icon" />
          Create Course
        </Menu.Item>
      )}
      {role === "teacher" && (
        <Menu.Item key="54" className="flex items-center" onClick={handleHome}>
          <FontAwesomeIcon icon={faComment} className="mr-2 icon" />
          Messages
        </Menu.Item>
      )}
      {role === "teacher" && (
        <Menu.Item key="55" className="flex items-center" onClick={handleHome}>
          <FontAwesomeIcon icon={faBell} className="mr-2 icon" />
          Notifications
        </Menu.Item>
      )}
      {role === "teacher" && (
        <Menu.Item key="56" className="flex items-center" onClick={handleHome}>
          <FontAwesomeIcon icon={faTrophy} className="mr-2 icon" />
          My Certification
        </Menu.Item>
      )}
      {role === "teacher" && (
        <Menu.Item key="57" className="flex items-center" onClick={handleHome}>
          <FontAwesomeIcon icon={faStar} className="mr-2 icon" />
          Reviews
        </Menu.Item>
      )}
      {role === "teacher" && (
        <Menu.Item key="58" className="flex items-center" onClick={handleHome}>
          <FontAwesomeIcon icon={faDollarSign} className="mr-2 icon" />
          Earning
        </Menu.Item>
      )}
      {role === "teacher" && (
        <Menu.Item key="59" className="flex items-center" onClick={handleHome}>
          <FontAwesomeIcon icon={faWallet} className="mr-2 icon" />
          Payout
        </Menu.Item>
      )}
      {role === "teacher" && (
        <Menu.Item key="60" className="flex items-center" onClick={handleHome}>
          <FontAwesomeIcon icon={faNewspaper} className="mr-2 icon" />
          Statements
        </Menu.Item>
      )}
      {role === "teacher" && (
        <Menu.Item key="61" className="flex items-center" onClick={handleHome}>
          <FontAwesomeIcon icon={faCircleCheck} className="mr-2 icon" />
          Verìication
        </Menu.Item>
      )}

      <hr />
      {role === "teacher" && (
        <Menu.Item key="62">
          <FontAwesomeIcon icon={faGear} className="mr-2 icon" />
          Setting
        </Menu.Item>
      )}
      {role === "teacher" && (
        <Menu.Item key="63">
          <FontAwesomeIcon icon={faMessage} className="mr-2 icon" />
          Send Feedback
        </Menu.Item>
      )}
      {role === "student" && (
        <div className="pb-[100px] pt-3 pl-[20px] text-xs leading-5">
          <div>
            <a className="px-1 hover:text-red-500">About</a>
            <a className="px-1 hover:text-red-500">Press</a>
            <a className="px-1 hover:text-red-500">Contact Us</a>
          </div>
          <div className="font-medium">
            <a className="px-1 hover:text-red-500">Advertise</a>
            <a className="px-1 hover:text-red-500">Developer</a>
            <a className="hover:text-red-500">Copy Right</a>
          </div>
          <div className="font-medium">
            <a className="px-1 hover:text-red-500">Privacy Policy</a>
            <a className="px-1 hover:text-red-500">Term</a>
          </div>
          <div className="text-[#9393938f] mt-[13px]">
            <p>© 2020 Cursus. All Rights Reserved.</p>
          </div>
        </div>
      )}
      <Menu.Item key="logout" onClick={handleLogout}>
        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 icon" />
        Logout
      </Menu.Item>
      <style jsx>{`
        .ant-menu-item-selected {
          background-color: #ffecec !important;
          color: #ee4e4e !important;
        }
        .ant-menu-item-selected .icon {
          color: #ee4e4e !important;
        }
        .ant-menu-submenu-selected {
          color: #ee4e4e !important;
        }
        .ant-menu-submenu-title {
          color: black !important;
        }
        .ant-menu-item:hover {
          background-color: #ffecec !important;
          color: #ee4e4e !important;
        }
        .ant-menu-item:hover .icon {
          color: #ee4e4e !important;
        }
        .ant-menu-item-active {
          color: initial !important;
        }
        .submenu-hover .ant-menu-submenu-title:hover {
          background-color: #ffecec !important;
          color: #ee4e4e !important;
        }
      `}</style>
    </Menu>
  );
};

export default Sidebar;
