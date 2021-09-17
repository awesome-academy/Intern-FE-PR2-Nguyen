import productsApi from "../../API/productsApi";
import * as actions from "../actions/product.action";

export const getAllProducts = () => (dispatch) => {
  dispatch(actions.getAllProductStart());

  productsApi
    .getAllProducts()
    .then((products) => dispatch(actions.getAllProductSuccess(products)))
    .catch((err) => dispatch(actions.getAllProductError(err)));
};

export const getProductFilter = (payload) => (dispatch) => {
  dispatch(actions.getFilterProductsStart());

  productsApi
    .getProducts(payload)
    .then((product) => dispatch(actions.getFilterProductsSuccess(product)))
    .catch((err) => dispatch(actions.getFilterProductsError(err)));
};
