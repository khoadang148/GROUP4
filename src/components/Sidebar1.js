import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Image } from 'react-bootstrap';

const { SubMenu } = Menu;

const Sidebar1 = () => {
  const handleClick = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={handleClick}
      style={{ width: 256, backgroundColor: 'white' }}
      mode="inline"
    >
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
        <SubMenu key="sub3" title="Submenu">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
      </SubMenu>
      <Menu.Divider />
      <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
      <Menu.ItemGroup key="grp" title="Group">
        <Menu.Item key="13">Option 13</Menu.Item>
        <Menu.Item key="14">Option 14</Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );
};

export default Sidebar1;
