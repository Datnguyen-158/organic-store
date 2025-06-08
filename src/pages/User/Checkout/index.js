import React, { useState, useEffect } from 'react'
// import { useContext } from 'react'
import './checkout.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import { useLocation } from 'react-router-dom'
import receiverApi from '../../../api/receiverApi'
import productApi from '../../../api/productApi'
import orderApi from '../../../api/order'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import cartApi from '../../../api/cartApi'
import AddAddress from '../Address/AddAddress'
function Checkout() {
  const { fetchCartCount } = useContext(CartContext)
  const [receiver, setReceiver] = useState([])
  const [selectedPayment, setSelectedPayment] = useState('')
  const [showAddAddressForm, setShowAddAddressForm] = useState(false)
  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value) // Cập nhật trạng thái khi chọn thanh toán
  }
  const navigate = useNavigate()

  // const { fetchCartCount } = useContext(CartContext)
  //Lấy danh sách sản phẩm được chọn từ location.state (được truyền từ trang trước).
  const location = useLocation()
  const selectedProducts = location.state?.selectedProducts || []
  console.log('selectedProducts:', selectedProducts)
  const userId = localStorage.getItem('user_id')
  //Khởi tạo các state: địa chỉ, thông tin khách hàng và sản phẩm.

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
    } catch (err) {
      console.error('Lỗi lấy sản phẩm:', err)
      // Nếu không có địa chỉ nào, có thể set receiver rỗng để hiển thị thông báo
      setReceiver([])
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

  // Hàm xử lý khi thêm địa chỉ thành công
  const handleAddAddressSuccess = async () => {
    await fetchReceiver() // Gọi lại API để cập nhật danh sách địa chỉ
    setShowAddAddressForm(false) // Đóng form sau khi thêm thành công
    // Tìm địa chỉ vừa được thêm và đặt làm mặc định nếu đây là địa chỉ đầu tiên
    if (receiver.length === 0) {
      // Nếu ban đầu không có địa chỉ nào
      const updatedReceivers = await receiverApi.getShowReceivers(userId)
      const newAddress = updatedReceivers.data.find(
        (item) => item.receiver_type === 0
      ) // Tìm địa chỉ mới thêm (mặc định là type 0)
      if (newAddress) {
        await receiverApi.setDefaultAddress(userId, newAddress.receiver_id)
        await fetchReceiver() // Cập nhật lại lần nữa để hiển thị địa chỉ mặc định
      }
    }
  }
  const closeAddAddressForm = () => {
    setShowAddAddressForm(false)
  }
  const cartid = selectedProducts.map(item => item.cart_id).filter(Boolean);
  console.log("cartIds:", cartid);
  const payload = {
    receiver_id: receiver.find((item) => item.receiver_type === 1)?.receiver_id,
    // receiver_id: receiver[0]?.receiver_id,
    user_id: receiver[0]?.user_id,
    TotalPrice: total,
    order_date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    items: selectedProducts.map((item) => ({
      Quantity: item.Quantity,
      product_weights_id: item?.product_weights_id,
      product_id: item?.product_id,
    })),
    payment_method: selectedPayment,

  }
  console.log(payload)

  // const handleToThanks = async () => {
  //   try {
  //     const res = await orderApi.addOrder(payload)
  //     console.log('Đặt hàng thành công:', payload)

  //     // xóa sản phẩm sau khi đặt hàng thành công

  //     await Promise.all(
  //       selectedProducts.map((item) => {
  //         return item.cart_id ? cartApi.removetocart(item.cart_id) : null
  //       })
  //     )
  //     fetchCartCount() // Cập nhật lại số lượng giỏ hàng
  //     // Điều hướng sang trang cảm ơn
  //     navigate('/Thanks')
  //   } catch (err) {
  //     if (err.response?.data?.errors) {
  //       console.log('Lỗi validate:', err.response.data.errors)
  //       alert(JSON.stringify(err.response.data.errors))
  //     } else {
  //       console.error('Lỗi không xác định:', err)
  //     }
  //   }
  // }
  // console.log('receiver', receiver)


  const handlePayMomo = async () => {
    try {

      const res = await orderApi.getpayUrl(total, cartid, payload);
      console.log("payUrl:", res.payUrl);
      window.location.href = res.payUrl; // Chuyển hướng đến trang thanh toán MoMo
    } catch (error) {
      console.error("Lỗi khi lấy payUrl:", error.response?.data || error.message);
    }
  };

  const handlePaymentCod = async () => {
    try {
      const res = await orderApi.addOrder(payload);
      console.log("Đặt hàng thành công:", payload);
      // xóa sản phẩm sau khi đặt hàng thành công
      await Promise.all(
        selectedProducts.map(item =>
          item.cart_id ? cartApi.removetocart(item.cart_id) : null
        )
      );
      fetchCartCount(); // Cập nhật lại số lượng giỏ hàng
      // Điều hướng sang trang cảm ơn
      // sendEmailNotification();
      navigate('/Thanks');
    } catch (err) {
      if (err.response?.data?.errors) {
        console.log("Lỗi validate:", err.response.data.errors);
        alert(JSON.stringify(err.response.data.errors));
      } else {
        console.error("Lỗi không xác định:", err);
      }
    }
  }

  const handleToThanks = async () => {
    // Kiểm tra xem có địa chỉ mặc định hay không
    if (!payload.receiver_id) {
      alert('Vui lòng thêm địa chỉ nhận hàng mặc định trước khi đặt hàng.')
      return
    }
    if (selectedPayment === 'momo') {
      await handlePayMomo();
    } else if (selectedPayment === 'cod') {
      await handlePaymentCod();
    } else {
      alert('Vui lòng chọn phương thức thanh toán');
    }
  }

  const defaultReceiver = receiver.find((item) => item.receiver_type === 1)

  return (
    <>
      <div className="container ">
        <div className="row mt-5">
          {defaultReceiver ? ( // Kiểm tra nếu có địa chỉ mặc định
            // .filter((item) => item.receiver_type === 1)
            // .map((receiver) => (
            <div
              key={defaultReceiver.receiver_id}
              className="col-md-4 checkout"
            >
              <h2>Thông tin nhận hàng</h2>
              <input
                type="text"
                placeholder="Họ tên"
                value={defaultReceiver.receiver_name}
              />
              <input
                type="text"
                placeholder="Số điện thoại "
                value={defaultReceiver.receiver_phone}
              />
              <input
                type="text"
                placeholder="Địa chỉ"
                value={defaultReceiver.receiver_desc}
              />
              <select value={defaultReceiver.receiver_city}>
                <option>{defaultReceiver.receiver_city}</option>
              </select>
              <select value={defaultReceiver.receiver_district}>
                <option>{defaultReceiver.receiver_district}</option>
              </select>
              <select value={defaultReceiver.receiver_commune}>
                <option>{defaultReceiver.receiver_commune}</option>
              </select>
              <textarea placeholder="Ghi chú"></textarea>
            </div>
          ) : (
            <div className="col-md-4 checkout">
              <h2>Thông tin nhận hàng</h2>
              <div
                style={{
                  border: '1px dashed #ccc',
                  padding: '20px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  minHeight: '280px', // Đảm bảo chiều cao đủ lớn
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onClick={() => setShowAddAddressForm(true)}
              >
                <h3>Thêm địa chỉ</h3>
                <p>Vui lòng thêm địa chỉ nhận hàng để tiếp tục!</p>
              </div>
            </div>
          )}
          {/* Form thêm địa chỉ, chỉ hiển thị khi showAddAddressForm là true */}
          {showAddAddressForm && (
            <>
              <div className="overlay"></div> {/* Lớp overlay */}
              <AddAddress
                onClose={closeAddAddressForm}
                onSuccess={handleAddAddressSuccess}
              />
            </>
          )}
          {/* // Nếu không có địa chỉ mặc định, hiển thị thông báo "Thêm địa chỉ */}
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
              {/* tt momo */}
              <div className="d-flex align-items-center p-2" style={{ borderBottom: '1px solid #a4a4a4', borderTop: '1px solid #a4a4a4' }}>
                <input
                  type="radio"
                  name="payment"
                  value="momo"
                  checked={selectedPayment === "momo"}
                  onChange={handlePaymentChange}
                />
                <label ><img style={{ margin: '0 12px', width: '50px' }} src="https://developers.momo.vn/v3/vi/assets/images/icon-52bd5808cecdb1970e1aeec3c31a3ee1.png" />Thanh toán bằng ví Momo</label>
              </div>
              {selectedPayment === 'momo' && (
                <div className="text-center p-3 ">
                  Chỉ áp dụng đơn hàng nhỏ hơn 50.000.000đ
                </div>
              )}
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
              {/* {selectedPayment === 'cod' && (
                <div className="text-center p-3 ">
                  Chỉ áp dụng đơn hàng nhỏ hơn 3.000.000đ
                </div>
              )} */}

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
