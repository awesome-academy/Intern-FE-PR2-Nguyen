import { combineReducers } from "redux";
import filterReducer from "./filter.reducer";
import productReducer from "./product.reducer";
import cartReducer from "./cart.reducer";

const rootReducer = () =>
  combineReducers({
    products: productReducer,
    filters: filterReducer,
    cart: cartReducer,
  });

export default rootReducer;
