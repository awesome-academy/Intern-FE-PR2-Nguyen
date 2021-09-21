import { Pagination } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterPagination } from "../../../redux/actions/filter.action";
import "./Pagination.scss";

function PaginationPage() {
  const dispatch = useDispatch();

  const { _limit, _page } = useSelector((state) => state.filters);
  const { totalProducts } = useSelector((state) => state.products);

  const handleChangePage = (page) => {
    dispatch(changeFilterPagination(page));
  };

  return (
    <div className='pagination'>
      {
        <Pagination
          total={totalProducts}
          defaultPageSize={_limit}
          defaultCurrent={_page}
          onChange={(e) => handleChangePage(e)}
        />
      }
    </div>
  );
}

export default PaginationPage;
