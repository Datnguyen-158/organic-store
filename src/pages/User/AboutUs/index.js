import classNames from 'classnames/bind'
import styles from './aboutus.scss'
import { Link } from 'react-router-dom'

const d = classNames.bind(styles)
function AboutUs() {
  return (
    <div>
      <section className={d('bread_crumb')}>
        <div className="container ">
          <div className={d('bread_crumb_head  align-content-center ')}>
            <h1>Giới thiệu</h1>
            <div className={d('link_bread_crumb ')}>
              <Link to="./Home">Trang chủ </Link>
              <span style={{ fontWeight: 'bolder' }}> Giới thiệu</span>
            </div>
          </div>
        </div>
      </section>
      <section className={d('page_introduce margin-top-30  margin-bottom-30')}>
        <div className="container ">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className={d('page-title')}>
                <h1 style={{ textAlign: 'left' }}>Giới thiệu</h1>
              </div>
              <div
                style={{ textAlign: 'left', margin: '10px 0' }}
                className={d('content-page')}
              >
                <p>
                  <strong>ND fresh</strong> là hệ thống cửa hàng thực phẩm
                  organic sạch uy tín nhất ở Việt Nam, chuyên cung cấp thực phẩm
                  sạch tới từng bếp ăn của gia đình bạn.{' '}
                </p>
                <p>
                  <strong>Tầm nhìn:</strong>Được nuôi trồng, chế biến theo
                  phương Bio (sinh học), Organic (hữu cơ), Eco (sinh thái); cam
                  kết không bán hàng giả, hàng nhái và hàng kém chất lượng. Sản
                  phẩm được giao đến tay khách hàng luôn đúng cam kết, đúng chất
                  lượng niệm yết, luôn được bảo quản trong môi trường lý tưởng,
                  đảm bảo vệ sinh an toàn thực phẩm.
                </p>
                <p>
                  <strong>Mục tiêu:</strong>Sản phẩm được giao đến tay khách
                  hàng luôn đúng cam kết, đúng chất lượng niệm yết, luôn được
                  bảo quản trong môi trường lý tưởng, đảm bảo vệ sinh an toàn
                  thực phẩm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
