import { customerType } from "../actionType/actionTypes";

export const createCustomer = () => ({
  type: customerType.CREAT_CUSTOMER_START,
});

export const createCustomerSuccess = (customer) => ({
  type: customerType.CREAT_CUSTOMER_SUCCESS,
  payload: customer,
});

export const createCustomerFailure = () => ({
  type: customerType.CREAT_CUSTOMER_FAILURE,
});

export const updateCustomer = () => ({
  type: customerType.CREAT_CUSTOMER_START,
});

export const updateCustomerSuccess = (customer) => ({
  type: customerType.CREAT_CUSTOMER_SUCCESS,
  payload: customer,
});

export const updateCustomerFailure = () => ({
  type: customerType.CREAT_CUSTOMER_FAILURE,
});
