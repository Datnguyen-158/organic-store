// src/api/userApi.js
import axiosClient from './axiosClient'

const productApi = {
  getProduct() {
    return axiosClient.get('products')
  },
  addProducts(data) {
    return axiosClient.post(`products`, data)
  },
  updateProductsById(product, data) {
    return axiosClient.put(`products/${product}`, data)
  },
  deleteProductsById(product) {
    return axiosClient.delete(`products/${product}`)
  },

  getShowProduct(category_id) {
    return axiosClient.get(`categories/${category_id}/products`)
  },
  getFilteredProducts(params) {
    return axiosClient.get('products', { params })
  },
  getShowProductByID(id) {
    return axiosClient.get(`products/${id}`)
  },

  getShowProductDetailByIdProduct(id) {
    return axiosClient.get(`productdetail/products/${id}`)
  },
  getshowWeightByProduct(id) {
    return axiosClient.get(`product-weights/${id}/products`)
  },
}

export default productApi
