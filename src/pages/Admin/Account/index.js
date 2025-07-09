import styles from './account.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import userApi from '../../../api/userApi'
import AccountForm from './AccountForm'

const d = classNames.bind(styles)

function Account() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filtered, setFiltered] = useState([])
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [selectedUserId, setSelectedUserId] = useState(null)
  const openForm = (user_id = null) => {
    setSelectedUserId(user_id)
    setIsFormVisible(true)
  }

  // Đóng form
  const closeForm = () => {
    setIsFormVisible(false)
  }

  const [user, setUser] = useState(null)
  // Lấy danh sách tài khoản
  const getAllUser = async () => {
    try {
      const response = await userApi.get_User()
      setUser(response.data)
      if (!searchTerm.trim()) {
        setFiltered(response.data)
      }
    } catch (error) {
      console.error('Có lỗi khi lấy danh sách tài khoản:', error)
    }
  }
  const deleteUser = async (id) => {
    try {
      await userApi.deleteUserById(id)
      getAllUser()
    } catch (error) {
      console.error('Có lỗi khi xóa tài khoản:', error)
    }
  }
  useEffect(() => {
    getAllUser()
  }, [])

  const handleSearch = () => {
    const lowerSearch = searchTerm.toLowerCase()
    const result = user.filter(
      (u) => u.user_name.toLowerCase().includes(lowerSearch)
      // u.email.toLowerCase().includes(lowerSearch)
    )
    setFiltered(result)
  }

  const handleShowAll = () => {
    setSearchTerm('')
    setFiltered(user)
  }

  return (
    <div className="account-admin">
      <div className="add-account d-flex justify-content-between align-items-center mb-3">
        <button className="btn btn-success" type="" onClick={() => openForm()}>
          Thêm
        </button>
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ height: '50px' }}
        >
          <input
            type="text"
            style={{ fontSize: '14px' }}
            className="form-control h-75"
            placeholder="Tìm theo tên hoặc email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Tìm
          </button>
          <button
            className="btn btn-secondary"
            onClick={handleShowAll}
            style={{ width: '200px' }}
          >
            Tất cả
          </button>
        </div>
      </div>
      <div className="table-add-account pt-4">
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {filtered?.map((item) => (
              <tr key={item.user_id}>
                <td>{item.user_id}</td>
                <td>{item.user_name}</td>
                <td>{item.user_email}</td>
                <td>{item.user_role}</td>
                <td>
                  <button
                    className="btn btn-warning "
                    // style={{ marginRight: '10px' }}
                    onClick={() => openForm(item.user_id)}
                  >
                    Sửa
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(item.user_id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isFormVisible && (
        <>
          <div className="overLay"></div> {/* Lớp overlay */}
          <AccountForm
            user_id={selectedUserId}
            onUpdate={getAllUser}
            onClose={closeForm}
          />{' '}
          {/* Form */}
        </>
      )}
    </div>
  )
}

export default Account
