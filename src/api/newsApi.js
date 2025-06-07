import axiosClient from './axiosClient'

const newsApi = {
  getNews() {
    return axiosClient.get('news')
  },
  getNewsbyID(id) {
    return axiosClient.get(`news/${id}`)
  },
  addNews(data) {
    return axiosClient.post('news', data)
  },
  updateNews(new_id, data) {
    return axiosClient.put(`news/${new_id}`, data)
  },
  deleteNews(id) {
    return axiosClient.delete(`news/${id}`)
  },
}

export default newsApi
