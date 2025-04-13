import classNames from 'classnames/bind'
import styles from './productdetail.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
const d = classNames.bind(styles)

function ProductDetail() {
  return (
    <div>
      <section className={d('bread_crumb')}>
        <div className="container ">
          <div className={d('bread_crumb_head  align-content-center ')}>
            <h1>Dâu tây</h1>
            <div className={d('link_bread_crumb ')}>
              <Link to="./Home">Trang chủ </Link>
              <li>
                <Link to="./">
                  <span>Sản phẩm bán chạy</span>
                </Link>
              </li>
              <li>
                <strong>
                  <span>Dâu tây</span>
                </strong>
              </li>
            </div>
          </div>
        </div>
      </section>
      <section className="container ">
        <div className={d('row nd-image-and-info')}>
          <div className={d('col-5 nd-mobile')}>
            <div className="row ">
              <div className={d('product-image-block d-flex')}>
                <div className={d('col-2')}>
                  <div className={d('swiper-wrapper')}>
                    <FontAwesomeIcon icon={faArrowUp} />
                    <div className={d('swiper-slider swiper-slide-active')}>
                      <img
                        src="https://bizweb.dktcdn.net/thumb/medium/100/431/449/products/sp3.jpg?v=1628523053697"
                        alt=""
                      ></img>
                    </div>
                    <div className={d('swiper-slider swiper-slide-active')}>
                      <img
                        src="	https://bizweb.dktcdn.net/thumb/medium/100/431/449/products/dau1.jpg?v=1628523053697"
                        alt=""
                      ></img>
                    </div>
                    <div className={d('swiper-slider swiper-slide-active')}>
                      <img
                        src="https://bizweb.dktcdn.net/thumb/medium/100/431/449/products/sp3-2.png?v=1628523053697"
                        alt=""
                      ></img>
                    </div>
                    <div className={d('swiper-slider swiper-slide-active')}>
                      <img
                        src="	https://bizweb.dktcdn.net/thumb/medium/100/431/449/products/dau2.jpg?v=1628523053697"
                        alt=""
                      ></img>
                    </div>
                    <FontAwesomeIcon icon={faArrowDown} />
                  </div>
                </div>
                <div className={d('col-10')}>
                  <div className={d('swiper-container')}>
                    <Link to="./">
                      <img
                        src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp3.jpg?v=1628523053697"
                        alt=""
                      ></img>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={d('col-4 detail-pro')}>
            <div className={d('nd-info-product')}>
              <h1>Dâu tây</h1>
              <div className={d('price-box')}>
                <span className={d('price')}>138.000đ</span>
                <span className={d('old-price')}>238.000đ</span>
                <span className={d('save-price d-block')}>
                  Tiết kiệm:{' '}
                  <span className={d('saless')}>
                    100.000đ <span>so với giá thị trường</span>
                  </span>
                </span>
              </div>
              <div className={d('summary')}>
                <p>
                  Dâu tây (danh pháp khoa học: Fragaria) hay còn gọi là dâu đất
                  là một chi thực vật hạt kín và loài thực vật có hoa thuộc họ
                  Hoa hồng (Rosaceae) cho quả được nhiều người ưa chuộng.
                </p>
              </div>
              <div className={d('form-product')}>
                <form action="" method="post">
                  <div className={d('select-swatch')}>
                    <div className={d('swatch')}>
                      <div className={d('header')}>Trọng lượng</div>
                      <div className={d('swatch-elements d-flex')}>
                        <div className={d('swatch-element checked ')}>
                          <label for="">500g</label>
                        </div>
                        <div className={d('swatch-element')}>
                          <label for="">1000g</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={d('form-group')}>
                    <div className={d('custom-btn-number')}>
                      <label for="">Số lượng</label>
                      <div className={d('custom-btn-numbers')}>
                        <button className={d('tru')}>
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <input type="text" value="1"></input>
                        <button className={d('cong')}>
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </div>
                    <div className={d('btn-muangay d-inline-block')}>
                      <Link to="../Checkout">
                        <button type="submit" className={d('btn-buy-now')}>
                          Mua Ngay
                        </button>
                      </Link>
                    </div>
                    <div className={d('btn-mua')}>
                      <button className={d('btn_buy ')} type="submit">
                        Thêm vào giỏ hàng
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className={d('col-3')}>
            <div className={d('service-product')}>
              <div className={d('item')}>
                <div className={d('icon')}>
                  <img
                    src="	https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/service_1.png?1742273150136"
                    alt=""
                  ></img>
                </div>
                <div className={d('info')}>100% tự nhiên</div>
              </div>
              <div className={d('item')}>
                <div className={d('icon')}>
                  <img
                    src="	https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/service_2.png?1742273150136"
                    alt=""
                  ></img>
                </div>
                <div className={d('info')}>Chứng nhận ATTP</div>
              </div>{' '}
              <div className={d('item')}>
                <div className={d('icon')}>
                  <img
                    src="	https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/service_1.png?1742273150136"
                    alt=""
                  ></img>
                </div>
                <div className={d('info')}>Luôn luôn tươi mới</div>
              </div>{' '}
              <div className={d('item')}>
                <div className={d('icon')}>
                  <img
                    src="	https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/service_4.png?1742273150136"
                    alt=""
                  ></img>
                </div>
                <div className={d('info')}>An toàn cho sức khỏe</div>
              </div>
            </div>
          </div>
        </div>
        <div className={d('nd-product-tab')}>
          <ul className={d('nav-tabs')}>
            <li className={d('nav-item')}>
              <Link to="./">Thông tin sản phẩm</Link>
            </li>
            <li className={d('nav-item')}>
              <Link to="./">Chính sách đổi trả</Link>
            </li>
            <li className={d('nav-item')}>
              <Link to="./">Hướng dẫn bảo quản</Link>
            </li>
          </ul>
          <div className={d('tab-content')}>
            <div className={d('tab-panes active')}>
              <p>
                Dâu tây (danh pháp khoa học: Fragaria) hay còn gọi là dâu đất là
                một chi thực vật hạt kín và loài thực vật có hoa thuộc họ Hoa
                hồng (Rosaceae) cho quả được nhiều người ưa chuộng. Dâu tây xuất
                xứ từ châu Mỹ và được các nhà làm vườn châu Âu cho lai tạo vào
                thế kỷ 18 để tạo nên giống dâu tây được trồng rộng rãi hiện nay.
                Loài này được (Weston) Duchesne miêu tả khoa học đầu tiên năm
                1788.
              </p>
              <p>
                Dâu tây được trồng lấy trái ở vùng ôn đới. Với mùi thơm hấp dẫn
                cùng vị dâu ngọt lẫn chua nên dâu tây được ưa chuộng.
              </p>
              <p>
                Ở Việt Nam, khí hậu mát mẻ của miền núi Đà Lạt là môi trường
                thích hợp với việc canh tác dâu nên loại trái cây này được xem
                là đặc sản của vùng cao nguyên nơi đây.
              </p>
              <p>
                Quả dâu tây thường được sử dụng để làm các món tráng miệng. Dâu
                tây giàu vitamin C và là nguồn cung cấp dồi dào các chất
                flavonoit cần thiết c
              </p>
            </div>
            <div className={d('. ')}>
              <p>Tham khảo thêm thông tin tại chính sách đổi trả hàng</p>
            </div>
            <div className={d('tab-panes ')}>
              <p>
                <strong>ND fresh </strong>
                là hệ thống cửa hàng thực phẩm sạch uy tín nhất ở Việt Nam,
                chuyên cung cấp thực phẩm sạch tới từng bếp ăn của gia đình bạn.
              </p>
              <p>
                <strong>Tầm nhìn</strong>
                Được nuôi trồng, chế biến theo phương Bio (sinh học), Organic
                (hữu cơ), Eco (sinh thái); cam kết không bán hàng giả, hàng nhái
                và hàng kém chất lượng. Sản phẩm được giao đến tay khách hàng
                luôn đúng cam kết, đúng chất lượng niệm yết, luôn được bảo quản
                trong môi trường lý tưởng, đảm bảo vệ sinh an toàn thực phẩm.
              </p>
              <p>
                <strong>Mục tiêu</strong>
                Sản phẩm được giao đến tay khách hàng luôn đúng cam kết, đúng
                chất lượng niệm yết, luôn được bảo quản trong môi trường lý
                tưởng, đảm bảo vệ sinh an toàn thực phẩm.
              </p>
            </div>
          </div>
        </div>
        <div className={d('nd-similar-product')}>
          <div className={d('home-title')}>
            <Link to="./">Sản phẩm liên quan</Link>
          </div>
          <section className={d('main_container col-12')}>
            <div className="container">
              <div className="row">
                <li className={d('col-2')}>
                  <Link to="../ProductDetail">
                    <div className="product-grids">
                      <div className={d('sale-labels')}>
                        <span>-21%</span>
                      </div>
                      <div className={d('product-transition')}>
                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp3.jpg?v=1628523053697"
                          alt=""
                        />
                      </div>

                      <h4 className="grid-title">Dâu tây</h4>
                      <div className={d('price-items')}>
                        <span className={d('price')}>138.000đ</span>
                        <span className={d('old-price')}>238.000đ</span>
                      </div>
                    </div>
                  </Link>
                </li>{' '}
                <li className={d('col-2')}>
                  <Link to="./">
                    <div className="product-grids">
                      <div className={d('sale-labels')}>
                        <span>-21%</span>
                      </div>
                      <div className={d('product-transition')}>
                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp3.jpg?v=1628523053697"
                          alt=""
                        />
                      </div>

                      <h4 className="grid-title">Dâu tây</h4>
                      <div className={d('price-items')}>
                        <span className={d('price')}>138.000đ</span>
                        <span className={d('old-price')}>238.000đ</span>
                      </div>
                    </div>
                  </Link>
                </li>{' '}
                <li className={d('col-2')}>
                  <Link to="./">
                    <div className="product-grids">
                      <div className={d('sale-labels')}>
                        <span>-21%</span>
                      </div>
                      <div className={d('product-transition')}>
                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp3.jpg?v=1628523053697"
                          alt=""
                        />
                      </div>

                      <h4 className="grid-title">Dâu tây</h4>
                      <div className={d('price-items')}>
                        <span className={d('price')}>138.000đ</span>
                        <span className={d('old-price')}>238.000đ</span>
                      </div>
                    </div>
                  </Link>
                </li>{' '}
                <li className={d('col-2')}>
                  <Link to="./">
                    <div className="product-grids">
                      <div className={d('sale-labels')}>
                        <span>-21%</span>
                      </div>
                      <div className={d('product-transition')}>
                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp3.jpg?v=1628523053697"
                          alt=""
                        />
                      </div>

                      <h4 className="grid-title">Dâu tây</h4>
                      <div className={d('price-items')}>
                        <span className={d('price')}>138.000đ</span>
                        <span className={d('old-price')}>238.000đ</span>
                      </div>
                    </div>
                  </Link>
                </li>{' '}
              </div>

              {/* <div className="row  ">
                <div className="col-12">
                  <nav className={d('text-center ')}>
                    <ul
                      className={d(
                        'pagination justify-content-center align-items-center  '
                      )}
                    >
                      <li className={d('page-item disabled')}>
                        <Link to="./" className={d('page-link')}>
                          «
                        </Link>
                      </li>
                      <li className={d('page-item active')}>
                        <Link to="./" className={d('page-link')}>
                          1
                        </Link>
                      </li>
                      <li className={d('page-item')}>
                        <Link to="./" className={d('page-link')}>
                          2
                        </Link>
                      </li>
                      <li className={d('page-item')}>
                        <Link to="./" className={d('page-link')}>
                          3
                        </Link>
                      </li>
                      <li className={d('page-item')}>
                        <Link to="./" className={d('page-link')}>
                          »
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div> */}
            </div>
          </section>
        </div>
        <div className={d('section-recent-view')}>
          <div className={d('home-title')}>
            <span>Sản phẩm đã xem</span>
          </div>
          <section className={d('main_container col-12')}>
            <div className="container">
              <div className="row">
                <li className={d('col-2')}>
                  <Link to="../ProductDetail">
                    <div className="product-grids">
                      <div className={d('sale-labels')}>
                        <span>-21%</span>
                      </div>
                      <div className={d('product-transition')}>
                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp3.jpg?v=1628523053697"
                          alt=""
                        />
                      </div>

                      <h4 className="grid-title">Dâu tây</h4>
                      <div className={d('price-items')}>
                        <span className={d('price')}>138.000đ</span>
                        <span className={d('old-price')}>238.000đ</span>
                      </div>
                    </div>
                  </Link>
                </li>{' '}
                <li className={d('col-2')}>
                  <Link to="./">
                    <div className="product-grids">
                      <div className={d('sale-labels')}>
                        <span>-21%</span>
                      </div>
                      <div className={d('product-transition')}>
                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp3.jpg?v=1628523053697"
                          alt=""
                        />
                      </div>

                      <h4 className="grid-title">Dâu tây</h4>
                      <div className={d('price-items')}>
                        <span className={d('price')}>138.000đ</span>
                        <span className={d('old-price')}>238.000đ</span>
                      </div>
                    </div>
                  </Link>
                </li>{' '}
                <li className={d('col-2')}>
                  <Link to="./">
                    <div className="product-grids">
                      <div className={d('sale-labels')}>
                        <span>-21%</span>
                      </div>
                      <div className={d('product-transition')}>
                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp3.jpg?v=1628523053697"
                          alt=""
                        />
                      </div>

                      <h4 className="grid-title">Dâu tây</h4>
                      <div className={d('price-items')}>
                        <span className={d('price')}>138.000đ</span>
                        <span className={d('old-price')}>238.000đ</span>
                      </div>
                    </div>
                  </Link>
                </li>{' '}
                <li className={d('col-2')}>
                  <Link to="./">
                    <div className="product-grids">
                      <div className={d('sale-labels')}>
                        <span>-21%</span>
                      </div>
                      <div className={d('product-transition')}>
                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp3.jpg?v=1628523053697"
                          alt=""
                        />
                      </div>

                      <h4 className="grid-title">Dâu tây</h4>
                      <div className={d('price-items')}>
                        <span className={d('price')}>138.000đ</span>
                        <span className={d('old-price')}>238.000đ</span>
                      </div>
                    </div>
                  </Link>
                </li>{' '}
                <li className={d('col-2')}>
                  <Link to="./">
                    <div className="product-grids">
                      <div className={d('sale-labels')}>
                        <span>-21%</span>
                      </div>
                      <div className={d('product-transition')}>
                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp3.jpg?v=1628523053697"
                          alt=""
                        />
                      </div>

                      <h4 className="grid-title">Dâu tây</h4>
                      <div className={d('price-items')}>
                        <span className={d('price')}>138.000đ</span>
                        <span className={d('old-price')}>238.000đ</span>
                      </div>
                    </div>
                  </Link>
                </li>{' '}
                <li className={d('col-2')}>
                  <Link to="./">
                    <div className="product-grids">
                      <div className={d('sale-labels')}>
                        <span>-21%</span>
                      </div>
                      <div className={d('product-transition')}>
                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp3.jpg?v=1628523053697"
                          alt=""
                        />
                      </div>

                      <h4 className="grid-title">Dâu tây</h4>
                      <div className={d('price-items')}>
                        <span className={d('price')}>138.000đ</span>
                        <span className={d('old-price')}>238.000đ</span>
                      </div>
                    </div>
                  </Link>
                </li>{' '}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
