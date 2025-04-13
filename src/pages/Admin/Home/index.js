import styles from './home.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
const d = classNames.bind(styles)
function Home() {
  return (
    <div
      className={d('home-admin')}
      style={{ minHeight: '100vh', background: 'beige' }}
    >
      <div className={d('title-admin')}>Welcome to my admin Khắc Đạt!!!</div>
      <div className="row total-admin">
        <div className="col-4 ">
          <div className="total-price-admin">
            <h6>Tổng tiền</h6>
            <p>158.000đ</p>
          </div>
        </div>
        <div className="col-4 ">
          <div className="total-order-admin">
            <h6>Số đơn hàng</h6>
            <p>6</p>
          </div>
        </div>
        <div className="col-4 ">
          <div className="total-acctount-admin">
            <h6>Số tài khoản</h6>
            <p>5</p>
          </div>
        </div>
      </div>
      <form action="" method="post">
        <div className="row date-admin align-content-center align-items-center">
          <div className="col-3">
            <label for="">Từ ngày : </label>
            <input type="date" name="from_date"></input>
          </div>
          <div className="col-3">
            {' '}
            <label for="">Đến ngày : </label>
            <input type="date" name="from_date"></input>
          </div>
          <div className="col-3">
            <button className="statistic">Thống kê</button>
            <button className="allin">Tất cả</button>
          </div>
        </div>
      </form>
      <h5>biểu đồ thống kê</h5>
    </div>
  )
}

export default Home
