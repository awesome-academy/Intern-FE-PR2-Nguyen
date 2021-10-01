export const productType = {
  GET_ALL_PRODUCTS_START: "GET_ALL_PRODUCTS_START",
  GET_ALL_PRODUCTS_SUCCESS: "GET_ALL_PRODUCTS_SUCCESS",
  GET_ALL_PRODUCTS_ERROR: "GET_ALL_PRODUCTS_ERROR",

  GET_FILTER_PRODUCT_START: "GET_FILTER_PRODUCT_START",
  GET_FILTER_PRODUCT_SUCCESS: "GET_FILTER_PRODUCT_SUCCESS",
  GET_FILTER_PRODUCT_ERROR: "GET_FILTER_PRODUCT_ERROR",

  CREATE_PRODUCT_START: "CREATE_PRODUCT_START",
  CREATE_PRODUCT_SUCCESS: "CREATE_PRODUCT_SUCCESS",
  CREATE_PRODUCT_FAILURE: "CREATE_PRODUCT_FAILURE",

  UPDATE_PRODUCT_START: "UPDATE_PRODUCT_START",
  UPDATE_PRODUCT_SUCCESS: "UPDATE_PRODUCT_SUCCESS",
  UPDATE_PRODUCT_ERROR: "UPDATE_PRODUCT_ERROR",

  DELETE_PRODUCT_BY_ID: "DELETE_PRODUCT_BY_ID",
};

export const productDetail = {
  GET_PRODUCT_DETAILS_START: "GET_PRODUCT_DETAILS_START",
  GET_PRODUCT_DETAILS_SUCCESS: "GET_PRODUCT_DETAILS_SUCCESS",
  GET_PRODUCT_DETAILS_ERROR: "GET_PRODUCT_DETAILS_ERROR",
};

export const filterType = {
  CHANGE_FILTER_CATEGORY_LV0: "CHANGE_FILTER_CATEGORY_LV0",
  CHANGE_FILTER_CATEGORY_LV1: "CHANGE_FILTER_CATEGORY_LV1",
  CHANGE_FILTER_SEARCH: "CHANGE_FILTER_SEARCH",
  CHANGE_FILTER_PAGINATION: "CHANGE_FILTER_PAGINATION",
  CHANGE_FILTER_PRICE: "CHANGE_FILTER_PRICE",
};

export const orderType = {
  CREATE_ORDER_START: "CREATE_ORDER_START",
  CREATE_ORDER_SUCCESS: "CREATE_ORDER_SUCCESS",
  CREATE_ORDER_ERROR: "CREATE_ORDER_ERROR",

  GET_ORDER_BY_ID_START: "GET_ORDER_BY_ID_START",
  GET_ORDER_BY_ID_SUCCESS: "GET_ORDER_BY_ID_SUCCESS",
  GET_ORDER_BY_ID_ERROR: "GET_ORDER_BY_ID_ERROR",

  GET_ALL_ORDER_START: "GET_ALL_ORDER_START",
  GET_ALL_ORDER_SUCCESS: "GET_ALL_ORDER_SUCCESS",
  GET_ALL_ORDER_ERROR: "GET_ALL_ORDER_ERROR",
};

export const cartType = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CHANGE_QUANTITY_CART: "CHANGE_QUANTITY_CART",
  CLEAR_ALL_CART: "CLEAR_ALL_CART",
  ADD_CART_WITH_QUANTITY: "ADD_CART_WITH_QUANTITY",
};

export const customerType = {
  CREAT_CUSTOMER_START: "CREAT_CUSTOMER_START",
  CREAT_CUSTOMER_SUCCESS: "CREAT_CUSTOMER_SUCCESS",
  CREAT_CUSTOMER_FAILURE: "CREAT_CUSTOMER_FAILURE",

  UPDATE_CUSTOMER_START: "UPDATE_CUSTOMER_START",
  UPDATE_CUSTOMER_SUCCESS: "UPDATE_CUSTOMER_SUCCESS",
  UPDATE_CUSTOMER_FAILURE: "UPDATE_CUSTOMER_FAILURE",

  GET_ALL_CUSTOMER_START: "GET_ALL_CUSTOMER_START",
  GET_ALL_CUSTOMER_SUCCESS: "GET_ALL_CUSTOMER_SUCCESS",
  GET_ALL_CUSTOMER_ERROR: "GET_ALL_CUSTOMER_ERROR",
};

export const authTypes = {
  CUSTOMER_LOGIN_START: "CUSTOMER_LOGIN_START",
  CUSTOMER_LOGIN_SUCCESS: "CUSTOM_LOGIN_SUCCESS",
  CUSTOMER_LOGIN_FAILURE: "CUSTOMER_LOGIN_FAILURE",

  CUSTOMER_LOGOUT: "CUSTOMER_LOGOUT",

  GET_CUSTOMER_PROFILE_START: "GET_CUSTOMER_PROFILE_START",
  GET_CUSTOMER_PROFILE_SUCCESS: "GET_CUSTOMER_PROFILE_SUCCESS",
  GET_CUSTOMER_PROFILE_FAILURE: "GET_CUSTOMER_PROFILE_FAILURE",

  GET_PROFILE_BY_TOKEN: "GET_PROFILE_BY_TOKEN",
};

export const commentType = {
  CREATE_COMMENT_START: "CREATE_COMMENT_START",
  CREATE_COMMENT_SUCCESS: "CREATE_COMMENT_SUCCESS",
  CREATE_COMMENT_ERROR: "CREATE_COMMENT_ERROR",

  GET_COMMENT_BY_PRODUCT_START: "GET_COMMENT_BY_PRODUCT_START",
  GET_COMMENT_BY_PRODUCT_SUCCESS: "GET_COMMENT_BY_PRODUCT_SUCCESS",
  GET_COMMENT_BY_PRODUCT_ERROR: "GET_COMMENT_BY_PRODUCT_ERROR",
};

export const wishlistType = {
  GET_WISHLIST: "GET_WISHLIST",
  REMOVE_WISHLIST: "REMOVE_WISHLIST",
};
