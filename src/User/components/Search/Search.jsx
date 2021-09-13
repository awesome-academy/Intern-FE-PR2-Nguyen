import React from "react";
import "./Search.scss";
import { Input } from "antd";

const { Search } = Input;

function SearchInput() {
  return (
    <div className='search'>
      <Search
        placeholder='Search your products from here'
        allowClear
        enterButton='Search'
        size='large'
      />
    </div>
  );
}

export default SearchInput;
