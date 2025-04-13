import styles from './product.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
const d = classNames.bind(styles)
function Product() {
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
              <th>Tên sản phẩm</th>
              <th> Danh mục</th>
              <th> Ảnh sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Mô tả</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Dung dịch làm sạch và tẩy trang công nghệ Micellar Bioderma
                Sebium H2O - 500ml
              </td>
              <td> Tẩy trang</td>
              <td> hihi</td>
              <td> 50.000đ</td>
              <td>120kg</td>
              <td> Dung dịch,...</td>
              <td>
                <button className="btn btn-warning " style={{ margin: '5px' }}>
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

export default Product
