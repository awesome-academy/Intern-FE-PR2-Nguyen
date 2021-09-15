import React from "react";
import Banner from "../../components/Banner/Banner";
import Carousel from "../../components/Carousel/Carousel";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className='homePage'>
      <Header />
      <Banner />
      <Carousel />
      <div className='layout'>
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default HomePage;
