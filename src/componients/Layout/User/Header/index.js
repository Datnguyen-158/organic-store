import styles from './header.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { useNavigate } from 'react-router-dom'
import categoryApi from '../../../../api/categoryApi'
import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../../../context/CartContext'

import {
  faMagnifyingGlass,
  faLocationDot,
  faCartShopping,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons'
import { Value } from 'sass'

const d = classNames.bind(styles)
function Header() {
  const userId = localStorage.getItem('user_id')
  const userName = localStorage.getItem('user_name')
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  console.log(userId)

  const handleLogout = () => {
    localStorage.clear()
    navigate('/Login')
  }

  const handleSearch = (e) => {
    e.preventDefault()

    if (searchTerm.trim() !== '') {
      navigate(`/Product?search=${encodeURIComponent(searchTerm)}`)
    }
  }
  const { cartCount, setCartCount } = useContext(CartContext)
  const [category, setCategory] = useState([])
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await categoryApi.getCategories()
        setCategory(response.data)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }
    fetchCategories()
  }, [])

  return (
    <div className={d('container-fluid headerr')}>
      <div className={d('container h-100')}>
        <div className="row align-items-center h-100  ">
          <div className={d('col-5 Menu d-flex')}>
            <Link to="/">Trang chủ</Link>
            <Link to="/AboutUs">Giới thiệu</Link>
            <Link to="/Product" className={d('product')}>
              <div className={d('updown')}></div>
              Sản phẩm
              <div className="List-product">
                {category.map((cat) => (
                  <Link
                    key={cat.category_id}
                    to={`/Product?category=${cat.category_id}`}
                  >
                    {cat.category_name}
                  </Link>
                ))}
              </div>
            </Link>
            <Link to="/News" className="noibat">
              Tin tức
            </Link>
            <Link to="/Contact" className="noibat">
              Liên hệ
            </Link>
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
            <form onSubmit={handleSearch} className={d('search col-7')}>
              <input
                placeholder="Bạn muốn mua gì"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={d('search-auto')}
              />
              <button type="submit" className=" ">
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
                  <Link to="/Cart" className={d('Group-cart-shoping')}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span className={d('Group-cart-count')}>{cartCount}</span>
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
                      {userId ? (
                        <>
                          <Link to="/Account">{userName}</Link>
                          <Link to="/Login" onClick={handleLogout}>
                            Đăng xuất
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link to="/Login">Đăng nhập</Link>
                          <Link to="/Register">Đăng ký</Link>
                        </>
                      )}
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
