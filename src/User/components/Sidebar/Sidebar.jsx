import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import SubMenu from "antd/lib/menu/SubMenu";
import React from "react";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <div className='sidebar'>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          width: "300px",
        }}
        width={330}>
        <Menu
          mode='inline'
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%" }}>
          <SubMenu key='sub1' title='subnav 1'>
            <Menu.Item key='1'>option1</Menu.Item>
            <Menu.Item key='2'>option2</Menu.Item>
            <Menu.Item key='3'>option3</Menu.Item>
            <Menu.Item key='4'>option4</Menu.Item>
          </SubMenu>

          <SubMenu key='sub2' title='subnav 2'>
            <Menu.Item key='5'>option5</Menu.Item>
            <Menu.Item key='6'>option6</Menu.Item>
            <Menu.Item key='7'>option7</Menu.Item>
            <Menu.Item key='8'>option8</Menu.Item>
          </SubMenu>

          <SubMenu key='sub3' title='subnav 3'>
            <Menu.Item key='9'>option9</Menu.Item>
            <Menu.Item key='10'>option10</Menu.Item>
            <Menu.Item key='11'>option11</Menu.Item>
            <Menu.Item key='12'>option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </div>
  );
}

export default Sidebar;
