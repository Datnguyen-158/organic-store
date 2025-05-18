import React, { useState, useEffect } from 'react'
// import { useContext } from 'react'
import './checkout.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import receiverApi from '../../../api/receiverApi'
import productApi from '../../../api/productApi'

function Checkout() {
  const [selectedPayment, setSelectedPayment] = useState('')
  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value) // Cập nhật trạng thái khi chọn thanh toán
  }
  const navigate = useNavigate()

  const handleToThanks = () => {
    navigate('/Thanks') // Chuyển đến trang Pay
  }

  // const { fetchCartCount } = useContext(CartContext)
  //Lấy danh sách sản phẩm được chọn từ location.state (được truyền từ trang trước).
  const location = useLocation()
  const selectedProducts = location.state?.selectedProducts || []
  console.log('selectedProducts:', selectedProducts)
  const userId = localStorage.getItem('user_id')
  //Khởi tạo các state: địa chỉ, thông tin khách hàng và sản phẩm.

  const [receiver, setReceiver] = useState([])
  const [product, setProduct] = useState([])
  //tính tổng số sản phẩm được chọn (số lượng dòng trong mảng selectedProducts)
  const totalItems = selectedProducts.length
  //tính tổng tiền của các sản phẩm, chưa bao gồm chi phí khác (như phí vận chuyển).
  const totalPrice = selectedProducts.reduce((total, item) => {
    const price = item?.ProductPrice || item?.product?.ProductPrice || 0
    const qty = item?.Quantity || 0
    return total + price * qty
  }, 0)
  const total = totalPrice + 40000

  const fetchReceiver = async () => {
    try {
      let res
      res = await receiverApi.getShowReceivers(userId)
      setReceiver(res.data)
      console.log(res.data)
    } catch (err) {
      console.error('Lỗi lấy sản phẩm:', err)
    }
  }
  const fetchProducts = async () => {
    const product_ids = selectedProducts.map((item) => item.product_id)
    // console.log('a', selectedProducts)

    const productPromises = product_ids.map((id) =>
      productApi.getShowProductByID(id)
    )
    const productResponses = await Promise.all(productPromises)

    const products = productResponses.map((res) => {
      const matched = selectedProducts.find(
        (p) => p.product_id === res.data.product_id
      )
      return {
        ...res.data,
        ProductPrice: matched?.ProductPrice,
        Quantity: matched?.Quantity,
        Weight: matched?.Weight || 0,
      }
    })

    setProduct(products)
    console.log('product state:', products)
  }
  useEffect(() => {
    fetchReceiver()
    fetchProducts()
  }, [userId])

  return (
    <>
      <div className="container ">
        <div className="row mt-5">
          {receiver
            .filter((item) => item.receiver_type === 1)
            .map((receiver) => (
              <div key={receiver.receiver_id} className="col-md-4 checkout">
                <h2>Thông tin nhận hàng</h2>
                <input
                  type="text"
                  placeholder="Họ tên"
                  value={receiver.receiver_name}
                />
                <input
                  type="text"
                  placeholder="Số điện thoại "
                  value={receiver.receiver_phone}
                />
                <input
                  type="text"
                  placeholder="Địa chỉ"
                  value={receiver.receiver_desc}
                />
                <select value={receiver.receiver_city}>
                  <option>{receiver.receiver_city}</option>
                </select>
                <select value={receiver.receiver_district}>
                  <option>{receiver.receiver_district}</option>
                </select>
                <select value={receiver.receiver_commune}>
                  <option>{receiver.receiver_commune}</option>
                </select>
                <textarea placeholder="Ghi chú"></textarea>
              </div>
            ))}
          <div className="col-md-4">
            <h2>Vận chuyển</h2>
            <div
              className="d-flex align-items-center justify-content-between"
              style={{
                border: '1px solid #ddd',
                padding: '8px',
                borderRadius: '5px',
              }}
            >
              <p className="m-0">Giao hàng tận nơi</p>
              <p className="m-0">40.000đ</p>
            </div>
            <h2 className="mt-4">Thanh toán</h2>
            <div
              style={{
                border: '1px solid #a4a4a4',
                fontSize: '1.6rem',
                borderRadius: '5px',
              }}
            >
              <div
                className="d-flex align-items-center p-2 "
                style={{ borderTop: '1px solid #a4a4a4' }}
              >
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={selectedPayment === 'cod'}
                  onChange={handlePaymentChange}
                />
                <label>
                  <img
                    style={{ margin: '0 12px' }}
                    src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=6"
                  />
                  Thanh toán khi nhận hàng
                </label>
              </div>
              {selectedPayment === 'cod' && (
                <div className="text-center p-3 ">
                  Chỉ áp dụng đơn hàng nhỏ hơn 3.000.000đ
                </div>
              )}
            </div>
          </div>
          <div className="col-md-4">
            <h2>
              <span>Đơn hàng</span>
              <span> ({totalItems} sản phẩm)</span>
            </h2>

            {selectedProducts.map((item, index) => (
              <div
                key={index}
                className="row align-items-center mt-3 pb-3"
                style={{ borderBottom: '1px solid #fff' }}
              >
                <div className="col-md-9 d-flex align-items-center position-relative mt-2">
                  <img
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '5px',
                      border: '1px solid #ddd',
                    }}
                    src={item.product?.product_img || item.product_img}
                    alt={item.product?.product_name || item.product_name}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      width: '25px',
                      height: '25px',
                      borderRadius: '50%',
                      background: '#d71920',
                      textAlign: 'center',
                      top: '-15%',
                      left: '15%',
                      color: '#fff',
                    }}
                  >
                    {item.Quantity}
                  </div>
                  <p style={{ marginLeft: '24px' }}>
                    {item.product?.product_name || item.product_name}
                    {'   '}
                    {item.Weight}
                  </p>
                </div>
                <p className="col-md-3 text-end">{item.ProductPrice}</p>
              </div>
            ))}
            <div className="mt-2" style={{ borderBottom: '1px solid #fff' }}>
              <div className="d-flex align-items-center justify-content-between ">
                <p>Tạm tính</p>
                <p>{totalPrice.toLocaleString('vi-VN')}₫</p>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p>Phí vận chuyển</p>
                <p>40.000đ</p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-2">
              <p>Tổng cộng</p>
              <p style={{ color: '#d71920', fontSize: '24px' }}>
                {total.toLocaleString('vi-VN')}đ
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-2">
              <Link to="/Cart" style={{ color: '#d71920' }}>
                Quay về giỏ hàng
              </Link>
              <button
                onClick={handleToThanks}
                style={{
                  width: '100px',
                  height: '40px',
                  borderRadius: '5px',
                  border: 'none',
                  background: '#d71920',
                  color: '#fff',
                }}
              >
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout
