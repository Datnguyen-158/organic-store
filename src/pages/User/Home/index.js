import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import '@fortawesome/fontawesome-free/css/all.min.css'

import styles from './Home.scss'
const d = classNames.bind(styles)
function Home() {
  return (
    <div className={d('Home')}>
      {/* banner */}
      <div>
        <img
          src="https://bizweb.dktcdn.net/thumb/grande/100/431/449/themes/877121/assets/slider_1.jpg?1742273150136"
          srcSet="
    https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/slider_1.jpg?1742273150136 2x,
    https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/slider_1.jpg?1742273150136 3x
  "
          alt="Slider"
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />
      </div>
      {/* banner */}
      {/* Category */}
      <div className={d('Home-category')}>
        <div className="container justify-content-betwee ">
          <div className="row ">
            <div className={d('category')}>
              <div className={d('col-2 category-direct')}>
                <div class="cards">
                  <img
                    src="https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/cate_1.jpg?1742273150136"
                    alt=""
                  ></img>
                  <Link to="/" class="card-title ">
                    <h4>Bơ và trứng</h4>
                  </Link>
                </div>
              </div>
              <div className={d('col-2')}>
                <div class="cards ">
                  <img
                    src="https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/cate_2.jpg?1742273150136"
                    alt=""
                  ></img>
                  <Link to="/" class="card-title ">
                    <h4>Thực phẩm khô</h4>
                  </Link>
                </div>
              </div>
              <div className={d('col-2')}>
                <div class="cards ">
                  <img
                    src="https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/cate_4.jpg?1742273150136"
                    alt=""
                  ></img>
                  <Link to="/" class="card-title ">
                    <h4>Trái cây</h4>
                  </Link>
                </div>
              </div>
              <div className={d('col-2')}>
                <div class="cards">
                  <img
                    src="https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/cate_3.jpg?1742273150136"
                    alt=""
                  ></img>
                  <Link to="/" class="card-title ">
                    <h4>Thịt tươi sống</h4>
                  </Link>
                </div>
              </div>
              <div className={d('col-2')}>
                <div class="cards">
                  <img
                    src="https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/cate_6.jpg?1742273150136"
                    alt=""
                  ></img>
                  <Link to="/" class="card-title ">
                    <h4>Nước ép</h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Category */}
      {/* bestseller */}
      <div className={d('best-deal')}>
        <div className="container">
          <div className={d('border-red')}>
            <div className={d('block-title')}>
              <h2>
                <Link to="/">
                  <img
                    src="https://png.pngtree.com/png-vector/20210114/ourlarge/pngtree-promotion-vector-icon-png-image_2742739.png"
                    alt=""
                  />
                  Ưu đãi trong tuần
                </Link>
              </h2>
            </div>
            <div className={d('block-product')}>
              <div className="row ">
                <div
                  className={d('product-list d-flex justify-content-between')}
                >
                  <div className="col-2 ">
                    <Link to="./">
                      <div className="cardss">
                        <div className={d('sale-label')}>
                          <span>-41%</span>
                        </div>
                        <span className={d('boder')}></span>
                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp22.jpg?v=1628522988073"
                          alt=""
                        />
                        <h4 className="card-title">Ổi lê ruột đỏ</h4>
                        <div
                          className={d(
                            'price-item d-flex align-content-center '
                          )}
                        >
                          <span className={d('price')}>40.000đ</span>
                          <span className={d('old-price')}>100.000đ</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-2 ">
                    <Link to="./">
                      <div className="cardss">
                        <div className={d('sale-label')}>
                          <span>-12%</span>
                        </div>
                        <span className={d('boder')}></span>
                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp2.jpg?v=1625549083007"
                          alt=""
                        />
                        <h4 className="card-title iii">Đào Mỹ</h4>
                        <div
                          className={d(
                            'price-item d-flex align-content-center '
                          )}
                        >
                          <span className={d('price')}>98.000đ</span>
                          <span className={d('old-price')}>198.000đ</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-2 ">
                    <Link to="./">
                      <div className="cardss">
                        <div className={d('sale-label')}>
                          <span>-27%</span>
                        </div>
                        <span className={d('boder')}></span>
                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp3.jpg?v=1628523053697"
                          alt=""
                        />
                        <h4 className="card-title">Dâu tây</h4>
                        <div
                          className={d(
                            'price-item d-flex align-content-center '
                          )}
                        >
                          <span className={d('price')}>138.000đ</span>
                          <span className={d('old-price')}>268.000đ</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-2 ">
                    <Link to="./">
                      <div className="cardss">
                        <div className={d('sale-label')}>
                          <span>-21%</span>
                        </div>
                        <span className={d('boder')}></span>
                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp5.jpg?v=1625548796893
"
                          alt=""
                        />
                        <h4 className="card-title">Cam mật</h4>
                        <div
                          className={d(
                            'price-item d-flex align-content-center '
                          )}
                        >
                          <span className={d('price')}>68.000đ</span>
                          <span className={d('old-price')}>148.000đ</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-2 ">
                    <Link to="./">
                      <div className="cardss">
                        <div className={d('sale-label')}>
                          <span>-15%</span>
                        </div>
                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp6.jpg?v=1625548895950
"
                          alt=""
                        />
                        <h4 className="card-title">Chanh tươi</h4>
                        <div
                          className={d(
                            'price-item d-flex align-content-center '
                          )}
                        >
                          <span className={d('price')}>30.000đ</span>
                          <span className={d('old-price')}>38.000đ</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bestseller */}
      {/* section-banner */}
      <div className={d('section-banner')}>
        <div className="container">
          <div className="row ">
            <div className="col-6">
              <Link to="./" className={d('banner-left')}>
                <img
                  src="https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/banner_1.jpg?1742273150136"
                  alt=""
                ></img>
              </Link>
            </div>
            <div className="col-6">
              <Link to="./" className={d('banner-right')}>
                <img
                  src="https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/banner_2.jpg?1742273150136"
                  alt=""
                ></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* section-banner */}
      {/* section_product_1 */}
      <div
        classNames={d('section_product product_1 ')}
        style={{ marginTop: '50px' }}
      >
        <div className="container">
          <div className="row d-flex align-content-between">
            <div className={d('col-3 product_list_1')}>
              <div className={d('title-link')}>
                <h2>
                  <Link to="./"></Link>Trái cây
                </h2>
                <div className={d('block-cate')}>
                  <ul style={{ marginTop: '10px' }}>
                    <li>
                      <Link to="./">Trái cây</Link>
                    </li>
                    <li>
                      <Link to="./">Thịt tươi</Link>
                    </li>
                    <li>
                      <Link to="./">Hải sản tươi</Link>
                    </li>
                    <li>
                      <Link to="./">Rau củ</Link>
                    </li>
                    <li>
                      <Link to="./">Thực phẩm khô</Link>
                    </li>
                  </ul>
                </div>
                <div className={d('view-more')}>
                  <Link to="./">Mua sắm ngay bây giờ</Link>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="container">
                <div className="row  d-flex justify-content-between">
                  <li className={d('col-2 ')}>
                    <Link to="./">
                      <div className="product-grid">
                        <div className={d('sale-label')}>
                          <span>-41%</span>
                        </div>

                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp22.jpg?v=1628522988073"
                          alt=""
                        />
                        <h4 className="grid-title">Ổi lê ruột đỏ</h4>
                        <div className={d('price-items  ')}>
                          <span className={d('price')}>40.000đ</span>
                          <span className={d('old-price')}>100.000đ</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className={d('col-2')}>
                    <Link to="./">
                      <div className="product-grid">
                        <div className={d('sale-label')}>
                          <span>-21%</span>
                        </div>

                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp3.jpg?v=1628523053697"
                          alt=""
                        />
                        <h4 className="grid-title">Dâu tây</h4>
                        <div className={d('price-items')}>
                          <span className={d('price')}>138.000đ</span>
                          <span className={d('old-price')}>238.000đ</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className={d('col-2')}>
                    {' '}
                    <Link to="./">
                      <div className="product-grid">
                        <div className={d('sale-label')}>
                          <span>-12%</span>
                        </div>

                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp6.jpg?v=1625548895950"
                          alt=""
                        />
                        <h4 className="grid-title">Chanh tươi vỏ xanh</h4>
                        <div className={d('price-items')}>
                          <span className={d('price')}>38.000đ</span>
                          <span className={d('old-price')}>30.000đ</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className={d('col-2')}>
                    {' '}
                    <Link to="./">
                      <div className="product-grid">
                        <div className={d('sale-label')}>
                          <span>-15%</span>
                        </div>

                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp2.jpg?v=1625549083007"
                          alt=""
                        />
                        <h4 className="grid-title">Đào đỏ Mỹ</h4>
                        <div className={d('price-items')}>
                          <span className={d('price')}>128.000đ</span>
                          <span className={d('old-price')}>168.000đ</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section_product_1 */}
      {/* section_product_2 */}
      <div
        classNames={d('section_product product_1 ')}
        style={{ marginTop: '50px' }}
      >
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-8">
              <div className="container">
                <div className="row block-product-right d-flex justify-content-between">
                  <li className={d('col-2 ')}>
                    <Link to="./">
                      <div className="product-grid">
                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp7.jpg?v=1625547385647"
                          alt=""
                        />
                        <h4 className="grid-title">Hành tây</h4>
                        <div className={d('price-items  ')}>
                          <span className={d('price')}>Liên hệ</span>
                          <span className={d('old-price')}></span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className={d('col-2')}>
                    <Link to="./">
                      <div className="product-grid">
                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp20.jpg?v=1625547217850"
                          alt=""
                        />
                        <h4 className="grid-title">Cà chua</h4>
                        <div className={d('price-items')}>
                          <span className={d('price')}>15.000đ</span>
                          <span className={d('old-price')}></span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className={d('col-2')}>
                    {' '}
                    <Link to="./">
                      <div className="product-grid">
                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp19.jpg?v=1625547134823"
                          alt=""
                        />
                        <h4 className="grid-title">Ớt chuông vàng</h4>
                        <div className={d('price-items')}>
                          <span className={d('price')}>12.000đ</span>
                          <span className={d('old-price')}></span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className={d('col-2')}>
                    {' '}
                    <Link to="./">
                      <div className="product-grid">
                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp17-2.jpg?v=1625547082403"
                          alt=""
                        />
                        <h4 className="grid-title">Ớt chuông xanh</h4>
                        <div className={d('price-items')}>
                          <span className={d('price')}>12.000đ</span>
                          <span className={d('old-price')}></span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </div>
              </div>
            </div>
            <div className={d('col-3 product_list_2')}>
              <div className={d('title-link')}>
                <h2>
                  <Link to="./"></Link>Rau củ quả
                </h2>
                <div className={d('block-cate')}>
                  <ul style={{ marginTop: '10px' }}>
                    <li>
                      <Link to="./">Trái cây</Link>
                    </li>
                    <li>
                      <Link to="./">Thịt tươi</Link>
                    </li>
                    <li>
                      <Link to="./">Hải sản tươi</Link>
                    </li>
                    <li>
                      <Link to="./">Rau củ</Link>
                    </li>
                    <li>
                      <Link to="./">Thực phẩm khô</Link>
                    </li>
                  </ul>
                </div>
                <div className={d('view-more')}>
                  <Link to="./">Mua sắm ngay bây giờ</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section_product_2 */}
      {/* section_product_3 */}
      <div
        classNames={d('section_product product_1 ')}
        style={{ marginTop: '50px' }}
      >
        <div className="container">
          <div className="row d-flex align-content-between ">
            <div className={d('col-3 product_list_3')}>
              <div className={d('title-link')}>
                <h2>
                  <Link to="./"></Link>Thực phẩm tươi
                </h2>
                <div className={d('block-cate')}>
                  <ul style={{ marginTop: '10px' }}>
                    <li>
                      <Link to="./">Trái cây</Link>
                    </li>
                    <li>
                      <Link to="./">Thịt tươi</Link>
                    </li>
                    <li>
                      <Link to="./">Hải sản tươi</Link>
                    </li>
                    <li>
                      <Link to="./">Rau củ</Link>
                    </li>
                    <li>
                      <Link to="./">Thực phẩm khô</Link>
                    </li>
                  </ul>
                </div>
                <div className={d('view-more')}>
                  <Link to="./">Mua sắm ngay bây giờ</Link>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="container">
                <div className="row block-product-right d-flex justify-content-between">
                  <li className={d('col-2 ')}>
                    <Link to="./">
                      <div className="product-grid">
                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp22.jpg?v=1628522988073"
                          alt=""
                        />
                        <h4 className="grid-title">Thịt bò</h4>
                        <div className={d('price-items  ')}>
                          <span className={d('price')}>160.000đ</span>
                          <span className={d('old-price')}></span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className={d('col-2')}>
                    <Link to="./">
                      <div className="product-grid">
                        <div className={d('sale-label')}>
                          <span>-33%</span>
                        </div>

                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp10.jpg?v=1625546411053"
                          alt=""
                        />
                        <h4 className="grid-title">Cá hồi</h4>
                        <div className={d('price-items')}>
                          <span className={d('price')}>200.000đ</span>
                          <span className={d('old-price')}>300.000đ</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className={d('col-2')}>
                    {' '}
                    <Link to="./">
                      <div className="product-grid">
                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp26.jpg?v=1625546066287"
                          alt=""
                        />
                        <h4 className="grid-title">Thịt gà</h4>
                        <div className={d('price-items')}>
                          <span className={d('price')}>Liên hệ</span>
                          <span className={d('old-price')}></span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className={d('col-2')}>
                    {' '}
                    <Link to="./">
                      <div className="product-grid">
                        <img
                          src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp28.jpg?v=1625545987807"
                          alt=""
                        />
                        <h4 className="grid-title">Thịt lợn</h4>
                        <div className={d('price-items')}>
                          <span className={d('price')}>Liên hệ</span>
                          <span className={d('old-price')}></span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section_product_3 */}
      {/* delivery */}
      <div className={d('delivery_express')}>
        <div className="container">
          <div className={d('bg')}>
            <h2>Giao hãng miễn phí tận nhà trong 24h</h2>
            <Link to="./" title="Tìm hiểu thêm">
              Tìm hiểu thêm
            </Link>
          </div>
        </div>
      </div>
      {/* delivery */}
      {/* swap */}
      <div className={d('swap')}>
        <div className={d('blockk-title')}>
          <h2>
            <Link to="./">Tin tức mới nhất</Link>
          </h2>
        </div>
        <div className={d('block_mobile')}>
          <div className="container">
            <div className="row ">
              <div className="col-3 item_block">
                <Link to="./" className={d('image-wrapper')}>
                  <img
                    src="https://bizweb.dktcdn.net/thumb/large/100/431/449/articles/t4.jpg?v=1625889543947"
                    alt=""
                  ></img>
                </Link>
                <div className={d('content_block')}>
                  <h3>
                    <Link to="./">
                      Đi chợ online: Xu hướng lên ngôi nhanh tay đặt hàng nào
                    </Link>
                  </h3>
                  <div className={d('time-post d-flex flex-column')}>
                    <span>Tác giả Nguyễn Khắc Đạt |</span>
                    <span>15/08/2024</span>{' '}
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
                <div className={d('content_block')}>
                  <h3>
                    <Link to="./">
                      Đi chợ online: Xu hướng lên ngôi nhanh tay đặt hàng nào
                    </Link>
                  </h3>
                  <div className={d('time-post d-flex flex-column')}>
                    <span>Tác giả Nguyễn Khắc Đạt |</span>
                    <span>15/08/2024</span>{' '}
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
                <div className={d('content_block')}>
                  <h3>
                    <Link to="./">
                      Đi chợ online: Xu hướng lên ngôi nhanh tay đặt hàng nào
                    </Link>
                  </h3>
                  <div className={d('time-post d-flex flex-column')}>
                    <span>Tác giả Nguyễn Khắc Đạt |</span>
                    <span>15/08/2024</span>{' '}
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
                <div className={d('content_block')}>
                  <h3>
                    <Link to="./">
                      Đi chợ online: Xu hướng lên ngôi nhanh tay đặt hàng nào
                    </Link>
                  </h3>
                  <div className={d('time-post d-flex flex-column')}>
                    <span>Tác giả Nguyễn Khắc Đạt |</span>
                    <span>15/08/2024</span>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* swap */}
    </div>
  )
}

export default Home
