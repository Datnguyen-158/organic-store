import classNames from 'classnames/bind'
import styles from './address.scss'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import AddAddress from './AddAddress'
import receiverApi from '../../../api/receiverApi'
const d = classNames.bind(styles)

function Address() {
  const userId = localStorage.getItem('user_id')
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [selectedId, setSelectedId] = useState(null)
  const [addresses, setAddresses] = useState([])
  const openForm = (Id = null) => {
    setSelectedId(Id)
    setIsFormVisible(true)
  }

  // Đóng form
  const closeForm = () => {
    setIsFormVisible(false)
  }

  const fetchAddresses = () => {
    receiverApi
      .getByIdUserReceiver(userId)
      .then((response) => {
        setAddresses(response.data)
      })
      .catch((error) => {
        console.error('Lỗi khi gọi API:', error)
      })
  }
  useEffect(() => {
    fetchAddresses()
  }, [])

  function handlesetdefault(addressid) {
    receiverApi
      .setDefaultAddress(userId, addressid)
      .then(() => {
        console.log('Đã cập nhật địa chỉ mặc định thành công')
        return receiverApi.getByIdUserReceiver(userId)
      })
      .then((response) => {
        setAddresses(response.data)
      })
      .catch((error) => {
        console.error('Lỗi khi cập nhật địa chỉ mặc định:', error)
      })
  }
  function handledelete(addressid) {
    receiverApi
      .deleteAddress(addressid)
      .then(() => {
        console.log('Đã xóa địa chỉ thành công')
        return fetchAddresses()
      })
      .catch((error) => {
        console.error('Lỗi khi xóa', error)
      })
  }
  return (
    <div>
      <section className={d('bread_crumb')}>
        <div className="container ">
          <div className={d('bread_crumb_head  align-content-center ')}>
            <h1>Sổ địa chỉ</h1>
            <div className={d('link_bread_crumb ')}>
              <Link to="./Home">Trang chủ </Link>{' '}
              <span style={{ fontWeight: 'bolder' }}> Sổ địa chỉ</span>
            </div>
          </div>
        </div>
      </section>
      <section className={d('page-customer ')}>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className={d('block-account')}>
                <h1>Trang tài khoản</h1>
                <p style={{ marginBottom: '30px' }}>
                  Xin chào,
                  <span style={{ fontWeight: '600' }}> Khắc Đạt</span>
                </p>
                <span>
                  <li>
                    <Link to="../Account">Thông tin tài khoản</Link>
                  </li>
                  <li>
                    <Link to="../Order">Đơn hàng của tôi</Link>
                  </li>

                  <li>
                    <Link to="../Changepass">Đổi mật khẩu</Link>
                  </li>
                  <li>
                    <Link to="../Address">Sổ địa chỉ(2)</Link>
                  </li>
                </span>
              </div>
            </div>
            <div className={d('col-9')}>
              <h1 style={{ marginBottom: '20px', textAlign: 'left' }}>
                Địa chỉ của bạn
              </h1>
              <p style={{ marginBottom: '20px', textAlign: 'left' }}>
                <div className={d('btn-change-pass')}>
                  <button
                    type="submit"
                    value="đăng ký"
                    onClick={() => openForm()}
                  >
                    Thêm địa chỉ
                  </button>
                  {isFormVisible && (
                    <>
                      <div className="overlay"></div> {/* Lớp overlay */}
                      {isFormVisible && <AddAddress onClose={closeForm} />}
                    </>
                  )}
                </div>
              </p>
              {addresses.map((item, index) => (
                <div className="col-12 d-flex  address-info">
                  <div key={index} className="col-9   ">
                    <div
                      className={d('address-group')}
                      style={{ textAlign: 'left' }}
                    >
                      <p>
                        <strong>Họ tên: </strong> {item.receiver_name}
                        {item.receiver_type === 1 && (
                          <span
                            style={{
                              color: '#27AE60',
                              fontSize: '13px',
                              marginLeft: '9px',
                            }}
                          >
                            Địa chỉ mặc định
                          </span>
                        )}
                      </p>

                      <p>
                        <strong>Địa chỉ:</strong>
                        {item.receiver_desc},{item.receiver_commune},{' '}
                        {item.receiver_district}, {item.receiver_city}, Hà Nội,
                        Vietnam
                      </p>
                      <p>
                        <strong>Số điện thoại:</strong>
                        {item.receiver_phone},
                      </p>
                      <p></p>
                    </div>
                  </div>
                  <div className="col-3 change-address">
                    {item.receiver_type === 0 && (
                      <p
                        style={{
                          color: '#27AE60',
                          fontSize1: '1.2rem',
                          cursor: 'pointer',
                        }}
                        onClick={() => handlesetdefault(item.receiver_id)}
                      >
                        Đặt làm địa chỉ mặc định
                      </p>
                    )}
                    <p
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <button onClick={() => openForm(item.receiver_id)}>
                        Chỉnh sửa địa chỉ
                      </button>
                      <span
                        style={{
                          color: 'red',
                          cursor: 'pointer',
                        }}
                        onClick={() => handledelete(item.receiver_id)}
                      >
                        Xóa
                      </span>
                      {isFormVisible && (
                        <>
                          <div className="overlay"></div> {/* Lớp overlay */}
                          {isFormVisible && (
                            <AddAddress
                              id={selectedId}
                              onClose={closeForm}
                              onSuccess={fetchAddresses}
                            />
                          )}
                        </>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Address
