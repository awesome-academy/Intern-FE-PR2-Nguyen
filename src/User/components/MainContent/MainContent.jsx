import { Row, Spin } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "../../../assets/404.svg";
import CardItem from "../Card/Card";
import PaginationPage from "../Pagination/Pagination";
import "./MainContent.scss";

function MainContent() {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.products);
  const { filterProduct } = useSelector((state) => state.products);

  return (
    <div className='main-content'>
      {isLoading ? (
        <Spin />
      ) : (
        <Row gutter={[16, 16]}>
          {filterProduct.length <= 0 ? (
            <img className='main-notfound' src={NotFound} alt='not found' />
          ) : (
            <CardItem />
          )}
        </Row>
      )}

      <PaginationPage />
    </div>
  );
}

export default MainContent;
