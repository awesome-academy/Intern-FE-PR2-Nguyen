import { combineReducers } from "redux";
import filterReducer from "./filter.reducer";
import productReducer from "./product.reducer";
import cartReducer from "./cart.reducer";
import customerReducer from "./customer.reducer";
import authReducer from "./auth.reducer";

const rootReducer = () =>
  combineReducers({
    products: productReducer,
    filters: filterReducer,
    cart: cartReducer,
    customer: customerReducer,
    auth: authReducer,
  });

export default rootReducer;
