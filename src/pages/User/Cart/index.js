import classNames from 'classnames/bind'
import styles from './cart.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cartApi from '../../../api/cartApi'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../../context/CartContext'
const d = classNames.bind(styles)

function Cart() {
  const navigate = useNavigate()
  const { fetchCartCount } = useContext(CartContext)
  const userId = localStorage.getItem('user_id')
  const [cart, setCart] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const handletocheckout = () => {
    if (cart && cart.length > 0) {
      const selectedProducts = cart.map((item) => ({
        product_id: item.product.product_id,
        product_name: item.product.product_name,
        product_img: item.product.product_img,
        ProductPrice: item.product_weights.product_price,
        Quantity: item.cart_quantity,
        cart_id: item.cart_id,
        product_weights_id: item.product_weights.product_weights_id,
        product: item.product,
      }))
      navigate('/Checkout', { state: { selectedProducts } })
    } else {
      alert('Giỏ hàng trống!')
    }
  }

  const fetchCart = async () => {
    try {
      let res
      res = await cartApi.getCart(userId)
      setCart(res.data)
      console.log('Dữ liệu cart từ API:', res.data)
      const count = res.data.length
      setTotalItems(count)
    } catch (err) {
      console.error('Lỗi lấy sản phẩm:', err)
    }
  }
  const handleIncrease = async (cartId, currentQty) => {
    const newQty = currentQty + 1
    try {
      await cartApi.updateQuantitytocart(cartId, newQty)
      fetchCart() // Cập nhật lại giỏ hàng từ server
    } catch (err) {
      console.error('Lỗi khi tăng số lượng:', err)
    }
  }

  const handleDecrease = async (cartId, currentQty) => {
    if (currentQty <= 1) return
    const newQty = currentQty - 1
    try {
      await cartApi.updateQuantitytocart(cartId, newQty)
      fetchCart() // Cập nhật lại giỏ hàng
    } catch (err) {
      console.error('Lỗi khi giảm số lượng:', err)
    }
  }
  function handledelete(cartid) {
    cartApi
      .removetocart(cartid)
      .then(() => {
        console.log('Đã xóa sản phẩm thành công')
        return fetchCart()
      })
      .catch((error) => {
        console.error('Lỗi khi xóa', error)
      })
    fetchCartCount()
  }
  const totalAmount = cart.reduce(
    (total, item) =>
      total + item.product_weights.product_price * item.cart_quantity,
    0
  )

  useEffect(() => {
    fetchCart()
  }, [userId])

  return (
    <div>
      <section className={d('bread_crumb')}>
        <div className="container ">
          <div className={d('bread_crumb_head  align-content-center ')}>
            <h1>Giỏ hàng</h1>
            <div className={d('link_bread_crumb ')}>
              <Link to="./Home">Trang chủ </Link>
              <li>
                <span to="./">
                  <span>Giỏ hàng</span>
                </span>
              </li>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className={d('shopping-cart')}>
          <h1 className={d('lbl-shopping-cart')}>
            Giỏ hàng{' '}
            <span>
              ( <span className={d('count_item')}>{totalItems}</span> sản phẩm)
            </span>
          </h1>
          <div className={d('cart-page')}>
            <form action="" method="post">
              <div className={d('page-cart')}>
                <div className={d('page-cart-1')}>
                  <div className={d('cart-tbody')}>
                    {cart?.map((item, index) => (
                      <div key={index} className="row align-items-center  ">
                        <div className={d('col-2 cart-tbody-img')}>
                          <Link to="./">
                            <img
                              src={item.product.product_img}
                              alt={item.product.product_name}
                            ></img>
                          </Link>
                        </div>
                        <div className={d('col-10')}>
                          <div className="row">
                            <div className="col-3">
                              {' '}
                              <div className={d('box-info')}>
                                <p className={d('name')}>
                                  <Link to="./">
                                    {item.product.product_name}
                                  </Link>
                                </p>
                                <p className={d('c-brands')}>
                                  {item.product_weights.weight}
                                </p>
                                <p
                                  style={{
                                    fontSize: '1.2rem',
                                    cursor: 'pointer',
                                  }}
                                  className={d('action')}
                                  onClick={() => handledelete(item.cart_id)}
                                >
                                  Xóa
                                </p>
                              </div>
                            </div>
                            <div className="col-3">
                              {' '}
                              <div className={d('box-price')}>
                                <p>
                                  {Number(
                                    item.product_weights.product_price
                                  ).toLocaleString('vi-VN')}{' '}
                                  đ
                                </p>
                              </div>
                            </div>
                            <div className="col-3">
                              {' '}
                              <div className={d('quantity-block')}>
                                <div className={d('input-group-btn')}>
                                  <button
                                    type="button"
                                    className={d('congs')}
                                    onClick={() =>
                                      handleIncrease(
                                        item.cart_id,
                                        item.cart_quantity
                                      )
                                    }
                                  >
                                    <FontAwesomeIcon icon={faPlus} />
                                  </button>

                                  <input
                                    style={{
                                      width: '50px',
                                      textAlign: 'center',
                                    }}
                                    type="number"
                                    value={item.cart_quantity}
                                  />
                                  <button
                                    type="button"
                                    className={d('trus')}
                                    onClick={() =>
                                      handleDecrease(
                                        item.cart_id,
                                        item.cart_quantity
                                      )
                                    }
                                  >
                                    <FontAwesomeIcon icon={faMinus} />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {' '}
                              <div className={d('box-style ')}>
                                <div className={d('list-info  ')}>
                                  {/* <p
                                style={{
                                  color: '#323232',
                                  fontWeight: 'normal',
                                }}
                              >
                                Tạm tính
                              </p> */}
                                  <strong style={{ fontWeight: '700' }}>
                                    {Number(
                                      item.product_weights.product_price *
                                        item.cart_quantity
                                    ).toLocaleString('vi-VN')}
                                    đ
                                  </strong>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={d('page-cart-2')}>
                  <div className="row ">
                    <div className="col-6">
                      <Link to="/Product">Tiếp tục mua hàng</Link>
                    </div>
                    <div className="col-6">
                      <div className={d('each-row')}>
                        <div
                          className={d(
                            'box-style d-flex justify-content-between'
                          )}
                        >
                          <span>Thành tiền</span>
                          <div className={d('amount')}>
                            <strong>
                              {totalAmount.toLocaleString('vi-VN')} đ
                            </strong>
                          </div>
                        </div>
                        <span onClick={onscroll}>
                          <button type="button" onClick={handletocheckout}>
                            Thanh toán ngay
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
