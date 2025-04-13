import classNames from 'classnames/bind'
import styles from './news.scss'
import { Link } from 'react-router-dom'

const d = classNames.bind(styles)
function News() {
  return (
    <div>
      <section className={d('bread_crumb')}>
        <div className="container ">
          <div className={d('bread_crumb_head  align-content-center ')}>
            <h1>Tin tức</h1>
            <div className={d('link_bread_crumb ')}>
              <Link to="./Home">Trang chủ </Link>
              <span style={{ fontWeight: 'bolder' }}> Tin tức</span>
            </div>
          </div>
        </div>
      </section>

      <div className={d('block_mobile ')}>
        <div className="container">
          <div className="row ">
            <div className="col-3 item_block">
              <Link to="./" className={d('image-wrapper')}>
                <img
                  src="https://bizweb.dktcdn.net/thumb/large/100/431/449/articles/t4.jpg?v=1625889543947"
                  alt=""
                ></img>
              </Link>
              <div className={d('content_blockk')}>
                <p>Saturday, 10 July, 2024</p>
                <h3>
                  <Link to="./">
                    Đi chợ online: Xu hướng lên ngôi nhanh tay đặt hàng
                  </Link>
                </h3>
                <div className={d('article-sum')}>
                  “Mua hàng online thì cũng chủ yếu mua ở những nơi quen, tin
                  tưởng. Book online rồi nhận vào những giờ cố định như sau giờ
                  đi làm. Hoặc như tuần này làm việc ở nhà thì mình cũng sẽ lựa
                  chọn là book hàng online sau đó nhận ở tại sảnh”, chị Bùi
                  Thanh Vân chia sẻ. Từ khi tình hình dịch Covid 19 diễn biến
                  phức tạp, doanh thu của hệ thống cửa hàng Thực phẩm nông sản
                  sạch Thanh Long (ở phố Vạn Bảo, quận Ba Đình, Hà Nội) giảm
                  mạnh so với trước. Nắm bắt được tâm lý của khách hàng không
                  muốn ra ngoài tiếp xúc với nhiều người, đơn vị đã đẩy mạnh bán
                  hàng online qua Facebook và Zalo. Việc bán hàng trực tuyến
                  hiện đang chiếm hơn 50% tổng doanh thu của cửa hàng. Theo anh
                  Nguyễn Minh Long, chủ cửa hàng Thực phẩm nông sản sạch Thanh
                  Long, hướng đi này đã giúp cho đơn vị đảm bảo doanh thu, nhờ
                  đó tạo nên sự an tâm hơn cho khách hàng cũng như đội ngũ nhân
                  viên.
                </div>
              </div>
            </div>
            <div className="col-3 item_block">
              <Link to="./" className={d('image-wrapper')}>
                <img
                  src="https://bizweb.dktcdn.net/thumb/large/100/431/449/articles/t1.jpg?v=1625889497397"
                  alt=""
                ></img>
              </Link>
              <div className={d('content_blockk')}>
                <p>Saturday, 10 July, 2024</p>
                <h3>
                  <Link to="./">
                    Đi chợ online: Xu hướng lên ngôi nhanh tay đặt hàng
                  </Link>
                </h3>
                <div className={d('article-sum')}>
                  “Mua hàng online thì cũng chủ yếu mua ở những nơi quen, tin
                  tưởng. Book online rồi nhận vào những giờ cố định như sau giờ
                  đi làm. Hoặc như tuần này làm việc ở nhà thì mình cũng sẽ lựa
                  chọn là book hàng online sau đó nhận ở tại sảnh”, chị Bùi
                  Thanh Vân chia sẻ. Từ khi tình hình dịch Covid 19 diễn biến
                  phức tạp, doanh thu của hệ thống cửa hàng Thực phẩm nông sản
                  sạch Thanh Long (ở phố Vạn Bảo, quận Ba Đình, Hà Nội) giảm
                  mạnh so với trước. Nắm bắt được tâm lý của khách hàng không
                  muốn ra ngoài tiếp xúc với nhiều người, đơn vị đã đẩy mạnh bán
                  hàng online qua Facebook và Zalo. Việc bán hàng trực tuyến
                  hiện đang chiếm hơn 50% tổng doanh thu của cửa hàng. Theo anh
                  Nguyễn Minh Long, chủ cửa hàng Thực phẩm nông sản sạch Thanh
                  Long, hướng đi này đã giúp cho đơn vị đảm bảo doanh thu, nhờ
                  đó tạo nên sự an tâm hơn cho khách hàng cũng như đội ngũ nhân
                  viên.
                </div>
              </div>
            </div>
            <div className="col-3 item_block">
              <Link to="./" className={d('image-wrapper')}>
                <img
                  src="	https://bizweb.dktcdn.net/thumb/large/100/431/449/articles/t6.jpg?v=1625889575490"
                  alt=""
                ></img>
              </Link>
              <div className={d('content_blockk')}>
                <p>Saturday, 10 July, 2024</p>
                <h3>
                  <Link to="./">
                    Đi chợ online: Xu hướng lên ngôi nhanh tay đặt hàng
                  </Link>
                </h3>
                <div className={d('article-sum')}>
                  “Mua hàng online thì cũng chủ yếu mua ở những nơi quen, tin
                  tưởng. Book online rồi nhận vào những giờ cố định như sau giờ
                  đi làm. Hoặc như tuần này làm việc ở nhà thì mình cũng sẽ lựa
                  chọn là book hàng online sau đó nhận ở tại sảnh”, chị Bùi
                  Thanh Vân chia sẻ. Từ khi tình hình dịch Covid 19 diễn biến
                  phức tạp, doanh thu của hệ thống cửa hàng Thực phẩm nông sản
                  sạch Thanh Long (ở phố Vạn Bảo, quận Ba Đình, Hà Nội) giảm
                  mạnh so với trước. Nắm bắt được tâm lý của khách hàng không
                  muốn ra ngoài tiếp xúc với nhiều người, đơn vị đã đẩy mạnh bán
                  hàng online qua Facebook và Zalo. Việc bán hàng trực tuyến
                  hiện đang chiếm hơn 50% tổng doanh thu của cửa hàng. Theo anh
                  Nguyễn Minh Long, chủ cửa hàng Thực phẩm nông sản sạch Thanh
                  Long, hướng đi này đã giúp cho đơn vị đảm bảo doanh thu, nhờ
                  đó tạo nên sự an tâm hơn cho khách hàng cũng như đội ngũ nhân
                  viên.
                </div>
              </div>
            </div>
            <div className="col-3 item_block">
              <Link to="./" className={d('image-wrapper')}>
                <img
                  src="	https://bizweb.dktcdn.net/thumb/large/100/431/449/articles/t5.jpg?v=1625889560370"
                  alt=""
                ></img>
              </Link>
              <div className={d('content_blockk')}>
                <p>Saturday, 10 July, 2024</p>
                <h3>
                  <Link to="./">
                    Đi chợ online: Xu hướng lên ngôi nhanh tay đặt hàng
                  </Link>
                </h3>
                <div className={d('article-sum')}>
                  “Mua hàng online thì cũng chủ yếu mua ở những nơi quen, tin
                  tưởng. Book online rồi nhận vào những giờ cố định như sau giờ
                  đi làm. Hoặc như tuần này làm việc ở nhà thì mình cũng sẽ lựa
                  chọn là book hàng online sau đó nhận ở tại sảnh”, chị Bùi
                  Thanh Vân chia sẻ. Từ khi tình hình dịch Covid 19 diễn biến
                  phức tạp, doanh thu của hệ thống cửa hàng Thực phẩm nông sản
                  sạch Thanh Long (ở phố Vạn Bảo, quận Ba Đình, Hà Nội) giảm
                  mạnh so với trước. Nắm bắt được tâm lý của khách hàng không
                  muốn ra ngoài tiếp xúc với nhiều người, đơn vị đã đẩy mạnh bán
                  hàng online qua Facebook và Zalo. Việc bán hàng trực tuyến
                  hiện đang chiếm hơn 50% tổng doanh thu của cửa hàng. Theo anh
                  Nguyễn Minh Long, chủ cửa hàng Thực phẩm nông sản sạch Thanh
                  Long, hướng đi này đã giúp cho đơn vị đảm bảo doanh thu, nhờ
                  đó tạo nên sự an tâm hơn cho khách hàng cũng như đội ngũ nhân
                  viên.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={d('block_mobile ')}>
        <div className="container">
          <div className="row ">
            <div className="col-3 item_block">
              <Link to="./" className={d('image-wrapper')}>
                <img
                  src="https://bizweb.dktcdn.net/thumb/large/100/431/449/articles/t4.jpg?v=1625889543947"
                  alt=""
                ></img>
              </Link>
              <div className={d('content_blockk')}>
                <p>Saturday, 10 July, 2024</p>
                <h3>
                  <Link to="./">
                    Đi chợ online: Xu hướng lên ngôi nhanh tay đặt hàng
                  </Link>
                </h3>
                <div className={d('article-sum')}>
                  “Mua hàng online thì cũng chủ yếu mua ở những nơi quen, tin
                  tưởng. Book online rồi nhận vào những giờ cố định như sau giờ
                  đi làm. Hoặc như tuần này làm việc ở nhà thì mình cũng sẽ lựa
                  chọn là book hàng online sau đó nhận ở tại sảnh”, chị Bùi
                  Thanh Vân chia sẻ. Từ khi tình hình dịch Covid 19 diễn biến
                  phức tạp, doanh thu của hệ thống cửa hàng Thực phẩm nông sản
                  sạch Thanh Long (ở phố Vạn Bảo, quận Ba Đình, Hà Nội) giảm
                  mạnh so với trước. Nắm bắt được tâm lý của khách hàng không
                  muốn ra ngoài tiếp xúc với nhiều người, đơn vị đã đẩy mạnh bán
                  hàng online qua Facebook và Zalo. Việc bán hàng trực tuyến
                  hiện đang chiếm hơn 50% tổng doanh thu của cửa hàng. Theo anh
                  Nguyễn Minh Long, chủ cửa hàng Thực phẩm nông sản sạch Thanh
                  Long, hướng đi này đã giúp cho đơn vị đảm bảo doanh thu, nhờ
                  đó tạo nên sự an tâm hơn cho khách hàng cũng như đội ngũ nhân
                  viên.
                </div>
              </div>
            </div>
            <div className="col-3 item_block">
              <Link to="./" className={d('image-wrapper')}>
                <img
                  src="https://bizweb.dktcdn.net/thumb/large/100/431/449/articles/t1.jpg?v=1625889497397"
                  alt=""
                ></img>
              </Link>
              <div className={d('content_blockk')}>
                <p>Saturday, 10 July, 2024</p>
                <h3>
                  <Link to="./">
                    Đi chợ online: Xu hướng lên ngôi nhanh tay đặt hàng
                  </Link>
                </h3>
                <div className={d('article-sum')}>
                  “Mua hàng online thì cũng chủ yếu mua ở những nơi quen, tin
                  tưởng. Book online rồi nhận vào những giờ cố định như sau giờ
                  đi làm. Hoặc như tuần này làm việc ở nhà thì mình cũng sẽ lựa
                  chọn là book hàng online sau đó nhận ở tại sảnh”, chị Bùi
                  Thanh Vân chia sẻ. Từ khi tình hình dịch Covid 19 diễn biến
                  phức tạp, doanh thu của hệ thống cửa hàng Thực phẩm nông sản
                  sạch Thanh Long (ở phố Vạn Bảo, quận Ba Đình, Hà Nội) giảm
                  mạnh so với trước. Nắm bắt được tâm lý của khách hàng không
                  muốn ra ngoài tiếp xúc với nhiều người, đơn vị đã đẩy mạnh bán
                  hàng online qua Facebook và Zalo. Việc bán hàng trực tuyến
                  hiện đang chiếm hơn 50% tổng doanh thu của cửa hàng. Theo anh
                  Nguyễn Minh Long, chủ cửa hàng Thực phẩm nông sản sạch Thanh
                  Long, hướng đi này đã giúp cho đơn vị đảm bảo doanh thu, nhờ
                  đó tạo nên sự an tâm hơn cho khách hàng cũng như đội ngũ nhân
                  viên.
                </div>
              </div>
            </div>
            <div className="col-3 item_block">
              <Link to="./" className={d('image-wrapper')}>
                <img
                  src="	https://bizweb.dktcdn.net/thumb/large/100/431/449/articles/t3.jpg?v=1625889527327"
                  alt=""
                ></img>
              </Link>
              <div className={d('content_blockk')}>
                <p>Saturday, 10 July, 2024</p>
                <h3>
                  <Link to="./">
                    Đi chợ online: Xu hướng lên ngôi nhanh tay đặt hàng
                  </Link>
                </h3>
                <div className={d('article-sum')}>
                  “Mua hàng online thì cũng chủ yếu mua ở những nơi quen, tin
                  tưởng. Book online rồi nhận vào những giờ cố định như sau giờ
                  đi làm. Hoặc như tuần này làm việc ở nhà thì mình cũng sẽ lựa
                  chọn là book hàng online sau đó nhận ở tại sảnh”, chị Bùi
                  Thanh Vân chia sẻ. Từ khi tình hình dịch Covid 19 diễn biến
                  phức tạp, doanh thu của hệ thống cửa hàng Thực phẩm nông sản
                  sạch Thanh Long (ở phố Vạn Bảo, quận Ba Đình, Hà Nội) giảm
                  mạnh so với trước. Nắm bắt được tâm lý của khách hàng không
                  muốn ra ngoài tiếp xúc với nhiều người, đơn vị đã đẩy mạnh bán
                  hàng online qua Facebook và Zalo. Việc bán hàng trực tuyến
                  hiện đang chiếm hơn 50% tổng doanh thu của cửa hàng. Theo anh
                  Nguyễn Minh Long, chủ cửa hàng Thực phẩm nông sản sạch Thanh
                  Long, hướng đi này đã giúp cho đơn vị đảm bảo doanh thu, nhờ
                  đó tạo nên sự an tâm hơn cho khách hàng cũng như đội ngũ nhân
                  viên.
                </div>
              </div>
            </div>
            <div className="col-3 item_block">
              <Link to="./" className={d('image-wrapper')}>
                <img
                  src="	https://bizweb.dktcdn.net/thumb/large/100/431/449/articles/t2.jpg?v=1625889512703"
                  alt=""
                ></img>
              </Link>
              <div className={d('content_blockk')}>
                <p>Saturday, 10 July, 2024</p>
                <h3>
                  <Link to="./">
                    Đi chợ online: Xu hướng lên ngôi nhanh tay đặt hàng
                  </Link>
                </h3>
                <div className={d('article-sum')}>
                  “Mua hàng online thì cũng chủ yếu mua ở những nơi quen, tin
                  tưởng. Book online rồi nhận vào những giờ cố định như sau giờ
                  đi làm. Hoặc như tuần này làm việc ở nhà thì mình cũng sẽ lựa
                  chọn là book hàng online sau đó nhận ở tại sảnh”, chị Bùi
                  Thanh Vân chia sẻ. Từ khi tình hình dịch Covid 19 diễn biến
                  phức tạp, doanh thu của hệ thống cửa hàng Thực phẩm nông sản
                  sạch Thanh Long (ở phố Vạn Bảo, quận Ba Đình, Hà Nội) giảm
                  mạnh so với trước. Nắm bắt được tâm lý của khách hàng không
                  muốn ra ngoài tiếp xúc với nhiều người, đơn vị đã đẩy mạnh bán
                  hàng online qua Facebook và Zalo. Việc bán hàng trực tuyến
                  hiện đang chiếm hơn 50% tổng doanh thu của cửa hàng. Theo anh
                  Nguyễn Minh Long, chủ cửa hàng Thực phẩm nông sản sạch Thanh
                  Long, hướng đi này đã giúp cho đơn vị đảm bảo doanh thu, nhờ
                  đó tạo nên sự an tâm hơn cho khách hàng cũng như đội ngũ nhân
                  viên.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
