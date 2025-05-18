import classNames from 'classnames/bind'
import styles from './order.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import receiverApi from '../../../api/receiverApi'
import { useEffect } from 'react'
const d = classNames.bind(styles)

function Order() {
  // đơn hàng
  const [orders, setOrders] = useState([])
  const userId = localStorage.getItem('user_id')
  const getOrder = () => {
    receiverApi
      .getShowOrderbyId(userId)
      .then((response) => {
        setOrders(response.data)
        console.log('reponse:r', response.data)
      })
      .catch((error) => {
        console.error(
          'Có lỗi khi lấy đơn hàng ' + error + '-' + error.response.data.message
        )
      })
  }
  useEffect(() => {
    getOrder()
  }, [userId])
  return (
    <div>
      <section className={d('bread_crumb')}>
        <div className="container ">
          <div className={d('bread_crumb_head  align-content-center ')}>
            <h1>Trang đơn hàng</h1>
            <div className={d('link_bread_crumb ')}>
              <Link to="./Home">Trang chủ </Link>{' '}
              <li>
                <Link to="../Account">
                  <span>Trang tài khoản</span>
                </Link>
              </li>
              <span style={{ fontWeight: 'bolder' }}> Trang đơn hàng</span>
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
                    <Link to="../ChangePass">Đổi mật khẩu</Link>
                  </li>
                  <li>
                    <Link to="../Address">Sổ địa chỉ(2)</Link>
                  </li>
                </span>
              </div>
            </div>
            <div className={d('col-9')}>
              <h1 style={{ marginBottom: '20px', textAlign: 'left' }}>
                Đơn hàng của bạn
              </h1>
              <div className="col-12">
                <div className={d('my-order')}>
                  <table className={d('table')}>
                    <thead className={d('thead-default')}>
                      <tr>
                        <th>Đơn hàng</th>
                        <th>Ngày</th>
                        {/* <th>Địa chỉ</th> */}
                        <th>Trạng thái đơn hàng</th>
                        {/* <th>TT đơn hàng</th>
                        <th>TT vận chuyển</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order, index) => (
                        <tr key={index}>
                          <td>{order.order_id}</td>
                          <td>{order.order_date}</td>
                          {/* <td>Hà Đông, Hà Nội</td> */}
                          <td>{order.order_status}</td>
                          {/* <td>250.000đ</td>
                          <td>50.000đ</td> */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Order
