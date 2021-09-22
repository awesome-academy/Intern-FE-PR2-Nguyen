import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card, Col } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/actions/cart.action";
import { getProductById } from "../../../redux/thunk/product.thunk";
import ModalItem from "../ModalItem/ModalItem";
import "./Card.scss";

function CardItem() {
  const dispatch = useDispatch();

  const { filterProduct } = useSelector((state) => state.products);
  const { product } = useSelector((state) => state.products);

  const [visible, setVisible] = useState(false);
  const [id, setId] = useState("");

  const handleAddToCart = (products) => {
    dispatch(addToCart(products));
  };

  useEffect(() => dispatch(getProductById(id)), [id]);

  return filterProduct.map((products, key) => {
    return (
      <Col
        xs={{ span: 24 }}
        md={{ span: 12 }}
        lg={{ span: 4 }}
        key={key}
        id={products.id}>
        <Card
          className='card'
          cover={
            <img
              src={products.image}
              alt='product'
              onClick={() => {
                setVisible(true);
                setId(products.id);
              }}
            />
          }
          actions={[
            `$${products.price}`,
            <ShoppingCartOutlined onClick={() => handleAddToCart(products)} />,
          ]}>
          <Meta title={products.name} description={`${products.weight}lb`} />
        </Card>
        {visible && (
          <ModalItem
            visible={visible}
            setVisible={setVisible}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        )}
      </Col>
    );
  });
}

export default CardItem;
