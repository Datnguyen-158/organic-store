import styles from './footer.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {
  faFacebookSquare,
  faYoutube,
  faInstagram,
  faXTwitter,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons'

const d = classNames.bind(styles)
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row ">
          <div className={d('col-4 receive-info   ')}>
            <h1>ĐĂNG KÝ NHẬN THÔNG TIN</h1>
            <p>
              Đăng ký nhận bản tin để nhận ưu đãi đặc biệt về sản phẩm ND Fresh
            </p>
            <div className={d('enter-regis')}>
              <input placeholder="Nhập email của bạn"></input>
              <Link>
                <button>Đăng ký</button>
              </Link>
            </div>
          </div>
          <div className="col-4 introduc  ">
            <Link to="/">
              <img
                className={d('logo-footer')}
                src="https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/logo.png?1742273150136"
                alt=""
              ></img>
            </Link>
            <p>
              Website thương mại điện tử ND Fresh do ND Group là đơn vị chủ
              quản, chịu trách nhiệm và thực hiện các giao dịch liên quan mua
              sắm sản phẩm hàng hoá tiêu dùng thiết yếu.
            </p>
            <img
              className=""
              src="https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/img-footer.png?1742273150136"
              alt=""
            ></img>
          </div>
          <div className={'col-4 footer-parent'}>
            <div className={d('footer-top')}>
              <h1>LIÊN HỆ VỚI CHÚNG TÔI</h1>
              <ul className={d('address')}>
                <li>
                  Địa chỉ: <span>Phú Lương, Hà Đông, Hà Nội</span>
                </li>
                <li>
                  Điện thoại: <span>0333158971</span>
                </li>
                <li>
                  Email: <span>DatNguyen158203@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className={d('information')}>
              <Link to="/">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faTiktok} />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faXTwitter} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
