import styles from './order.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
const d = classNames.bind(styles)
function Order() {
  return (
    <div className="account-admin">
      <div className="add-account">
        <h5 style={{ fontSize: '1.6rem' }}>Danh sách đơn hàng</h5>
      </div>
      <div className="table-add-account pt-4">
        <table>
          <thead>
            <tr>
              <th>Mã đơn hàng</th>
              <th>Ngày đặt</th>
              <th>Tổng tiền</th>
              <th>Trạng thái</th>
              <th>Chi tiết</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3</td>
              <td>2025-01-17 21:06:41</td>
              <td> 50.000đ</td>
              <td>
                {' '}
                <button
                  className="btn btn-warning "
                  style={{ cursor: 'no-drop' }}
                >
                  Đơn hàng đã giao
                </button>
              </td>

              <td>
                <button className="btn btn-warning " style={{ margin: '5px' }}>
                  Xem chi tiết
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>2025-01-17 21:06:41</td>
              <td> 50.000đ</td>
              <td>
                {' '}
                <button
                  className="btn btn-warning "
                  style={{ cursor: 'no-drop', margin: '5px' }}
                >
                  Xác nhận
                </button>
                <button className="btn btn-danger " style={{ margin: '5px' }}>
                  Hủy đơn
                </button>
              </td>

              <td>
                <button className="btn btn-warning " style={{ margin: '5px' }}>
                  Xem chi tiết
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Order
