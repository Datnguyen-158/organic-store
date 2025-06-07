import React, { useState, useEffect } from 'react'
import receiverApi from '../../../api/receiverApi'

const ProductForm = ({ id, onUpdate, onClose }) => {
  const [receiver_name, setReceiver_name] = useState('')
  const [receiver_phone, setReceiver_phone] = useState('')
  const [user_id, setUser_id] = useState('')
  const [receiver_city, setReceiver_city] = useState('')
  const [receiver_district, setReceiver_district] = useState('')
  const [receiver_commune, setReceiver_commune] = useState('')
  const [receiver_desc, setReceiver_desc] = useState('')
  const [receiver_type, setReceiver_type] = useState('')

  useEffect(() => {
    if (id) {
      receiverApi
        .getShowByID(id)
        .then((response) => {
          const data = response.data // Truy cập data bên trong response
          setReceiver_name(data.receiver_name)
          setReceiver_phone(data.receiver_phone)
          setUser_id(data.user_id) // Chuyển về string để đồng nhất với input
          setReceiver_city(data.receiver_city)
          setReceiver_district(data.receiver_district) // Chuyển về string
          setReceiver_commune(data.receiver_commune)
          setReceiver_desc(data.receiver_desc)
          setReceiver_type(data.receiver_type)
        })
        .catch((error) => {
          console.error('Lỗi khi lấy thông tin khách hàng để sửa:', error)
        })
    } else {
      // Reset form khi không có ID (chế độ thêm mới)
      setReceiver_name('')
      setReceiver_phone('')
      setUser_id('')
      setReceiver_city('')
      setReceiver_district('')
      setReceiver_commune('')
      setReceiver_desc('')
      setReceiver_type('')
    }
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('receiver_name', receiver_name)
    formData.append('receiver_phone', receiver_phone)
    formData.append('user_id', user_id)
    formData.append('receiver_city', receiver_city)
    formData.append('receiver_district', receiver_district)
    formData.append('receiver_commune', receiver_commune)
    formData.append('receiver_desc', receiver_desc)
    formData.append('receiver_type', receiver_type)

    try {
      if (id) {
        console.log('Đang gọi API sửa khách hàng với ID:', id)
        await receiverApi.updateAddress(id, formData)
        alert('Cập nhật sản phẩm thành công!')
      } else {
        console.log('Đang gọi API thêm mới khách hàng')
        await receiverApi.addAddress(formData)
        alert('Thêm khách hàng thành công!')
      }
      onUpdate()
      onClose()
    } catch (error) {
      console.error('Lỗi khi lưu khách hàng:', error)
      alert('Lỗi khi lưu khách hàng!')
    }
  }

  return (
    <div className="form-popup111" style={{ width: '700px' }}>
      <form className="form-container" onSubmit={handleSubmit}>
        <h4 className="mt-3">
          {id ? 'Sửa thông tin khách hàng' : 'Thêm mới khách hàng'}
        </h4>
        <div className="mt-3  ">
          <div className="row">
            <div className="col-6 ">
              <div>
                <label>Tên khách hàng</label>
                <input
                  type="text"
                  value={receiver_name}
                  onChange={(e) => setReceiver_name(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>SĐT</label>
                <input
                  type="text"
                  value={receiver_phone}
                  onChange={(e) => setReceiver_phone(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Id tài khoản</label>
                <input
                  type="text"
                  value={user_id}
                  onChange={(e) => setUser_id(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Thành phố</label>
                <input
                  type="text"
                  value={receiver_city}
                  onChange={(e) => setReceiver_city(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-6 ">
              <div>
                <label>Quận</label>
                <input
                  type="text"
                  value={receiver_district}
                  onChange={(e) => setReceiver_district(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Phường</label>
                <input
                  type="text"
                  value={receiver_commune}
                  onChange={(e) => setReceiver_commune(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Mô tả</label>
                <input
                  type="text"
                  value={receiver_desc}
                  onChange={(e) => setReceiver_desc(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Mặc định</label>
                <input
                  type="text"
                  value={receiver_type}
                  onChange={(e) => setReceiver_type(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="form-bt">
          <button
            style={{ fontSize: '1.6rem' }}
            type="submit"
            className="btn btn-success"
          >
            {id ? 'Lưu thay đổi' : 'Lưu'}
          </button>
          <button
            style={{ fontSize: '1.6rem' }}
            type="button"
            className="btn btn-secondary"
            onClick={onClose}
          >
            Đóng
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProductForm
