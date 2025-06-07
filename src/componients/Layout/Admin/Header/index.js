import styles from './header.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const d = classNames.bind(styles)
function Header() {
  const [showLogout, setShowLogout] = useState(false)

  const toggleLogout = () => {
    setShowLogout(!showLogout)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="header-admin ">
          <div className="col-8">
            <div className={d(' logo-admin ')}>
              <Link to="/">
                <img
                  src="https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/logo.png?1742273150136"
                  alt=""
                ></img>
              </Link>
            </div>
          </div>
          <div className="col-3">
            <div className="logo-imgs d-flex  align-items-center  ">
              <img
                onClick={toggleLogout}
                src="https://png.pngtree.com/png-vector/20230313/ourlarge/pngtree-admin-of-female-job-vacancies-vector-png-image_6646511.png"
                alt=""
              ></img>
              <p>Admin</p>
              <button className="arrow-btn">
                {/* <FontAwesomeIcon icon={faChevronDown} /> */}
              </button>
            </div>
            {showLogout && (
              <div className="logout-option">
                <Link to="/Login">
                  <p style={{ color: '#333' }}>Đăng xuất</p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
