import { LogoutOutlined } from "@ant-design/icons";
import { Avatar, Col, Dropdown, Menu, Row, Space } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.svg";
import { logout } from "../../../redux/actions/auth.action";
import Profile from "../Profile/Profile";
import "./Header.scss";

function Header() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const { isLoggedIn, profile } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  const menu = (
    <Menu>
      <Menu.Item key='1'>
        <Space onClick={() => setVisible(true)}>Account Information</Space>
        <Profile visible={visible} setVisible={setVisible} />
      </Menu.Item>
      <Menu.Item key='2'>
        <Space onClick={handleLogout}>
          <LogoutOutlined />
          Logout
        </Space>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className='header'>
      <Row>
        <Col span={3}>
          <img src={Logo} alt='logo' />
        </Col>
        <Col span={8} offset={13} className='header__link'>
          <Link to='/offer' className='link__item'>
            Offer
          </Link>
          <Link to='/faq' className='link__item'>
            Need Help
          </Link>
          {isLoggedIn ? (
            <Space>
              <Dropdown overlay={menu} placement='bottomRight' arrow>
                <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
              </Dropdown>
            </Space>
          ) : (
            <Link to='/login' className='header__button'>
              Join
            </Link>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Header;
