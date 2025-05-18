// src/api/userApi.js
import axiosClient from './axiosClient'

const authUser = {
  logout() {
    return axiosClient.get('/logout')
  },
  get_user_id(user_id) {
    return axiosClient.get(`users/${user_id}`)
  },
  // get_user(id) {
  //   return axiosClient.get(`/user/${id}`);
  // },
  login(email, password) {
    return axiosClient.post('user/login', {
      user_email: email,
      user_password: password,
    })
  },
  register(data) {
    return axiosClient.post('user/regester', data)
  },
  // resetpass(id, data) {
  //   return axiosClient.put(`/user/${id}`, data)
  // },
  changepass(data) {
    return axiosClient.post('/change-password', data)
  },
  // get_all() {
  //   return axiosClient.get('/user')
  // },
  // delete_user(id) {
  //   return axiosClient.delete(`/user/${id}`)
  // },
  // update_user(id, data) {
  //   return axiosClient.put(`/user/${id}`, data)
  // },
}

export default authUser
