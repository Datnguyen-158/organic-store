import classNames from 'classnames/bind'
import styles from './address.scss'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import AddAddress from './AddAddress'
const d = classNames.bind(styles)

function Address() {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const openForm = () => {
    setIsFormVisible(true)
  }

  // Đóng form
  const closeForm = () => {
    setIsFormVisible(false)
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
                    <Link to="../Login">Đổi mật khẩu</Link>
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
              <div className="col-12 d-flex address-info">
                <div className="col-9 ">
                  <div
                    className={d('address-group')}
                    style={{ textAlign: 'left' }}
                  >
                    <p>
                      <strong>Họ tên: </strong> Khắc Đạt
                    </p>
                    <p>
                      <strong>Địa chỉ:</strong> Phường Phú Lương, Quận Hà Đông,
                      Hà Nội, Vietnam
                    </p>
                    <p>
                      <strong>Số điện thoại:</strong> 0333158971
                    </p>
                    <p>
                      <strong>Công ty:</strong> ahihi
                    </p>
                    <p></p>
                  </div>
                </div>
                <div className="col-3 change-address">
                  <p>
                    <button onClick={() => openForm()}>
                      Chỉnh sửa địa chỉ
                    </button>
                    {isFormVisible && (
                      <>
                        <div className="overlay"></div> {/* Lớp overlay */}
                        {isFormVisible && <AddAddress onClose={closeForm} />}
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Address
