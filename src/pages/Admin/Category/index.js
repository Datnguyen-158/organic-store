import styles from './category.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
const d = classNames.bind(styles)
function Category() {
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
              <th>Tên danh mục</th>
              <th> Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Táo lê ruột đỏ</td>

              <td>
                <button
                  className="btn btn-warning "
                  style={{ marginRight: '15px' }}
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

export default Category
