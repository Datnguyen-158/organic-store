import React, { useState, useEffect } from 'react'
import userApi from '../../../api/userApi'
import './style.css'
const AccountForm = ({ user_id, onUpdate, onClose }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (user_id) {
      userApi
        .get_UserById(user_id)
        .then((response) => {
          const data = response.data
          if (!data) {
            console.error('Không tìm thấy user')
            return
          }
          setName(data.user_name || '')
          setEmail(data.user_email || '')
          setRole(data.user_role || '')
        })

        .catch((error) => {
          console.error('Có lỗi khi lấy thông tin tài khoản:', error)
        })
    } else {
      // reset khi không phải edit
      setPassword('')
      setEmail('')
      setRole('')
    }
  }, [user_id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const useredit = {
      user_name: name,
      user_email: email,
      user_role: role,
    }
    const useradd = {
      user_name: name,
      user_email: email,
      user_password: password,
      user_role: role,
    }
    try {
      if (user_id) {
        // Sửa tài khoản
        await userApi.updateUserById(user_id, useredit)
      } else {
        // Thêm tài khoản
        await userApi.addAllUser(useradd)
      }

      onUpdate() // reload danh sách hoặc đóng form
      onClose()
    } catch (err) {
      console.error(err)
      alert('Có lỗi xảy ra khi lưu tài khoản.')
    }
  }
  return (
    <div>
      <div className="form-popup111">
        <form className="form-container" onSubmit={handleSubmit}>
          <h4 className="mt-3" style={{ fontSize: '1.9rem' }}>
            Thông tin tài khoản
          </h4>
          <div>
            <label style={{ float: 'left' }} className="name ">
              User_name :
            </label>
            <input
              type="text"
              placeholder="Họ tên của bạn"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label style={{ float: 'left' }} className="name">
              User_email :
            </label>
            <input
              type="text"
              placeholder="Email của bạn"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {!user_id ? (
            <div>
              <label className="name" style={{ float: 'left' }}>
                User_password :
              </label>
              <input
                type="text"
                placeholder="Mật khẩu của bạn"
                name="user_password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          ) : (
            <></>
          )}

          <div>
            <label className="name" style={{ float: 'left' }}>
              User_role :
            </label>
            <input
              type="text"
              placeholder="Vai trò của bạn"
              name="user_password"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>

          <div className="form-bt">
            <button type="submit" className="btn btn-success">
              Lưu
            </button>
            <button type="button" className="btn btn-warning" onClick={onClose}>
              Đóng
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AccountForm
