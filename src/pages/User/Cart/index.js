import classNames from 'classnames/bind'
import styles from './cart.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
const d = classNames.bind(styles)

function Cart() {
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
              ( <span className={d('count_item')}>2</span> sản phẩm)
            </span>
          </h1>
          <div className={d('cart-page')}>
            <form action="" method="post">
              <div className={d('page-cart')}>
                <div className={d('page-cart-1')}>
                  <div className={d('cart-tbody')}>
                    <div className="row align-items-center  ">
                      <div className={d('col-2 cart-tbody-img')}>
                        <Link to="./">
                          <img
                            src="	https://bizweb.dktcdn.net/thumb/medium/100/431/449/products/sp22.jpg"
                            alt=""
                          ></img>
                        </Link>
                      </div>
                      <div className={d('col-10')}>
                        <div className={d('box-info')}>
                          <p className={d('name')}>
                            <Link to="./">Ổi lê ruột đỏ - 1kg</Link>
                          </p>
                          <p className={d('c-brands')}>
                            Thương hiệu: Đang cập nhật
                          </p>
                          <p className={d('action')}>
                            <Link title="Xóa">Xóa</Link>
                          </p>
                        </div>
                        <div className={d('box-price')}>
                          <p>40.000đ</p>
                        </div>
                        <div className={d('quantity-block')}>
                          <div className={d('input-group-btn')}>
                            <button className={d('congs')}>
                              <FontAwesomeIcon icon={faPlus} />
                            </button>

                            <input type="text" value="2"></input>
                            <button className={d('trus')}>
                              <FontAwesomeIcon icon={faMinus} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center shopping-cart-item">
                      <div className={d('col-2 cart-tbody-img')}>
                        <Link to="./">
                          <img
                            src="	https://bizweb.dktcdn.net/thumb/medium/100/431/449/products/sp22.jpg"
                            alt=""
                          ></img>
                        </Link>
                      </div>
                      <div className={d('col-10')}>
                        <div className={d('box-info')}>
                          <p className={d('name')}>
                            <Link to="./">Ổi lê ruột đỏ - 1kg</Link>
                          </p>
                          <p className={d('c-brands')}>
                            Thương hiệu: Đang cập nhật
                          </p>
                          <p className={d('action')}>
                            <Link title="Xóa">Xóa</Link>
                          </p>
                        </div>
                        <div className={d('box-price')}>
                          <p>40.000đ</p>
                        </div>
                        <div className={d('quantity-block')}>
                          <div className={d('input-group-btn')}>
                            <button className={d('congs')}>
                              <FontAwesomeIcon icon={faPlus} />
                            </button>

                            <input type="text" value="2"></input>
                            <button className={d('trus')}>
                              <FontAwesomeIcon icon={faMinus} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>{' '}
                    <div className="row align-items-center shopping-cart-item">
                      <div className={d('col-2 cart-tbody-img')}>
                        <Link to="./">
                          <img
                            src="	https://bizweb.dktcdn.net/thumb/medium/100/431/449/products/sp22.jpg"
                            alt=""
                          ></img>
                        </Link>
                      </div>
                      <div className={d('col-10')}>
                        <div className={d('box-info')}>
                          <p className={d('name')}>
                            <Link to="./">Ổi lê ruột đỏ - 1kg</Link>
                          </p>
                          <p className={d('c-brands')}>
                            Thương hiệu: Đang cập nhật
                          </p>
                          <p className={d('action')}>
                            <Link title="Xóa">Xóa</Link>
                          </p>
                        </div>
                        <div className={d('box-price')}>
                          <p>40.000đ</p>
                        </div>
                        <div className={d('quantity-block')}>
                          <div className={d('input-group-btn')}>
                            <button className={d('congs')}>
                              <FontAwesomeIcon icon={faPlus} />
                            </button>

                            <input type="text" value="2"></input>
                            <button className={d('trus')}>
                              <FontAwesomeIcon icon={faMinus} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={d('page-cart-2')}>
                  <div className="row ">
                    <div className="col-6">
                      <Link to="./">Tiếp tục mua hàng</Link>
                    </div>
                    <div className="col-6">
                      <div className={d('each-row')}>
                        <div className={d('box-style ')}>
                          <div
                            className={d(
                              'list-info d-flex justify-content-between '
                            )}
                          >
                            <p
                              style={{ color: '#323232', fontWeight: 'normal' }}
                            >
                              Tạm tính
                            </p>
                            <strong style={{ fontWeight: '700' }}>
                              80.000đ
                            </strong>
                          </div>
                        </div>
                        <div
                          className={d(
                            'box-style d-flex justify-content-between'
                          )}
                        >
                          <span>Thành tiền</span>
                          <div className={d('amount')}>
                            <strong>80.000đ</strong>
                          </div>
                        </div>
                        <button>Thanh toán ngay</button>
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
