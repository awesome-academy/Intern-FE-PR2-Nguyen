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

export const getProductById = (payload) => (dispatch) => {
  dispatch(actions.getProductDetailStart());

  productsApi
    .getProductById(payload)
    .then((product) => dispatch(actions.getProductDetailSuccess(product)))
    .catch((err) => dispatch(actions.getProductDetailError(err)));
};
