import { productDetail, productType } from "../actionType/actionTypes";

export const getAllProductStart = () => ({
  type: productType.GET_ALL_PRODUCTS_START,
});

export const getAllProductSuccess = (allProduct) => ({
  type: productType.GET_ALL_PRODUCTS_SUCCESS,
  payload: allProduct,
});

export const getAllProductError = (error) => ({
  type: productType.GET_ALL_PRODUCTS_ERROR,
  payload: error,
});

export const getFilterProductsStart = () => ({
  type: productType.GET_FILTER_PRODUCT_START,
});

export const getFilterProductsSuccess = (products) => ({
  type: productType.GET_FILTER_PRODUCT_SUCCESS,
  payload: products,
});

export const getFilterProductsError = (error) => ({
  type: productType.GET_FILTER_PRODUCT_ERROR,
  payload: error,
});

export const getProductDetailStart = () => ({
  type: productDetail.GET_PRODUCT_DETAILS_START,
});

export const getProductDetailSuccess = (product) => ({
  type: productDetail.GET_PRODUCT_DETAILS_SUCCESS,
  payload: product,
});

export const getProductDetailError = (error) => ({
  type: productDetail.GET_PRODUCT_DETAILS_ERROR,
  payload: error,
});
