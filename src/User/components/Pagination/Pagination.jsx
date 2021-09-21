import React from "react";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "./Pagination.scss";

function PaginationPage() {
  const dispatch = useDispatch();

  const { _limit, _page } = useSelector((state) => state.filters);
  const { totalProducts } = useSelector((state) => state.products);

  return (
    <div className='pagination'>
      {totalProducts < _limit ? null : (
        <Pagination
          total={totalProducts}
          defaultPageSize={_limit}
          defaultCurrent={_page}
        />
      )}
    </div>
  );
}

export default PaginationPage;
