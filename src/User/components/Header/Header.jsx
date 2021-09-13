import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.svg";
import "./Header.scss";

function Header() {
  return (
    <div className='header'>
      <Row>
        <Col span={3}>
          <img src={Logo} alt='logo' />
        </Col>
        <Col span={5} offset={16} className='header__link'>
          <Link to='/offer' className='link__item'>
            Offer
          </Link>
          <Link to='/faq' className='link__item'>
            Need Help
          </Link>
          <Link to='/login' className='header__button'>
            Join
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
