import styles from './account.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
const d = classNames.bind(styles)
function Account() {
  return (
    <div className="account-admin">
      <div className="add-account">
        <button className="btn btn-success" type="">
          Thêm
        </button>
      </div>
      <div className="table-add-account pt-4">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th> Password</th>
              <th> Email</th>
              <th> SĐT</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>lam</td>
              <td> 123</td>
              <td> lam@gmail.com</td>
              <td>0333158971</td>
              <td>
                <button
                  className="btn btn-warning "
                  style={{ marginRight: '10px' }}
                >
                  Sửa
                </button>
                <button className="btn btn-danger">Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Account
