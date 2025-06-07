import axiosClient from './axiosClient'

const cartApi = {
  getCart(user_id) {
    return axiosClient.get(`carts/${user_id}`)
  },
  addtocart(data) {
    return axiosClient.post('carts/add', data)
  },
  removetocart(id) {
    return axiosClient.delete(`cart/remove/${id}`)
  },
  updateQuantitytocart(cartId, quantity) {
    return axiosClient.put('carts/updatequantity', {
      cart_id: cartId,
      cart_quantity: quantity,
    })
  },
}

export default cartApi
