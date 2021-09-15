import { Row } from "antd";
import React from "react";
import CardItem from "../Card/Card";
import "./MainContent.scss";

function MainContent() {
  const showItem = () => {
    const mapNumber = Array.from({ length: 12 }, (index, item) => item);

    return mapNumber.map((item) => {
      return <CardItem key={item} />;
    });
  };
  return (
    <div className='main-content'>
      <Row gutter={[16, 16]}>{showItem()}</Row>
    </div>
  );
}

export default MainContent;
