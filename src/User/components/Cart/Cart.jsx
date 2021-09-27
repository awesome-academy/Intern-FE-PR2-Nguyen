import { CloseOutlined, ShoppingFilled } from "@ant-design/icons";
import { Button, Drawer, InputNumber, Space } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeQuantityCart,
  removeFromCart,
} from "../../../redux/actions/cart.action";
import CartFound from "../../../../src/assets/cart-found.png";
import "./Cart.scss";

function Cart() {
  const dispatch = useDispatch();
  const { totalCart, cart } = useSelector((state) => state.cart);

  const [visible, setVisible] = useState(false);

  const changeQuantityProduct = (value, cart) => {
    dispatch(changeQuantityCart({ id: cart.id, quantity: value }));
  };

  const removeProduct = (product) => {
    dispatch(removeFromCart(product));
  };

  const showItemCart = (carts) => {
    return carts.map((cart, index) => {
      return (
        <div className='cart-item' key={index}>
          <div className='item-quantity'>
            <InputNumber
              size='small'
              min={1}
              max={100000}
              value={cart.quantity}
              onChange={(e) => {
                changeQuantityProduct(e, cart);
              }}
            />
          </div>

          <div className='cart-image'>
            <img src={cart.image} alt='cart images' />
          </div>
          <div className='cart-infor'>
            <p className='infor-name'>{cart.name}</p>
            <p className='infor-price'>${cart.price}</p>
            <span className='infor-quantity'>
              {cart.quantity} x {cart.weight}lb
            </span>
          </div>

          <div className='cart-total'>
            <p className='total-price'>
              ${(cart.quantity * cart.price).toFixed(2)}
            </p>
          </div>
          <div className='cart-remove'>
            <CloseOutlined onClick={() => removeProduct(cart)} />
          </div>
        </div>
      );
    });
  };

  const totalPrice = cart.reduce((total, product) => {
    total += product.price * product.quantity;
    return total;
  }, 0);

  return (
    <div className='cart'>
      <div className='cart-button' onClick={() => setVisible(true)}>
        <p className='cart-quantity'>
          <ShoppingFilled style={{ color: "white" }} /> {totalCart} Item
        </p>

        <p className='cart-price'>${totalPrice.toFixed(2)}</p>
      </div>
      <Space>
        <Drawer
          title={`${totalCart} Items`}
          placement='right'
          width={520}
          onClose={() => setVisible(false)}
          visible={visible}
          footer={
            <div className='cart-footer'>
              <Button
                className='footer-button'
                size='large'
                shape='round'
                disabled={totalCart >= 1 ? false : true}>
                <p className='footer-name'>Checkout</p>
                <p className='footer-price'>${totalPrice}</p>
              </Button>
            </div>
          }>
          {totalCart < 1 ? (
            <div className='cart-found'>
              <img src={CartFound} alt='cart found' />
              <h3>No products found</h3>
            </div>
          ) : (
            showItemCart(cart)
          )}
        </Drawer>
      </Space>
    </div>
  );
}
export default Cart;
