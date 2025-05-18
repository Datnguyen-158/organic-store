import classNames from 'classnames/bind'
import styles from './changepass.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import authUser from '../../../api/authUser'
const d = classNames.bind(styles)

function ChangePass() {
  const userId = localStorage.getItem('user_id')
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const data = {
    user_id: userId,
    current_password: oldPassword,
    new_password: newPassword,
  }
  const handleSubmit = (e) => {
    console.log('a', data)
    e.preventDefault()
    if (newPassword.length < 5) {
      setError('Mật khẩu mới phải có ít nhất 5 ký tự.')
      return
    }
    if (newPassword !== confirmPassword) {
      setError('Mật khẩu xác nhận không khớp.')
      return
    }
    setError('')

    try {
      authUser.changepass(data)
      setOldPassword('')
      setNewPassword('')
      setConfirmPassword('')
    } catch (error) {
      setError('Lỗi khi đổi mật khẩu.')
    }
    alert('Mật khẩu đã được thay đổi thành công!')
  }
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
                Đổi mật khẩu
              </h1>
              <p style={{ marginBottom: '20px', textAlign: 'left' }}>
                Để đảm bảo tính bảo mật vui lòng đặt mật khẩu với ít nhất 5 kí
                tự
              </p>
              <div className={d('page_login_content')}>
                <form onSubmit={handleSubmit}>
                  <div className={d('form-signup')}>
                    <fieldset className={d('form_group ')}>
                      <label for="">
                        Mật khẩu cũ <span className={d('required')}>*</span>
                      </label>
                      <input
                        type="password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        required
                        placeholder="Mật khẩu cũ"
                      />
                    </fieldset>
                    <fieldset className={d('form_group ')}>
                      <label for="">
                        Mật khẩu mới <span className={d('required')}>*</span>
                      </label>
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        placeholder="Mật khẩu mới"
                      />
                    </fieldset>
                    <fieldset className={d('form_group ')}>
                      <label for="">
                        Xác nhận lại mật khẩu{' '}
                        <span className={d('required')}>*</span>
                      </label>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        placeholder="Xác nhận mật khẩu"
                      />
                    </fieldset>

                    <div className={d('btn-change-pass')}>
                      <button type="submit">Đặt lại mật khẩu</button>
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
