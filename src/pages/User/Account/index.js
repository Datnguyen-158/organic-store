import classNames from 'classnames/bind'
import styles from './account.scss'
import { Link } from 'react-router-dom'

const d = classNames.bind(styles)

function Account() {
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
                  <span style={{ fontWeight: '600' }}> Khắc Đạt</span>
                </p>
                <span>
                  <li>
                    <Link to="../Account">Thông tin tài khoản</Link>
                  </li>
                  <li>
                    <Link to="../Order">Đơn hàng của bạn</Link>
                  </li>
                  <li>
                    <Link to="../ChangePass">Đổi mật khẩu</Link>
                  </li>
                  <li>
                    <Link to="../Address">Sổ địa chỉ(2)</Link>
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
                  <strong>Họ tên:</strong> Khắc Đạt
                </p>
                <p>
                  <strong>Email: </strong> datnguyen158203@gmail.com
                </p>
                <p>
                  <strong>Điện thoại:</strong> 0333158971
                </p>
                <p>
                  <strong>Địa chỉ:</strong> Tổ 14, Phú Lương, Hà Đông, Hà Nội
                </p>
                <p>
                  <strong>Công ty: </strong> TNHH 1 Thành Viên
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
