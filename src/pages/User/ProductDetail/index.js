import classNames from 'classnames/bind'
import styles from './productdetail.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import productApi from '../../../api/productApi'
import cartApi from '../../../api/cartApi'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
const d = classNames.bind(styles)

function ProductDetail() {
  const clearViewedProducts = () => {
    localStorage.removeItem('viewedProducts')
    setViewedProducts([]) // Xóa khỏi state nếu bạn đang dùng useState
  }
  const navigate = useNavigate()
  const [weight, setWeight] = useState([])
  const [price, setPrice] = useState('')
  const [Selectweight, setSelectWeight] = useState('')
  const user_id = localStorage.getItem('user_id')
  const [searchParams] = useSearchParams()
  const product_id = searchParams.get('product')
  const [product, setProduct] = useState(null)
  const [products, setProducts] = useState([])
  // const [productdetails, setProductdetails] = useState(null)
  const [productdetails, setProductdetails] = useState([])
  const [productDetail_content, setProductDetailContent] = useState('')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [viewedProducts, setViewedProducts] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('1')
  const { fetchCartCount } = useContext(CartContext)
  //Dong goi du lieu dieu huong sang trang thanh toan

  const handleBuyNow = () => {
    if (!Selectweight) {
      alert('Vui lòng chọn trọng lượng!')
      return
    }
    const selectedProduct = [
      {
        product_id: product.product_id,
        product_name: product.product_name,
        product_img: product.product_img,
        Quantity: quantity,
        Weight: Selectweight.weight, // Chỉ lấy thuộc tính weight
        ProductPrice: price,
        product_weights_id: Selectweight.product_weights_id,
      },
    ]

    navigate('/Checkout', { state: { selectedProducts: selectedProduct } })
  }
  //thêm vào giỏ hàng
  const datacart = {
    user_id: user_id,
    product_id: product_id,
    product_weights_id: Selectweight?.product_weights_id,
    cart_quantity: quantity,
  }
  const handleAddToCart = async () => {
    if (!Selectweight) {
      alert('Vui lòng chọn trọng lượng!')
      return
    }
    try {
      cartApi.addtocart(datacart)
      fetchCartCount()
      alert('Đã thêm vào giỏ hàng thành công!')
    } catch (error) {
      console.error('Lỗi thêm vào giỏ:', error)
      alert('Có lỗi xảy ra khi thêm vào giỏ hàng.')
    }
  }

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        let res
        let respon

        let resp
        let resWeight
        if (product_id) {
          res = await productApi.getShowProductByID(product_id)
          const productData = res.data
          // console.log(res?.data.product_quantity)

          resWeight = await productApi.getshowWeightByProduct(product_id)
          setWeight(resWeight)
          const defaultWeight = resWeight[0]
          setSelectWeight(defaultWeight)
          setPrice(defaultWeight.product_price)
          setCurrentImageIndex(0)
          respon = await productApi.getShowProductDetailByIdProduct(product_id)
          setProductdetails(respon.data)
          console.log('abc', respon)
          setProductDetailContent(respon.data?.[0]?.productDetail_content || '')

          resp = await productApi.getProduct()

          setProducts(resp.data)

          setProduct(productData)
          addViewedProduct({
            product_id: productData.product_id,
            product_name: productData.product_name,
            product_img: productData.product_img,
            product_price: productData.product_price,
            product_dsc: productData.product_dsc,
            product_discount: productData.product_discount,
          })
          setViewedProducts(getViewedProducts(productData.product_id))
        }
      } catch (err) {
        console.error('Lỗi lấy sản phẩm:', err)
      }
    }
    fetchProductDetails()
    window.scrollTo({ top: 50, behavior: 'smooth' })
  }, [product_id])
  useEffect(() => {
    const stored = localStorage.getItem('viewedProducts')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setViewedProducts(parsed)
      } catch (error) {
        console.error('Lỗi parse JSON:', error)
      }
    }
  }, [])
  if (!product) {
    return <div>Đang tải chi tiết sản phẩm...</div>
  }

  function addViewedProduct(product) {
    const viewed = JSON.parse(localStorage.getItem('viewedProducts')) || []

    // Không thêm nếu đã tồn tại
    const exists = viewed.find((p) => p.product_id === product.product_id)
    if (!exists) {
      viewed.unshift({
        product_id: product.product_id,
        product_name: product.product_name,
        product_img: product.product_img,
        product_price: product.product_price,
        product_dsc: product.product_dsc,
        product_discount: product.product_discount,
      })
      const limited = viewed.slice(0, 4) // Tối đa 10 sản phẩm
      localStorage.setItem('viewedProducts', JSON.stringify(limited))
    }
  }

  function getViewedProducts(currentId) {
    const all = JSON.parse(localStorage.getItem('viewedProducts')) || []
    return all.filter((p) => p.product_id !== currentId) // Loại trừ sản phẩm đang xem
  }

  // console.log(product?.product_quantity)
  const increaseQuantity = () => {
    const weightInt = parseInt(Selectweight?.weight) // "500g" => 500

    const totalGramsOrdered = (quantity + 1) * weightInt // giả sử người dùng muốn tăng thêm 1
    const maxAvailableGrams = product?.product_quantity || 0

    if (totalGramsOrdered <= maxAvailableGrams) {
      setQuantity((prev) => prev + 1)
    } else {
      alert('Vượt quá số lượng hiện có!')
    }
  }
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1)
  }

  const handlePrevImage = () => {
    if (!productdetails || productdetails.length === 0) return

    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productdetails.length - 1 : prevIndex - 1
    )
  }

  const handleNextImage = () => {
    if (!productdetails || productdetails.length === 0) return

    setCurrentImageIndex((prevIndex) =>
      prevIndex === productdetails.length - 1 ? 0 : prevIndex + 1
    )
  }

  const tabs = [
    {
      id: '1',
      label: 'THÔNG TIN SẢN PHẨM',
      content: productDetail_content,
    },
    {
      id: '2',
      label: 'CHÍNH SÁCH ĐỔI TRẢ',
      content: 'Tham khảo thêm thông tin tại chính sách đổi trả hàng',
    },
    {
      id: '3',
      label: 'HƯỚNG DẪN BẢO QUẢN',
      content: `ND Fresh là hệ thống cửa hàng thực phẩm sạch uy tín nhất ở Việt Nam, chuyên cung cấp thực phẩm sạch tới từng bếp ăn của gia đình bạn.
Tầm nhìn: Được nuôi trồng, chế biến theo phương Bio (sinh học), Organic (hữu cơ), Eco (sinh thái); cam kết không bán hàng giả, hàng nhái và hàng kém chất lượng. Sản phẩm được giao đến tay khách hàng luôn đúng cam kết, đúng chất lượng niệm yết, luôn được bảo quản trong môi trường lý tưởng, đảm bảo vệ sinh an toàn thực phẩm.
Mục tiêu: Sản phẩm được giao đến tay khách hàng luôn đúng cam kết, đúng chất lượng niệm yết, luôn được bảo quản trong môi trường lý tưởng, đảm bảo vệ sinh an toàn thực phẩm.
`,
    },
  ]
  const handleTabClick = (tabId) => {
    // console.log('Tab clicked:', tabId)
    setActiveTab(tabId)
  }

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content || ''

  return (
    <div>
      <section className={d('bread_crumb')}>
        <div className="container ">
          <div className={d('bread_crumb_head  align-content-center ')}>
            <h1>{product.product_name}</h1>
            <div className={d('link_bread_crumb ')}>
              <Link to="./Home">Trang chủ </Link>
              <li>
                <Link to="./">
                  <span>Sản phẩm bán chạy</span>
                </Link>
              </li>
              <li>
                <strong>
                  <span>{product.product_name}</span>
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
                    <button
                      onClick={handlePrevImage}
                      className="mb-2 btn btn-light"
                    >
                      <FontAwesomeIcon icon={faArrowUp} />
                    </button>

                    {Array.isArray(productdetails) &&
                      productdetails?.map((details, index) => (
                        <div
                          key={details.productDetail_id}
                          className={d(
                            `swiper-slider swiper-slide-active ${
                              details.productDetail_id === currentImageIndex
                                ? 'border border-primary'
                                : ''
                            }`
                          )}
                        >
                          <img
                            src={`http://localhost:8000/${details.productDetail_image}`}
                            alt=""
                          ></img>
                        </div>
                      ))}
                    <button
                      onClick={handleNextImage}
                      className="mt-2 btn btn-light"
                    >
                      <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                  </div>
                </div>
                <div className={d('col-10')}>
                  <div className={d('swiper-container')}>
                    <Link to="./">
                      <img
                        src={
                          Array.isArray(productdetails) &&
                          productdetails.length > 0
                            ? `http://localhost:8000/${productdetails[currentImageIndex]?.productDetail_image}`
                            : product?.product_img
                        }
                        alt={product.product_name}
                        style={{
                          width: '100%',
                          height: '500px',
                          objectFit: 'contain',
                        }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={d('col-4 detail-pro')}>
            <div className={d('nd-info-product')}>
              <h1>{product.product_name}</h1>
              <div className={d('price-box')}>
                <span className={d('price')}>
                  {price.toLocaleString('vi-VN')}đ
                </span>
                <span className={d('old-price')}>
                  {(price * 1.5).toLocaleString('vi-VN')}đ
                </span>
                <span className={d('save-price d-block')}>
                  Tiết kiệm :
                  <span className={d('saless')}>
                    {(price * 1.5 - price).toLocaleString()}₫
                    <span> so với giá thị trường</span>
                  </span>
                </span>
              </div>
              <div className={d('summary')}>
                {Array.isArray(productdetails) &&
                  productdetails
                    ?.slice(0, 1)
                    ?.map((details) => <p>{details.productDetail_desc}</p>)}
              </div>
              <div className={d('form-product')}>
                <form action="" method="post">
                  <div className={d('select-swatch')}>
                    <div className={d('swatch')}>
                      <div className={d('header')}>Trọng lượng</div>

                      <div className={d('swatch-elements d-flex')}>
                        {weight?.map((item) => (
                          <div
                            className={d('swatch-element', {
                              active: Selectweight === item,
                            })}
                            onClick={() => {
                              setSelectWeight(item)
                              setPrice(item.product_price)
                            }}
                          >
                            <label for="">{item.weight}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={d('form-group')}>
                    <div className={d('custom-btn-number')}>
                      <label for="">Số lượng</label>
                      <div className={d('custom-btn-numbers')}>
                        <button
                          type="button"
                          className={d('tru')}
                          onClick={decreaseQuantity}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <input type="text" value={quantity}></input>
                        <button
                          type="button"
                          className={d('cong')}
                          onClick={increaseQuantity}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </div>
                    <div className={d('btn-muangay d-inline-block')}>
                      <button
                        type="button"
                        className={d('btn-buy-now')}
                        onClick={handleBuyNow}
                      >
                        Mua Ngay
                      </button>
                    </div>
                    <div className={d('btn-mua')}>
                      <button
                        className={d('btn_buy ')}
                        type="button"
                        onClick={handleAddToCart}
                      >
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
            {tabs?.map((tab) => (
              <li
                className={d('nav-item', { active: activeTab === tab.id })}
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                style={{ cursor: 'pointer' }}
              >
                <Link>{tab.label}</Link>
              </li>
            ))}
          </ul>
          <div className={d('tab-content')}>
            {tabs?.map((tab) => (
              <div
                key={tab.id}
                className={d('tab-panes', { active: activeTab === tab.id })}
              >
                <p>{tab.content}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={d('nd-similar-product')}>
          <div className={d('home-title')}>
            <Link to="./">Sản phẩm liên quan</Link>
          </div>
          <section className={d('main_container col-12')}>
            <div className="container">
              <div className="row">
                {products
                  ?.filter(
                    (p) =>
                      p.category_id === product.category_id &&
                      p.product_id !== product.product_id
                  )
                  ?.slice(0, 6)
                  ?.map((pro) => (
                    <li className={d('col-2')}>
                      <Link
                        to={`/ProductDetail?product=${pro.product_id}`}
                        key={pro.product_id}
                      >
                        <div className="product-grids">
                          <div className={d('sale-labels')}>
                            <span>{pro.product_discount}%</span>
                          </div>
                          <div className={d('product-transition')}>
                            <img src={pro.product_img} alt={pro.product_name} />
                          </div>

                          <h4 className="grid-title">{pro.product_name}</h4>
                          <div className={d('price-items')}>
                            <span className={d('price')}>
                              {pro.product_dsc}đ
                            </span>
                            <span className={d('old-price')}>
                              {pro.product_price}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
              </div>
            </div>
          </section>
        </div>
        <div className={d('section-recent-view')}>
          <div className={d('home-title')}>
            <span>Sản phẩm đã xem</span>
          </div>
          <button onClick={clearViewedProducts}>Clear</button>

          <section className={d('main_container col-12')}>
            <div className="container">
              <div className="row">
                {viewedProducts?.map((item, index) => (
                  <li className={d('col-2')} key={index}>
                    <Link to={`/ProductDetail?product=${item.product_id}`}>
                      <div className="product-grids">
                        <div className={d('sale-labels')}>
                          <span>{item.product_discount}%</span>
                        </div>
                        <div className={d('product-transition')}>
                          <img src={item.product_img} alt={item.product_name} />
                        </div>

                        <h4 className="grid-title">{item.product_name}</h4>
                        <div className={d('price-items')}>
                          <span className={d('price')}>
                            {item.product_dsc}đ
                          </span>
                          <span className={d('old-price')}>
                            {item.product_price}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
