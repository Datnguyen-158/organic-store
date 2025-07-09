import styles from './home.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import statistical from '../../../api/statisticalApi'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from 'recharts'
const d = classNames.bind(styles)

function Home() {
  const [chartData, setChartData] = useState([])
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [data, setData] = useState({
    totalRevenue: 0,
    totalOrderCount: 0,
    completedOrderCount: 0,
  })

  useEffect(() => {
    statistical.getAll().then((res) => {
      setData(res)
      setChartData(res.chartData)
    })
  }, [])
  const handleFilter = (e) => {
    e.preventDefault()
    statistical
      .filter(fromDate, toDate)
      .then((res) => {
        setData(res)
        setChartData(res.chartData)
      })
      .catch((err) => console.error(err))
  }

  const handleAll = (e) => {
    e.preventDefault()
    statistical.getAll().then((res) => {
      setData(res)
      setChartData(res.chartData)
    })
  }

  return (
    <div
      className={d('home-admin')}
      style={{ minHeight: '100vh', background: 'beige' }}
    >
      <div className={d('title-admin')}>Welcome to my admin!!!</div>
      <div className="row total-admin">
        <div className="col-4 ">
          <div className="total-price-admin">
            <h6>Tổng tiền</h6>
            <p>{(data?.totalRevenue ?? 0).toLocaleString()}đ</p>
          </div>
        </div>
        <div className="col-4 ">
          <div className="total-order-admin">
            <h6>Số đơn hàng</h6>
            <p>{data.totalOrderCount}</p>
          </div>
        </div>
        <div className="col-4 ">
          <div className="total-acctount-admin">
            <h6>Số đơn hoàn thành</h6>
            <p>{data.completedOrderCount}</p>
          </div>
        </div>
      </div>
      <form action="" method="post">
        <div className="row date-admin align-content-center align-items-center">
          <div className="col-3">
            <label for="">Từ ngày : </label>
            <input
              type="date"
              name="from_date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div className="col-3">
            {' '}
            <label for="">Đến ngày : </label>
            <input
              type="date"
              name="to_date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
          <div className="col-3">
            <button className="statistic" onClick={handleFilter}>
              Thống kê
            </button>
            <button className="allin" onClick={handleAll}>
              Tất cả
            </button>
          </div>
        </div>
      </form>
      <h5>biểu đồ thống kê</h5>
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <LineChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#8884d8"
              name="Doanh thu"
            />
            <Line
              type="monotone"
              dataKey="orders"
              stroke="#82ca9d"
              name="Số đơn hàng"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Home
