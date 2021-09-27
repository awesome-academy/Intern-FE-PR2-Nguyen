import { customerType } from "../actionType/actionTypes";

const initialState = {
  isLoading: false,
  status: "",
};

const customerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case customerType.CREAT_CUSTOMER_START: {
      return {
        ...state,
        isLoading: true,
        status: "",
      };
    }

    case customerType.CREAT_CUSTOMER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        status: "Register Success",
      };
    }

    case customerType.CREAT_CUSTOMER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        status: "Register Failure",
      };
    }

    case customerType.UPDATE_CUSTOMER_START: {
      return {
        ...state,
        isLoading: true,
        status: "",
      };
    }

    case customerType.UPDATE_CUSTOMER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        status: "Update Success",
      };
    }

    case customerType.UPDATE_CUSTOMER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        status: "Update Failure",
      };
    }

    default:
      return state;
  }
};

export default customerReducer;
