import React, { useState } from "react";
import { Menu } from "antd";
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

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

  return (
    <Menu
    onMouseEnter={() => setHandShowScroll(true)}
    onMouseLeave={() => setHandShowScroll(false)}
    style={slidebarStyles}
    onClick={handleClick}
    className={` transition-transform duration-700 drop-shadow-lg h-full w-[250px] bg-white transform ${
      sidebar
        ? "translate-x-0 w-[250px] z-50 fixed text-base "
        : "translate-x-[-100%] "
    }`}
    mode="inline"
    >
      <Menu.Item key="1">
        <FontAwesomeIcon
          icon={faHouse}
          className="mr-2 text-black hover:text-red-500"
        />
        Home
      </Menu.Item>
      <Menu.Item key="2">Live Stream</Menu.Item>
      <Menu.Item key="3">Explore</Menu.Item>
      <SubMenu
        key="sub2"
        icon={<AppstoreOutlined />}
        title="Categories"
        style={{ color: "black" }}
        className="submenu-hover"
      >
        <div className="font-normal pl-5">
          <Menu.Item key="4">Development</Menu.Item>
          <Menu.Item key="4">Business</Menu.Item>
          <Menu.Item key="4">Finance & Accounting</Menu.Item>
          <Menu.Item key="4">It & Software</Menu.Item>
          <Menu.Item key="4">Office Productive</Menu.Item>
          <Menu.Item key="4">Personal Development</Menu.Item>
          <Menu.Item key="4">Design</Menu.Item>
          <Menu.Item key="4">Marketing</Menu.Item>
          <Menu.Item key="4">Lifestyle</Menu.Item>
          <Menu.Item key="4">Photography</Menu.Item>
          <Menu.Item key="4">Health & Fitness</Menu.Item>
          <Menu.Item key="4">Music</Menu.Item>
          <Menu.Item key="4">Teaching & Academics</Menu.Item>
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
          <Menu.Item key="5">Certification Center</Menu.Item>
          <Menu.Item key="5">Certification Fill Form</Menu.Item>
          <Menu.Item key="5">Test View</Menu.Item>
          <Menu.Item key="5">Test Result</Menu.Item>
          <Menu.Item key="5">My Certification</Menu.Item>
        </div>
      </SubMenu>
      <Menu.Item key="6">Save Courses</Menu.Item>
      <SubMenu
        key="sub5"
        icon={<SettingOutlined />}
        title="Pages"
        style={{ color: "black" }}
        className="submenu-hover"
      >
        <div className="font-normal pl-5">
          <Menu.Item key="7">About</Menu.Item>
          <Menu.Item key="7">Sign In</Menu.Item>
          <Menu.Item key="7">Sign Up</Menu.Item>
          <Menu.Item key="7">Sign Up Steps</Menu.Item>
          <Menu.Item key="7">Paid Membership</Menu.Item>
          <Menu.Item key="7">Course Detail View</Menu.Item>
          <Menu.Item key="7">Checkout</Menu.Item>
          <Menu.Item key="7">Invoice</Menu.Item>
          <Menu.Item key="7">Career</Menu.Item>
          <Menu.Item key="7">Job Apply</Menu.Item>
          <Menu.Item key="7">Our Blog</Menu.Item>
          <Menu.Item key="7">Blog Detail View</Menu.Item>
          <Menu.Item key="7">Company Details</Menu.Item>
          <Menu.Item key="7">Press</Menu.Item>
          <Menu.Item key="7">Live Steam View</Menu.Item>
          <Menu.Item key="7">Add Live Steam</Menu.Item>
          <Menu.Item key="7">Search Result</Menu.Item>
          <Menu.Item key="7">Thank you</Menu.Item>
          <Menu.Item key="7">Coming Soon</Menu.Item>
          <Menu.Item key="7">Error 404</Menu.Item>
        </div>
      </SubMenu>
      <hr />
      <Menu.ItemGroup
        key="sub6"
        title="SUBSCRIPTIONS"
        style={{ color: "black" }}
      >
        <Menu.Item key="8">
          <div className="flex items-center">
            <img
              src={img1}
              className="h-auto w-[30px] rounded-lg"
              alt="Rock Smith"
            />
            <p className="ml-6 pt-3">Rock Smith</p>
          </div>
        </Menu.Item>
        <Menu.Item key="9">
          <div className="flex items-center">
            <img
              src={img2}
              className="h-auto w-[30px] rounded-lg"
              alt="Rock Smith"
            />
            <p className="ml-6 pt-3">Jassica William</p>
          </div>
        </Menu.Item>
        <Menu.Item key="10">Browser Instructors</Menu.Item>
      </Menu.ItemGroup>
      <hr />
      <Menu.Item key="11">Setting</Menu.Item>
      <Menu.Item key="12">Help</Menu.Item>
      <Menu.Item key="13">Report History</Menu.Item>
      <Menu.Item key="14">Send Feedback</Menu.Item>
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
        .ant-menu-submenu-selected {
          color: #ee4e4e !important;
        }
        .ant-menu-submenu-title {
          color: black !important;
        }
        .ant-menu-item:hover {
          background-color: #ffecec !important;
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
