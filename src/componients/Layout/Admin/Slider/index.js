import styles from './slider.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouseChimney,
  faUser,
  faLayerGroup,
  faCartShopping,
  faLocationDot,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons'
import { faDocker } from '@fortawesome/free-brands-svg-icons'
const d = classNames.bind(styles)
function Slider() {
  return (
    <div className={d('slider-admin')}>
      <div className="logo-img d-flex justify-content-between align-items-center ">
        <img
          src="https://png.pngtree.com/png-vector/20230313/ourlarge/pngtree-admin-of-female-job-vacancies-vector-png-image_6646511.png"
          alt=""
        ></img>
        <p>Admin</p>
      </div>
      <span>navigation</span>
      <ul style={{ marginTop: '20px' }}>
        <li>
          <FontAwesomeIcon icon={faHouseChimney} />
          <Link to="/Admin/Home">DashBoard</Link>
        </li>{' '}
        <li>
          <FontAwesomeIcon icon={faUser} />
          <Link to="/Admin/AdAccount">Tài khoản</Link>
        </li>{' '}
        <li>
          <FontAwesomeIcon icon={faLayerGroup} />
          <Link to="/Admin/Category">Danh mục</Link>
        </li>{' '}
        <li>
          <FontAwesomeIcon icon={faDocker} />
          <Link to="/Admin/Product">Sản phẩm</Link>
        </li>{' '}
        <li>
          <FontAwesomeIcon icon={faLocationDot} />
          <Link to="/Admin/Shipping">Địa chỉ nhận hàng</Link>
        </li>{' '}
        <li>
          <FontAwesomeIcon icon={faNewspaper} />
          <Link to="/Admin/News">Tin tức</Link>
        </li>{' '}
        <li>
          <FontAwesomeIcon icon={faCartShopping} />
          <Link to="/Admin/Order">Đơn hàng</Link>
        </li>
      </ul>
    </div>
  )
}

export default Slider
