import { productDetail, productType } from "../actionType/actionTypes";

const initialState = {
  allProducts: [],
  filterProduct: [],
  product: {},
  isLoading: false,
  totalProducts: 0,
  error: null,
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case productType.GET_ALL_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
        allProducts: [],
        error: null,
      };

    case productType.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allProducts: payload,
        totalProducts: payload.length,
        error: null,
      };

    case productType.GET_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
        totalProducts: 0,
      };

    case productType.GET_FILTER_PRODUCT_START:
      return {
        ...state,
        isLoading: true,
        filterProduct: [],
        error: null,
      };

    case productType.GET_FILTER_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        filterProduct: payload,
        error: null,
      };

    case productType.GET_FILTER_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        totalProducts: 0,
        error: payload,
      };

    case productDetail.GET_PRODUCT_DETAILS_START:
      return {
        ...state,
        isLoading: false,
        product: {},
      };

    case productDetail.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product: payload,
      };

    case productDetail.GET_PRODUCT_DETAILS_ERROR:
      return {
        ...state,
        isLoading: false,
        product: {},
        error: payload,
      };

    default:
      return state;
  }
};

export default productReducer;
