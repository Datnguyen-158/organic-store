import styles from './header.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {
  faMagnifyingGlass,
  faLocationDot,
  faCartShopping,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons'

const d = classNames.bind(styles)
function Header() {
  return (
    <div className={d('container-fluid headerr')}>
      <div className={d('container h-100')}>
        <div className="row align-items-center h-100  ">
          <div className={d('col-5 Menu d-flex')}>
            <Link to="/">Trang chủ</Link>
            <Link to="/AboutUs">Giới thiệu</Link>
            <Link to="/product" className={d('product')}>
              <div className={d('updown')}></div>
              Sản phẩm
              <div className="List-product">
                <Link to="/">Trái cây</Link>
                <Link to="/">Rau củ</Link>
                <Link to="/">Hải sản</Link>
                <Link to="/">Thịt tươi</Link>
                <Link to="/">Bơ sữa</Link>
                <Link to="/">Đồ ăn đóng hộp</Link>
                <Link to="/">Đồ uống</Link>
              </div>
            </Link>
            <Link to="/News">Tin tức</Link>
            <Link to="/Contact">Liên hệ</Link>
          </div>
          <div className={d('col-2')}>
            <Link to="/">
              <img
                className={d('logo w-100 h-100 ')}
                src="https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/logo.png?1742273150136"
                alt=""
              ></img>
            </Link>
          </div>
          <div className={d('col-5 row header-right  align-items-center')}>
            <div className="col-1"></div>
            <form className={d('search col-7')}>
              <input
                placeholder="Bạn muốn mua gì"
                type="text"
                className={d('search-auto')}
              ></input>
              <button className=" ">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>

            <div className={d('header-page-link col-4')}>
              <ul
                className={d(
                  'header-group m-0 d-flex align-items-center justify-content-between'
                )}
              >
                <li className={d('group-location')}>
                  <Link to="./Contact">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </Link>
                </li>
                <li className={d('Group-cart')}>
                  <Link to="./Cart" className={d('Group-cart-shoping')}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span className={d('Group-cart-count')}>0</span>
                  </Link>
                </li>
                <li className={d('Group-user ')}>
                  <Link
                    to="/"
                    className={d('user-next')}
                    title="Tai khoan cua ban"
                  >
                    <FontAwesomeIcon
                      icon={faUserTie}
                      style={{ color: 'white' }}
                    />

                    <div className={d('user-option')}>
                      <div className="arrow-up"></div>
                      {/* <Link to="/Login">Đăng nhập</Link> */}
                      {/* <Link to="/Register">Đăng ký</Link> */}
                      <Link to="./Account">Tài khoản</Link>
                      <Link to="./Login">Đăng xuất</Link>
                      <Link to="./Admin/Home">Đăng nhập admin</Link>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
