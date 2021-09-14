import axiosClient from "./axiosClient";

const orderApi = {
  getOrderByUser: (id) => {
    const url = `/orders`;
    return axiosClient.get(url, {
      params: {
        id: id,
        _sort: "createAt",
        _order: "desc",
      },
    });
  },

  createOrder: (order) => {
    const url = `/orders`;
    return axiosClient.post(url, { ...order });
  },
};

export default orderApi;
