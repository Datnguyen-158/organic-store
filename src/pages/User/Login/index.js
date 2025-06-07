import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import '@fortawesome/fontawesome-free/css/all.min.css'
import styles from './login.scss'
// import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import authUser from '../../../api/authUser'

const d = classNames.bind(styles)
function Login() {
  const location = useLocation()
  const navigate = useNavigate()
  const [user_email, setEmail] = useState()
  const [user_password, setPassword] = useState()
  const [error, setError] = useState('')
  function HandleLogin(e) {
    e.preventDefault()
    // const data = {
    //   user_email,
    //   user_password,
    // }
    authUser
      .login(user_email, user_password)
      .then((response) => {
        localStorage.setItem('token', response.token)
        console.log(response)
        localStorage.setItem('user_name', response.user.user_name)

        localStorage.setItem('user_id', response.user.user_id)

        HandleCheckRole(response.user.user_role)
        // window.location.reload()
      })
      .catch((error) => {
        setError('Mật khẩu hoặc email không đúng!')
        console.error(
          'Có lỗi khi đăng nhập ' + error + '-' + error.response.data.message
        )
      })
  }
  function HandleCheckRole(role) {
    if (role == 0) {
      navigate('/')
    } else {
      navigate('/Admin/Home')
    }
  }

  return (
    <div className={d('form_login')}>
      <section className={d('bread_crumb')}>
        <div className="container ">
          <div className={d('bread_crumb_head  align-content-center ')}>
            <h1>Đăng nhập tài khoản</h1>
            <div className={d('link_bread_crumb ')}>
              <Link to="./Home">Trang chủ </Link>
              <span style={{ fontWeight: 'bolder' }}> Đăng nhập tài khoản</span>
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
                  <li
                    className={location.pathname === '/Login' ? d('act') : ''}
                  >
                    <Link to="/Login">Đăng Nhập</Link>
                  </li>
                  <li
                    className={
                      location.pathname === '/Register' ? d('act') : ''
                    }
                  >
                    <Link to="/Register">Đăng Ký</Link>
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
                          Email <span className={d('required')}>*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="Nhập địa chỉ email"
                          onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        {/* <span>Email sai định dạng</span> */}
                      </fieldset>
                      <fieldset className={d('form_group')}>
                        <label for="">
                          Mật khẩu <span className={d('required')}>*</span>
                        </label>
                        <input
                          type="password"
                          placeholder="Nhập mật khẩu của bạn"
                          onChange={(e) => setPassword(e.target.value)}
                        ></input>
                        {/* <span>Không được để trống</span> */}
                      </fieldset>
                      <p style={{ textAlign: 'left' }}>
                        <Link to="./" title="Quên mật khẩu?">
                          Quên mật khẩu?
                        </Link>
                      </p>
                      <div className={d('btn-login')}>
                        <button
                          onClick={(e) => {
                            HandleLogin(e)
                          }}
                          type="submit"
                          value="đăng nhập"
                        >
                          Đăng nhập
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

export default Login
