import classNames from 'classnames/bind'
import styles from './changepass.scss'
import { Link } from 'react-router-dom'

const d = classNames.bind(styles)

function ChangePass() {
  return (
    <div>
      <section className={d('bread_crumb')}>
        <div className="container ">
          <div className={d('bread_crumb_head  align-content-center ')}>
            <h1>Thay đổi mật khẩu</h1>
            <div className={d('link_bread_crumb ')}>
              <Link to="./Home">Trang chủ </Link>{' '}
              <span style={{ fontWeight: 'bolder' }}> Thay đổi mật khẩu</span>
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
                    <Link>Đổi mật khẩu</Link>
                  </li>
                  <li>
                    <Link>Sổ địa chỉ(2)</Link>
                  </li>
                </span>
              </div>
            </div>
            <div className={d('col-9')}>
              <h1 style={{ marginBottom: '20px', textAlign: 'left' }}>
                Đổi mật khẩu
              </h1>
              <p style={{ marginBottom: '20px', textAlign: 'left' }}>
                Để đảm bảo tính bảo mật vui lòng đặt mật khẩu với ít nhất 8 kí
                tự
              </p>
              <div className={d('page_login_content')}>
                <form action="/login" method="post">
                  <div className={d('form-signup')}>
                    <fieldset className={d('form_group ')}>
                      <label for="">
                        Mật khẩu cũ <span className={d('required')}>*</span>
                      </label>
                      <input type="text" placeholder="Mật khẩu cũ"></input>
                    </fieldset>
                    <fieldset className={d('form_group ')}>
                      <label for="">
                        Mật khẩu mới <span className={d('required')}>*</span>
                      </label>
                      <input type="text" placeholder="Mật khẩu mới"></input>
                    </fieldset>
                    <fieldset className={d('form_group ')}>
                      <label for="">
                        Xác nhận lại mật khẩu *{' '}
                        <span className={d('required')}>*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Xác nhận lại mật khẩu *"
                      ></input>
                    </fieldset>

                    <div className={d('btn-change-pass')}>
                      <button type="submit" value="đăng ký">
                        Đặt lại mật khẩu
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChangePass
