import styles from './account.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import userApi from '../../../api/userApi'
import AccountForm from './AccountForm'

const d = classNames.bind(styles)

function Account() {
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
      // console.log(response.data)
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

  return (
    <div className="account-admin">
      <div className="add-account">
        <button className="btn btn-success" type="" onClick={() => openForm()}>
          Thêm
        </button>
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
            {user?.map((item) => (
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
