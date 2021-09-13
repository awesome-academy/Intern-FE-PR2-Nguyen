import React from "react";
import SearchInput from "../Search/Search";
import "./Banner.scss";

function Banner() {
  return (
    <div className='banner'>
      <div className='banner__container'>
        <div className='banner__content'>
          <h2 className='banner__title'>Groceries Delivered in 90 Minute</h2>
          <p className='banner__sub'>
            Get your healthy foods & snacks delivered at your doorsteps all day
            everyday
          </p>
        </div>

        <div className='banner__search'>
          <SearchInput />
        </div>
      </div>
    </div>
  );
}

export default Banner;
