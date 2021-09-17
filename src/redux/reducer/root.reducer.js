import { combineReducers } from "redux";
import filterReducer from "./filter.reducer";
import productReducer from "./product.reducer";

const rootReducer = () =>
  combineReducers({
    products: productReducer,
    filters: filterReducer,
  });

export default rootReducer;
