import Slider from "react-slick";
import React from "react";
import Coupon from "../../../assets/banner-voucher/coupon-price.png";

function Carousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className='carousel'>
      <Slider {...settings}>
        <div className='carousel__item'>
          <img src={Coupon} alt='gift-voucher' />
        </div>
        <div className='carousel__item'>
          <img src={Coupon} alt='gift-voucher' />
        </div>
        <div className='carousel__item'>
          <img src={Coupon} alt='gift-voucher' />
        </div>
        <div className='carousel__item'>
          <img src={Coupon} alt='gift-voucher' />
        </div>
        <div className='carousel__item'>
          <img src={Coupon} alt='gift-voucher' />
        </div>
        <div className='carousel__item'>
          <img src={Coupon} alt='gift-voucher' />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
