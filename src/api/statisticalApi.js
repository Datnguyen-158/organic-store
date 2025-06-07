import axiosClient from './axiosClient'

const statistical = {
  getAll() {
    return axiosClient.get(`statistics`)
  },
  filter(from, to) {
    return axiosClient.post(`statistics/filter`, {
      from: from,
      to: to,
    })
  },
}

export default statistical
