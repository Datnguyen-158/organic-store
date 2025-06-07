import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import '@fortawesome/fontawesome-free/css/all.min.css'
import styles from './Home.scss'
import categoryApi from '../../../api/categoryApi'
import productApi from '../../../api/productApi'
import newsApi from '../../../api/newsApi'
import React, { useState, useEffect } from 'react'
const d = classNames.bind(styles)
function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const imageMapping = {
    'Trứng và bơ':
      'https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/cate_1.jpg?1742273150136',
    'Thực phẩm khô':
      'https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/cate_2.jpg?1742273150136',
    'Thịt tươi sống':
      'https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/cate_3.jpg?1742273150136',
    'Trái cây':
      'https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/cate_4.jpg?1742273150136',
    'Rau củ quả':
      'https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/cate_5.jpg?1742273150136',
  }

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    categoryApi
      .getCategories()
      .then((response) => {
        setCategories(response.data)
      })
      .catch((error) => {
        console.error('Error loading categories', error)
      })
  }, [])
  const [news, setNews] = useState([])
  useEffect(() => {
    newsApi
      .getNews()
      .then((response) => {
        setNews(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error loading news', error)
      })
  }, [])

  useEffect(() => {
    productApi
      .getProduct()
      .then((response) => {
        setProducts(response.data)
      })
      .catch((error) => {
        console.error('Error loading product', error)
      })
  }, [])

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
        <div className="container justify-content-between ">
          <div className="row ">
            <div className={d('category')}>
              {categories.slice(0, 5).map((category) => (
                <div className={d('col-2')} key={category.category_id}>
                  <div className="cards">
                    <img
                      src={
                        imageMapping[category.category_name] ||
                        '/images/default.png'
                      }
                      alt={category.name}
                    />
                    <Link
                      to={`/Product?category=${category.category_id}`}
                      className="card-title"
                    >
                      <h4>{category.category_name}</h4>
                    </Link>
                  </div>
                </div>
              ))}
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
                <Link to="/" onClick={scrollToTop}>
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
                  {products.slice(0, 5).map((item) => (
                    <div className="col-2" key={item.product_id}>
                      <Link
                        onClick={scrollToTop}
                        to={`/ProductDetail?product=${item.product_id}`}
                      >
                        <div className="cardss">
                          <div className={d('sale-label')}>
                            <span>-{item.product_discount}%</span>
                          </div>
                          <span className={d('boder')}></span>
                          <img src={item.product_img} alt={item.product_name} />
                          <h4 className="card-title">{item.product_name}</h4>
                          <div
                            className={d(
                              'price-item',
                              'd-flex',
                              'align-content-center'
                            )}
                          >
                            <span className={d('price')}>
                              {item.product_dsc.toLocaleString()}đ
                            </span>
                            <span className={d('old-price')}>
                              {item.product_price.toLocaleString()}đ
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
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
            <div className="col-6 ">
              <Link onClick={scrollToTop} to="/" className={d('banner-left')}>
                <img
                  src="https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/banner_1.jpg?1742273150136"
                  alt=""
                ></img>
              </Link>
            </div>
            <div className="col-6">
              <Link onClick={scrollToTop} to="/" className={d('banner-right')}>
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
                {categories.slice(0, 5).map((category) => (
                  <div className={d('block-cate')}>
                    <ul style={{ marginTop: '10px' }}>
                      <li>
                        <Link to={`/Product?category=${category.category_id}`}>
                          {category.category_name}
                        </Link>
                      </li>
                    </ul>
                  </div>
                ))}
                <div className={d('view-more')}>
                  <Link to="./">Mua sắm ngay bây giờ</Link>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="container">
                <div className="row  d-flex justify-content-between">
                  {products.slice(1, 5).map((product) => (
                    <li className={d('col-2 ')} key={product.product_id}>
                      <Link
                        onClick={scrollToTop}
                        to={`/ProductDetail?product=${product.product_id}`}
                      >
                        <div className="product-grid">
                          <div className={d('sale-label')}>
                            <span>{product.product_discount}%</span>
                          </div>
                          <img
                            src={product.product_img}
                            alt={product.product_name}
                          />
                          <h4 className="grid-title">{product.product_name}</h4>
                          <div className={d('price-items  ')}>
                            <span className={d('price')}>
                              {product.product_dsc}đ
                            </span>
                            <span className={d('old-price')}>
                              {product.product_price}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
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
                  {products
                    .filter((item) => item.category_id === 11)
                    .slice(0, 4)
                    .map((item) => (
                      <li className={d('col-2 ')} alt={item.product_name}>
                        <Link
                          onClick={scrollToTop}
                          to={`/ProductDetail?product=${item.product_id}`}
                        >
                          <div className="product-grid">
                            <img
                              src={`/${encodeURI(item.product_img)}`}
                              alt={item.product_name}
                            />

                            <h4 className="grid-title">{item.product_name}</h4>

                            <div className={d('price-items  ')}>
                              <span className={d('price')}>
                                {item.product_price}
                              </span>
                              {/* <span className={d('old-price')}></span> */}
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                </div>
              </div>
            </div>
            <div className={d('col-3 product_list_2')}>
              <div className={d('title-link')}>
                <h2>
                  <Link></Link>
                  Rau củ quả
                </h2>
                <div className={d('block-cate')}>
                  {categories.slice(0, 5).map((item) => (
                    <ul style={{ marginTop: '10px' }} key={item.category_id}>
                      <li>
                        <Link to={`/Product?category=${item.category_id}`}>
                          {item.category_name}
                        </Link>
                      </li>
                    </ul>
                  ))}
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
                  <Link to="./"></Link>Thực phẩm khô
                </h2>
                <div className={d('block-cate')}>
                  <ul style={{ marginTop: '10px' }}>
                    {categories.slice(0, 5).map((item) => (
                      <ul style={{ marginTop: '10px' }} key={item.category_id}>
                        <li>
                          <Link to={`/Product?category=${item.category_id}`}>
                            {item.category_name}
                          </Link>
                        </li>
                      </ul>
                    ))}
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
                  {products
                    .filter((product) => product.category_id === 12)
                    .slice(1, 5)
                    .map((product) => (
                      <li className={d('col-2 ')} key={product.product_id}>
                        <Link
                          onClick={scrollToTop}
                          to={`/ProductDetail?product=${product.product_id}`}
                        >
                          <div className="product-grid">
                            <div className={d('sale-label')}>
                              <span>{product.product_discount}%</span>
                            </div>
                            <img
                              src={product.product_img}
                              alt={product.product_name}
                            />
                            <h4 className="grid-title">
                              {product.product_name}
                            </h4>
                            <div className={d('price-items  ')}>
                              <span className={d('price')}>
                                {product.product_dsc}đ
                              </span>
                              <span className={d('old-price')}>
                                {product.product_price}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
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
              {news.slice(0, 4).map((item) => (
                <div className="col-3 item_block" key={item.new_id}>
                  <div>
                    <Link to="./" className={d('image-wrapper')}>
                      <img
                        src={`http://localhost:8000/${item.new_img}`}
                        alt={item.new_title}
                      />
                    </Link>
                    <div className={d('content_block')}>
                      <h3>
                        <Link
                          onClick={() => scrollToTop()}
                          to={`/NewsDetails?new=${item.new_id}`}
                        >
                          {item.new_title}
                        </Link>
                      </h3>
                      <div className={d('time-post d-flex flex-column')}>
                        <span>Tác giả Nguyễn Khắc Đạt |</span>
                        <span>15/08/2024</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* swap */}
    </div>
  )
}

export default Home
