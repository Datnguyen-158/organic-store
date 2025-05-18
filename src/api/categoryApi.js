// src/api/userApi.js
import axiosClient from './axiosClient'

const categoryApi = {
  getCategories() {
    return axiosClient.get('categories')
  },
  getCategorybyID(id) {
    return axiosClient.get(`categories/${id}`)
  },
  addCategories(data) {
    return axiosClient.post(`categories`, data)
  },
  updateCategoriesById(category, data) {
    return axiosClient.put(`categories/${category}`, data)
  },
  deleteCategoriesById(category) {
    return axiosClient.delete(`categories/${category}`)
  },
}

export default categoryApi
