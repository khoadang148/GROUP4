import React from "react";
import { Menu } from "antd";
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

const Sidebar = ({ sidebar }) => {
  const handleClick = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={handleClick}
      className={`h-full w-[256px] bg-white transform ${
        sidebar
          ? "translate-x-0 w-[300px] z-50 fixed text-base duration-1000"
          : "hidden -translate-x-full"
      }`}
      mode="inline"
      style={{
        backgroundColor: "white",
        color: "black",
      }}
    >
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
      <SubMenu
        key="sub2"
        icon={<AppstoreOutlined />}
        title="Navigation Two"
        style={{ color: "black" }}
      >
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
        <SubMenu key="sub3" title="Submenu">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
      </SubMenu>
      <Menu.Divider />
      <SubMenu
        key="sub4"
        icon={<SettingOutlined />}
        title="Navigation Three"
        style={{ color: "black" }}
      >
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
      <Menu.ItemGroup key="grp" title="Group" style={{ color: "black" }}>
        <Menu.Item key="13">Option 13</Menu.Item>
        <Menu.Item key="14">Option 14</Menu.Item>
      </Menu.ItemGroup>
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
        .ant-menu-item:hover,
        .ant-menu-item-active {
          color: #ee4e4e !important; 
        }
      `}</style>
    </Menu>
  );
};

export default Sidebar;
