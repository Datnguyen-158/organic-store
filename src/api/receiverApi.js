import axiosClient from './axiosClient'

const receiverApi = {
  getShowReceivers(user_id) {
    return axiosClient.get(`users/${user_id}/receiver`)
  },
  getShowOrderbyId(user) {
    return axiosClient.get(`users/${user}/orders`)
  },
  getByIdUserReceiver(user) {
    return axiosClient.get(`users/${user}/receiver`)
  },
  getAddAddress() {
    return axiosClient.get(`receiver`)
  },
  getShowByID(receiverID) {
    return axiosClient.get(`receiver/${receiverID}`)
  },
  updateAddress(receiver_id, data) {
    return axiosClient.put(`receiver/${receiver_id}`, data)
  },
  deleteAddress(receiver_id) {
    return axiosClient.delete(`receiver/${receiver_id}`)
  },
  addAddress(data) {
    return axiosClient.post(`receiver`, data)
  },
  setDefaultAddress(userid, addressid) {
    return axiosClient.post(`/user/${userid}/setdefaultaddress/${addressid}`)
  },
}

export default receiverApi
