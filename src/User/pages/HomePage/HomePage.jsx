import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getProductFilter,
} from "../../../redux/thunk/product.thunk";
import Banner from "../../components/Banner/Banner";
import Carousel from "../../components/Carousel/Carousel";
import Cart from "../../components/Cart/Cart";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./HomePage.scss";

function HomePage() {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductFilter(filter));
  }, [filter]);

  return (
    <div className='homePage'>
      <Header />
      <Banner />
      <Carousel />
      <div className='layout'>
        <Sidebar />
        <MainContent />
      </div>
      <Cart />
    </div>
  );
}

export default HomePage;
