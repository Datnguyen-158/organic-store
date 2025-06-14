import styles from './product.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import ProductForm from './ProductForm'
import receiverApi from '../../../api/receiverApi'
const d = classNames.bind(styles)
function Shipping() {
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
      // console.log(response.data)
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

  return (
    <div className="account-admin">
      <div className="add-account">
        <button className="btn btn-success" type="" onClick={() => openForm()}>
          Thêm
        </button>
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
              receiver?.map((item, index) => (
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
