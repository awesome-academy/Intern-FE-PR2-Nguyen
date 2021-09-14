import React from "react";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";

function HomePage() {
  return (
    <div className='homePage'>
      <Header />
      <Banner />
      <Carousel />
    </div>
  );
}

export default HomePage;
