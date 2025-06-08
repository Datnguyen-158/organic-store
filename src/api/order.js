// src/api/userApi.js
import axiosClient from './axiosClient'

const orderApi = {
  addOrder(data) {
    return axiosClient.post('/order/place', data)
  },
  getAll() {
    return axiosClient.get('/orders')
  },
  getById(id) {
    return axiosClient.get(`/orders/${id}`)
  },
  getOrderItemByIdOrder(id) {
    return axiosClient.get(`/orderItem/${id}`)
  },
  updateStatus(orderId, status) {
    return axiosClient.put(`/orders/${orderId}/status`, {
      order_status: status,
    })
  },
  getpayUrl(Total, cartid, payload) {
    return axiosClient.post('momo-payment', { Total: Total, cartid: cartid, payload: payload });
  }
}

export default orderApi
