import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card, Col } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import Butter from "../../../assets/dairy/butter/butter_barney.jpg";
import "./Card.scss";

function CardItem() {
  return (
    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 4 }}>
      <Card cover={<img src={Butter} alt='product' />}>
        <Meta
          title='Ozmo Air Fabric Freshner'
          description='1 pc(s)'
          actions={["$15", <ShoppingCartOutlined />]}
        />
      </Card>
    </Col>
  );
}

export default CardItem;
