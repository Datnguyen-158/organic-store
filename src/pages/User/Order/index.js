import classNames from 'classnames/bind'
import styles from './order.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import receiverApi from '../../../api/receiverApi'
import orderApi from '../../../api/order'
import { useEffect } from 'react'
const d = classNames.bind(styles)

function Order() {
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [receiver, setReceiver] = useState([])

  const openModal = (Order_id) => {
    orderApi
      .getOrderItemByIdOrder(Order_id)

      .then((response) => {
        setSelectedOrder(response.data)
        // console.log(response.data)
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
    receiverApi
      .getShowOrderbyId(userId)
      .then((response) => {
        setOrders(response.data)
        console.log('reponse:r', response.data)
      })
      .catch((error) => {
        console.error(
          'Có lỗi khi lấy đơn hàng ' + error + '-' + error.response.data.message
        )
      })
  }
  const getReceiver = () => {
    receiverApi
      .getByUser(userId)
      .then((response) => {
        setReceiver(response.data)
        console.log('Response data:', response.data)
      })
      .catch((error) => {
        console.error(
          'Có lỗi khi lấy khách hàng ' +
            error +
            '-' +
            error.response.data.message
        )
      })
  }
  useEffect(() => {
    getOrder()
    getReceiver()
  }, [userId])
  return (
    <div>
      <section className={d('bread_crumb')}>
        <div className="container ">
          <div className={d('bread_crumb_head  align-content-center ')}>
            <h1>Trang đơn hàng</h1>
            <div className={d('link_bread_crumb ')}>
              <Link to="./Home">Trang chủ </Link>{' '}
              <li>
                <Link to="../Account">
                  <span>Trang tài khoản</span>
                </Link>
              </li>
              <span style={{ fontWeight: 'bolder' }}> Trang đơn hàng</span>
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
                  {/* Xin chào, */}
                  {/* <span style={{ fontWeight: '600' }}>
                    {receiver[0]?.receiver_name}
                  </span> */}
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
                    <Link to="../Address">
                      Sổ địa chỉ (
                      {Array.isArray(receiver) ? receiver.length : 0})
                    </Link>
                  </li>
                </span>
              </div>
            </div>
            <div className={d('col-9')}>
              <h1 style={{ marginBottom: '20px', textAlign: 'left' }}>
                Đơn hàng của bạn
              </h1>
              <div className="col-12">
                <div className={d('my-order')}>
                  <table className={d('table')}>
                    <thead className={d('thead-default')}>
                      <tr>
                        <th>Đơn hàng</th>
                        <th>Ngày</th>
                        <th>SĐT</th>
                        <th>Địa chỉ</th>
                        <th>TT đơn hàng</th>
                        <th>Trạng thái đơn hàng</th>
                        <th>Chi tiết</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order, index) => (
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
                          <td>
                            {order.order_status === 0 && (
                              <span className="badge bg-warning text-dark">
                                Chờ xác nhận
                              </span>
                            )}
                            {order.order_status === 1 && (
                              <span className="badge bg-success">
                                Đã giao thành công
                              </span>
                            )}
                            {order.order_status === 2 && (
                              <span className="badge bg-secondary">
                                Đơn hàng đã bị hủy
                              </span>
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
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
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
      </section>
    </div>
  )
}

export default Order
// import classNames from 'classnames/bind'
// import styles from './order.scss'
// import { Link } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import receiverApi from '../../../api/receiverApi'
// import orderApi from '../../../api/order'
// import { Modal } from 'bootstrap'
// const d = classNames.bind(styles)

// function Order() {
//   const [selectedOrder, setSelectedOrder] = useState(null)
//   const [orderItems, setOrderItems] = useState([])

//   const [orders, setOrders] = useState([])
//   const userId = localStorage.getItem('user_id')

//   const openModal = (orderId) => {
//     orderApi
//       .getOrderItemByIdOrder(orderId)
//       .then((response) => {
//         setSelectedOrder(response.data.order)
//         setOrderItems(response.data.items)
//         const modalElement = document.getElementById('orderDetailModal')
//         const modal = new Modal(modalElement)
//         modal.show()
//       })
//       .catch((error) => {
//         console.error('Lỗi khi gọi API:', error)
//       })
//   }

//   const getOrder = () => {
//     receiverApi
//       .getShowOrderbyId(userId)
//       .then((response) => {
//         setOrders(response.data)
//       })
//       .catch((error) => {
//         console.error('Có lỗi khi lấy đơn hàng: ', error)
//       })
//   }

//   useEffect(() => {
//     getOrder()
//   }, [userId])

//   return (
//     <div className="container py-4">
//       <h2>Đơn hàng của bạn</h2>
//       <table className="table table-bordered mt-3">
//         <thead className="table-light">
//           <tr>
//             <th>Mã đơn</th>
//             <th>Ngày</th>
//             <th>SĐT</th>
//             <th>Địa chỉ</th>
//             <th>Tổng tiền</th>
//             <th>Trạng thái</th>
//             <th>Chi tiết</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order, index) => (
//             <tr key={index}>
//               <td>{order.order_id}</td>
//               <td>{order.order_date}</td>
//               <td>{order.receiver.receiver_phone}</td>
//               <td>
//                 {order.receiver.receiver_city},{' '}
//                 {order.receiver.receiver_district},{' '}
//                 {order.receiver.receiver_commune},{' '}
//                 {order.receiver.receiver_desc}
//               </td>
//               <td>{order.TotalPrice}</td>
//               <td>
//                 {order.order_status === 1 ? 'Đã xác nhận' : 'Chưa xác nhận'}
//               </td>
//               <td>
//                 <button
//                   className="btn btn-primary btn-sm"
//                   onClick={() => openModal(order.order_id)}
//                 >
//                   Xem chi tiết
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Modal Bootstrap (thuần className) */}
//       <div
//         className="modal fade"
//         id="orderDetailModal"
//         tabIndex="-1"
//         aria-labelledby="orderDetailModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-dialog-centered modal-lg">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="orderDetailModalLabel">
//                 Chi tiết đơn hàng #{selectedOrder?.order_id}
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               {selectedOrder && (
//                 <>
//                   <p>
//                     <strong>Ngày đặt:</strong> {selectedOrder.order_date}
//                   </p>
//                   <p>
//                     <strong>Trạng thái:</strong>{' '}
//                     {selectedOrder.order_status === 1
//                       ? 'Đã xác nhận'
//                       : 'Chưa xác nhận'}
//                   </p>
//                   <p>
//                     <strong>Người nhận:</strong>{' '}
//                     {selectedOrder.receiver?.receiver_name}
//                   </p>
//                   <p>
//                     <strong>Địa chỉ:</strong>{' '}
//                     {selectedOrder.receiver?.receiver_city},{' '}
//                     {selectedOrder.receiver?.receiver_district},{' '}
//                     {selectedOrder.receiver?.receiver_commune},{' '}
//                     {selectedOrder.receiver?.receiver_desc}
//                   </p>

//                   <h5 className="mt-3">Danh sách sản phẩm:</h5>
//                   <ul className="list-group">
//                     {orderItems.map((item, idx) => (
//                       <li className="list-group-item" key={idx}>
//                         Sản phẩm #{item.product_id} | SL:{' '}
//                         {item.orderDetail_quantity}
//                       </li>
//                     ))}
//                   </ul>
//                 </>
//               )}
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Đóng
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Order
