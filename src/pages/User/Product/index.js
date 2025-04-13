import classNames from 'classnames/bind'
import styles from './product.scss'
import { Link } from 'react-router-dom'
const d = classNames.bind(styles)

function Product() {
  return (
    <div>
      <section className={d('bread_crumb')}>
        <div className="container ">
          <div className={d('bread_crumb_head  align-content-center ')}>
            <h1>Tất cả sản phẩm</h1>
            <div className={d('link_bread_crumb ')}>
              <Link to="./Home">Trang chủ </Link>
              <span style={{ fontWeight: 'bolder' }}> Tất cả sản phẩm</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <aside className={d('sideBar col-3')}>
            <div className={d('aside-item')}>
              <div className={d('aside-title')}>Danh mục sản phẩm</div>
              <div className={d('aside-content')}>
                <ul className={d('nav-category')}>
                  <li className={d('nav-item')}>
                    <Link to="./">Trái cây</Link>
                  </li>
                  <li className={d('nav-item')}>
                    {' '}
                    <Link to="./">Thịt tươi</Link>
                  </li>
                  <li className={d('nav-item')}>
                    {' '}
                    <Link to="./">Thực phẩm khô</Link>
                  </li>
                  <li className={d('nav-item')}>
                    {' '}
                    <Link to="./">Rau củ</Link>
                  </li>
                  <li className={d('nav-item')}>
                    {' '}
                    <Link to="./">Bơ sữa</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={d('aside-filter')}>
              <div className={d('aside-item')}>
                <div className={d('aside-title')}>Lọc sản phẩm</div>

                <div className={d('aside-content')}>
                  <div className={d('aside-titles')}>Giá sản phẩm</div>
                  <ul>
                    <li className={d('aside-price')}>
                      <label>
                        <input type="checkbox"></input>
                        Giá dưới 100.000đ
                      </label>
                    </li>{' '}
                    <li className={d('aside-price')}>
                      <label>
                        <input type="checkbox"></input>
                        Giá dưới 100.000đ
                      </label>
                    </li>{' '}
                    <li className={d('aside-price')}>
                      <label>
                        <input type="checkbox"></input>
                        Giá dưới 100.000đ
                      </label>
                    </li>{' '}
                    <li className={d('aside-price')}>
                      <label>
                        <input type="checkbox"></input>
                        Giá dưới 100.000đ
                      </label>
                    </li>{' '}
                    <li className={d('aside-price')}>
                      <label>
                        <input type="checkbox"></input>
                        Giá dưới 100.000đ
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
          <section className={d('main_container col-9')}>
            <div className="container">
              <div className="row">
                <li className={d('col-3')}>
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
                <li className={d('col-3')}>
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
                <li className={d('col-3')}>
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
                <li className={d('col-3')}>
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
                <li className={d('col-3')}>
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
                <li className={d('col-3')}>
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
                <li className={d('col-3')}>
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
                <li className={d('col-3')}>
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

              <div className="row  ">
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
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Product
