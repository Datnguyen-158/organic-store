import classNames from 'classnames/bind'
import styles from './account.scss'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import authUser from '../../../api/authUser'
import receiverApi from '../../../api/receiverApi'
const d = classNames.bind(styles)

function Account() {
  const userId = localStorage.getItem('user_id')
  const [fullname, setFullName] = useState()
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()
  const [user, setUser] = useState([])
  const [receiver, setReceiver] = useState([])
  const [order, setOrders] = useState([])
  const [selectedSection, setSelectedSection] = useState('account')

  const getUserName = () => {
    authUser
      .get_user_id(userId)
      .then((response) => {
        setUser(response.data)
        console.log('Response data:', response.data)
      })
      .catch((error) => {
        console.error(
          'Có lỗi khi lấy tên ' + error + '-' + error.response.data.message
        )
      })
  }
  const getReceiver = () => {
    receiverApi
      .getByUser(userId)
      .then((response) => {
        setReceiver(response.data)
        console.log('Response data:', response.data)
      })
      .catch((error) => {
        console.error(
          'Có lỗi khi lấy khách hàng ' +
            error +
            '-' +
            error.response.data.message
        )
      })
  }

  useEffect(() => {
    getUserName()
    getReceiver()
  }, [userId])
  return (
    <div>
      <section className={d('bread_crumb')}>
        <div className="container ">
          <div className={d('bread_crumb_head  align-content-center ')}>
            <h1>Trang khách hàng</h1>
            <div className={d('link_bread_crumb ')}>
              <Link to="./Home">Trang chủ </Link>
              <span style={{ fontWeight: 'bolder' }}> Trang khách hàng</span>
            </div>
          </div>
        </div>
      </section>
      <section className={d('page-customer ')}>
        <div className="container ">
          <div className="row">
            <div className="col-3">
              <div className={d('block-account')}>
                <h1>Trang tài khoản</h1>
                <p style={{ marginBottom: '30px' }}>
                  Xin chào,
                  <span style={{ fontWeight: '600' }}>
                    {' '}
                    {receiver[0]?.receiver_name}
                  </span>
                </p>
                <span>
                  <li>
                    <Link to="/Account">Thông tin tài khoản</Link>
                  </li>
                  <li>
                    <Link to="/Order">Đơn hàng của bạn</Link>
                  </li>
                  <li>
                    <Link to="/ChangePass">Đổi mật khẩu</Link>
                  </li>
                  <li>
                    <Link to="/Address">
                      Sổ địa chỉ (
                      {Array.isArray(receiver) ? receiver.length : 0})
                    </Link>
                  </li>
                  <li>
                    <Link to="../Login">Đăng xuât</Link>
                  </li>
                </span>
              </div>
            </div>
            <div className={d('col-9 info-account')}>
              <h1 style={{ marginBottom: '20px' }}>Thông tin tài khoản</h1>

              <div className={d('my-account')}>
                <p>
                  <strong>Họ tên:</strong> {receiver[0]?.receiver_name}
                </p>
                {/* <p>
                  <strong>Email: </strong> {user?.user_email}
                </p> */}
                <p>
                  <strong>Điện thoại:</strong> {receiver[0]?.receiver_phone}
                </p>
                <p>
                  <strong>Địa chỉ</strong> {receiver[0]?.receiver_desc},
                  {receiver[0]?.receiver_commune},
                  {receiver[0]?.receiver_district},{receiver[0]?.receiver_city},
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Account
