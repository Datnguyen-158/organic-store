// src/api/userApi.js
import axiosClient from './axiosClient'

const userApi = {
  get_User() {
    return axiosClient.get('users')
  },
  get_UserById(user) {
    return axiosClient.get(`users/${user}`)
  },
  addAllUser(data) {
    return axiosClient.post(`users`, data)
  },
  updateUserById(user, data) {
    return axiosClient.put(`users/${user}`, data)
  },
  deleteUserById(user) {
    return axiosClient.delete(`users/${user}`)
  },
}

export default userApi
