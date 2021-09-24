import customerApi from "../../API/customerApi";
import * as actions from "../actions/customer.action";

export const createCustomers = (customer) => (dispatch) => {
  dispatch(actions.createCustomer());

  customerApi
    .createCustomer(customer)
    .then((customer) => dispatch(actions.createCustomerSuccess(customer)))
    .catch((err) => dispatch(actions.createCustomerFailure()));
};

export const updateCustomers = (payload) => (dispatch) => {
  dispatch(actions.updateCustomer());
  customerApi
    .updateCustomer(payload)
    .then((payload) => dispatch(actions.updateCustomerSuccess(payload)))
    .catch((err) => dispatch(actions.updateCustomerFailure()));
};
