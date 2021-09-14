import axiosClient from "./axiosClient";

const customerApi = {
  getAllCustomer: () => {
    const url = "/customers";
    return axiosClient.get(url);
  },

  getCustomer: (params) => {
    const url = "/customers";
    return axiosClient.get(url, { params });
  },

  getCustomerById: (id) => {
    const url = `/customers/${id}`;
    return axiosClient.get(url);
  },

  createCustomer: (customer) => {
    const url = "/customers";
    return axiosClient.post(url, customer);
  },

  deleteCustomer: (id) => {
    const url = `/customers/${id}`;
    return axiosClient.delete(url);
  },

  updateCustomer: (id, customer) => {
    const url = `/customers/${id}`;
    return axiosClient.put(url, customer);
  },
};

export default customerApi;
