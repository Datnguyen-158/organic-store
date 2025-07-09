import styles from './product.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import ProductForm from './ProductForm'
import receiverApi from '../../../api/receiverApi'
const d = classNames.bind(styles)
function Shipping() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filtered, setFiltered] = useState([])
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [receiver, setReceiver] = useState(null)
  const [selectedId, setSelectedId] = useState(null)
  const openForm = (id = null) => {
    setSelectedId(id)
    setIsFormVisible(true)
  }

  // Đóng form
  const closeForm = () => {
    setIsFormVisible(false)
  }
  const get_all = async () => {
    try {
      const response = await receiverApi.getAddAddress()
      setReceiver(response.data)
      if (!searchTerm.trim()) {
        setFiltered(response.data)
      }
    } catch (error) {
      console.error('Có lỗi khi lấy danh sách :', error)
    }
  }
  const deleteproduct = async (id) => {
    try {
      await receiverApi.deleteAddress(id)
      get_all()
    } catch (error) {
      console.error('Có lỗi khi xóa sản phẩm:', error)
    }
  }
  useEffect(() => {
    get_all()
  }, [])
  const handleSearch = () => {
    const lowerSearch = searchTerm.toLowerCase()
    const result = receiver.filter((u) =>
      u.receiver_id.toString().includes(searchTerm)
    )
    setFiltered(result)
  }

  const handleShowAll = () => {
    setSearchTerm('')
    setFiltered(receiver)
  }
  return (
    <div className="account-admin">
      <div className="add-account d-flex justify-content-between align-items-center mb-3">
        <button className="btn btn-success" type="" onClick={() => openForm()}>
          Thêm
        </button>
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ height: '50px' }}
        >
          <input
            type="text"
            style={{ fontSize: '14px' }}
            className="form-control h-75"
            placeholder="Tìm theo id khách hàng"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Tìm
          </button>
          <button
            className="btn btn-secondary"
            onClick={handleShowAll}
            style={{ width: '200px' }}
          >
            Tất cả
          </button>
        </div>
      </div>
      <div className="table-add-account pt-4">
        <table>
          <thead>
            <tr>
              <th>Id khách hàng</th>
              <th>Tên khách hàng</th>
              <th>SĐT</th>
              <th>Id tài khoản</th>
              <th>Thành phố</th>
              <th>Quận</th>
              <th>Phường</th>
              <th>Mô tả</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(receiver) &&
              filtered?.map((item, index) => (
                <tr key={index}>
                  <td>{item.receiver_id}</td>
                  <td>{item.receiver_name}</td>
                  <td>{item.receiver_phone}</td>
                  <td>{item.user_id}</td>
                  <td>{item.receiver_city}</td>
                  <td>{item.receiver_district}</td>
                  <td>{item.receiver_commune}</td>
                  <td>{item.receiver_desc}</td>
                  <td>{item.receiver_type}</td>

                  <td>
                    <button
                      className="btn btn-warning "
                      style={{ margin: '5px' }}
                      onClick={() => openForm(item.receiver_id)}
                    >
                      Sửa
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteproduct(item.receiver_id)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {isFormVisible && (
        <>
          <div className="overLay"></div> {/* Lớp overlay */}
          <ProductForm
            id={selectedId}
            onUpdate={get_all}
            onClose={closeForm}
          />{' '}
          {/* Form */}
        </>
      )}
    </div>
  )
}

export default Shipping
