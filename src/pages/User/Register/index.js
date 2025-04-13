import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'

import styles from './register.scss'

const d = classNames.bind(styles)
function Register() {
  return (
    <div className={d('form_login')}>
      <section className={d('bread_crumb')}>
        <div className="container ">
          <div className={d('bread_crumb_head  align-content-center ')}>
            <h1>Đăng ký tài khoản</h1>
            <div className={d('link_bread_crumb ')}>
              <Link to="./Home">Trang chủ </Link>
              <span style={{ fontWeight: 'bolder' }}> Đăng ký tài khoản</span>
            </div>
          </div>
        </div>
      </section>
      <section className={d('content_login')}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-12">
              <div className={d('page_login ')}>
                <div className={d('page_login_list')}>
                  <li className={d('act')}>
                    <Link to="./">Đăng Nhập</Link>
                  </li>
                  <li>
                    <Link to="./">Đăng Ký</Link>
                  </li>
                </div>
                <div className={d('page_login_content')}>
                  <form action="/login" method="post">
                    <div
                      className={d('form-signup')}
                      style={{ margin: '0px 20px' }}
                    >
                      <fieldset className={d('form_group ')}>
                        <label for="">
                          Họ <span className={d('required')}>*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Nhập họ của bạn"
                        ></input>
                        <span>Không được để trống</span>
                      </fieldset>
                      <fieldset className={d('form_group ')}>
                        <label for="">
                          Tên <span className={d('required')}>*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Nhập tên của bạn"
                        ></input>
                        <span>Không được để trống</span>
                      </fieldset>
                      <fieldset className={d('form_group ')}>
                        <label for="">
                          Số điện thoại <span className={d('required')}>*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Nhập SĐT của bạn"
                        ></input>
                        <span>Không được để trống</span>
                      </fieldset>
                      <fieldset className={d('form_group ')}>
                        <label for="" required>
                          Email <span className={d('required')}>*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="Nhập địa chỉ email"
                        ></input>
                        <span>Email sai định dạng</span>
                      </fieldset>
                      <fieldset className={d('form_group')}>
                        <label for="">
                          Mật khẩu <span className={d('required')}>*</span>
                        </label>
                        <input
                          type="password"
                          placeholder="Nhập mật khẩu của bạn"
                        ></input>
                        <span>Không được để trống</span>
                      </fieldset>

                      <div className={d('btn-login')}>
                        <button type="submit" value="đăng ký">
                          Tạo tài khoản
                        </button>
                      </div>
                      <p className={d('login-notes')}>
                        ND Fresh cam kết bảo mật và sẽ không bao giờ đăng hay
                        chia
                        <br></br>
                        sẻ thông tin mà chưa có được sự đồng ý của bạn.
                      </p>
                      <div className={d('line-break')}>
                        <span>hoặc đăng nhập qua</span>
                      </div>

                      <div className={d('social_login')}>
                        <Link to="./" className={d('social_login_facebook')}>
                          <img
                            src="	https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg"
                            alt=""
                          ></img>
                        </Link>
                        <Link to="./" className={d('social_login_google')}>
                          <img
                            src="	https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg"
                            alt=""
                          ></img>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register
