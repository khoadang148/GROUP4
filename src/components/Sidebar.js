import React, { useState } from "react";
import { Menu } from "antd";
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import img1 from "../assets/img1.jpg";
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
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

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
      <Menu.Item key="1" className="flex items-center" onClick={handleHome}>
        <FontAwesomeIcon icon={faHouse} className="mr-2 icon" />
        Home
      </Menu.Item>
      <Menu.Item key="2" onClick={handleLivestream}>
        <FontAwesomeIcon icon={faHeadset} className="mr-2 icon" />
        Live Stream
      </Menu.Item>
      <Menu.Item key="3">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2 icon" />
        Explore
      </Menu.Item>
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
      <Menu.Divider />
      <SubMenu
        key="sub4"
        icon={<SettingOutlined />}
        title="Tests"
        style={{ color: "black" }}
        className="submenu-hover"
      >
        <div className="font-normal pl-5">
          <Menu.Item key="17">Certification Center</Menu.Item>
          <Menu.Item key="18">Certification Fill Form</Menu.Item>
          <Menu.Item key="19">Test View</Menu.Item>
          <Menu.Item key="20">Test Result</Menu.Item>
          <Menu.Item key="21">My Certification</Menu.Item>
        </div>
      </SubMenu>
      <Menu.Item key="22">
        <FontAwesomeIcon icon={faHeart} className="mr-2 icon" />
        Save Courses
      </Menu.Item>
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
      <hr />
      <Menu.ItemGroup
        key="sub6"
        title="SUBSCRIPTIONS"
        style={{ color: "black" }}
      >
        <Menu.Item key="43">
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
      <hr />
      <Menu.Item key="46">
        <FontAwesomeIcon icon={faGear} className="mr-2 icon" />
        Setting
      </Menu.Item>
      <Menu.Item key="47">
        <FontAwesomeIcon icon={faCircleQuestion} className="mr-2 icon" />
        Help
      </Menu.Item>
      <Menu.Item key="48">
        <FontAwesomeIcon icon={faFlag} className="mr-2 icon" />
        Report History
      </Menu.Item>
      <Menu.Item key="49">
        <FontAwesomeIcon icon={faMessage} className="mr-2 icon" />
        Send Feedback
      </Menu.Item>
      <hr />
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
        }
        .ant-menu-item:hover .icon {
          color: #ee4e4e !important;
        }
        .ant-menu-item-active {
          color: #ee4e4e !important;
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
