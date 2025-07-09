import styles from './order.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import receiverApi from '../../../api/receiverApi'
import orderApi from '../../../api/order'
import { useEffect } from 'react'
const d = classNames.bind(styles)
function Order() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filtered, setFiltered] = useState([])
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [receiver, setReceiver] = useState([])

  const openModal = (Order_id) => {
    orderApi
      .getOrderItemByIdOrder(Order_id)
      .then((response) => {
        setSelectedOrder(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Lỗi khi gọi API:', error)
      })
  }

  const closeModal = () => setSelectedOrder(null)

  // đơn hàng
  const [orders, setOrders] = useState([])
  const userId = localStorage.getItem('user_id')
  const getOrder = () => {
    orderApi
      .getAll()
      .then((response) => {
        setOrders(response.data)
        if (!searchTerm.trim()) {
          setFiltered(response.data)
        }
      })
      .catch((error) => {
        console.error(
          'Có lỗi khi lấy đơn hàng ' + error + '-' + error.response.data.message
        )
      })
  }
  const handleConfirm = (orderId) => {
    orderApi
      .updateStatus(orderId, 1) // Gửi lên status = 1 là đã xác nhận
      .then(() => {
        getOrder() // Refresh lại danh sách
      })
      .catch((error) => {
        console.error('Lỗi khi xác nhận đơn hàng:', error)
      })
  }

  const handleCancel = (orderId) => {
    orderApi
      .updateStatus(orderId, 2) // Gửi lên status = 2 là đã hủy
      .then(() => {
        getOrder()
      })
      .catch((error) => {
        console.error('Lỗi khi hủy đơn hàng:', error)
      })
  }
  useEffect(() => {
    getOrder()
  }, [userId])

  const handleSearch = () => {
    const lowerSearch = searchTerm.toLowerCase()
    const result = orders.filter((u) =>
      u.order_id.toString().includes(searchTerm)
    )
    setFiltered(result)
  }

  const handleShowAll = () => {
    setSearchTerm('')
    setFiltered(orders)
  }

  return (
    <div className="account-admin">
      <div className="add-account d-flex justify-content-between align-items-center mb-3">
        <h5 style={{ fontSize: '1.6rem' }}>Danh sách đơn hàng</h5>

        <div
          className="d-flex align-items-center justify-content-between"
          style={{ height: '50px' }}
        >
          <input
            type="text"
            style={{ fontSize: '14px' }}
            className="form-control h-75"
            placeholder="Tìm theo id đơn hàng"
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
              <th>Đơn hàng</th>
              <th>Ngày</th>
              <th>SĐT</th>
              <th>Địa chỉ</th>
              <th>Tổng tiền</th>
              <th>Trạng thái </th>
              <th>Chi tiết</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((order, index) => (
              <tr key={index}>
                <td>{order.order_id}</td>
                <td>{order.order_date}</td>
                <td>{order.receiver.receiver_phone}</td>
                <td>
                  {order.receiver.receiver_city},
                  {order.receiver.receiver_district},
                  {order.receiver.receiver_commune},
                  {order.receiver.receiver_desc}
                </td>
                <td>{order.TotalPrice}</td>
                <td style={{ textAlign: 'center' }}>
                  {order.order_status === 0 ? (
                    <>
                      <button
                        className="btn btn-success"
                        onClick={() => handleConfirm(order.order_id)}
                        style={{ margin: '5px' }}
                      >
                        Xác nhận
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleCancel(order.order_id)}
                        style={{ margin: '5px' }}
                      >
                        Hủy đơn
                      </button>
                    </>
                  ) : order.order_status === 1 ? (
                    <span className="badge bg-success">Đơn hàng đã giao</span>
                  ) : (
                    <span className="badge bg-secondary">Đơn hàng đã hủy</span>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => openModal(order.order_id)}
                    className="btn btn-warning "
                    style={{ margin: '5px' }}
                  >
                    Xem
                  </button>
                </td>
              </tr>
            ))}
            {/* <tr>
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
            </tr> */}
          </tbody>
        </table>
      </div>
      {selectedOrder && (
        <>
          <div className="overlay"></div>
          <div
            className="form-popup"
            style={{ width: '800px', height: 'auto' }}
          >
            <div className="">
              <button
                onClick={closeModal}
                style={{ padding: '5px', border: 'none' }}
                className="kkk"
              >
                X
              </button>

              <h2 className="mb-3">
                Chi tiết đơn hàng {selectedOrder[0].order_id}
              </h2>
              <table className={d('table mt-3')}>
                <thead className={d('thead-default')}>
                  <tr>
                    <th>Tên sản phẩm</th>
                    <th>Trọng lượng</th>
                    <th>Số lượng</th>
                    <th>Giá tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedOrder.map((order, index) => (
                    <tr key={index}>
                      <td>{order.product.product_name}</td>
                      <td>{order.product_weight.weight}</td>
                      <td>{order.orderDetail_quantity}</td>
                      <td>{order.product_weight.product_price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Order
