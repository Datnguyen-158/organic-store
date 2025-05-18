import classNames from 'classnames/bind'
import styles from './product.scss'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import categoryApi from '../../../api/categoryApi'
import productApi from '../../../api/productApi'
import { useSearchParams } from 'react-router-dom'
const d = classNames.bind(styles)

function Product() {
  const [searchParams] = useSearchParams()
  const category_id = searchParams.get('category')
  const [categories, setCategories] = useState([])
  const [categoryID, setCategoryID] = useState('')
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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let res
        if (category_id) {
          res = await productApi.getShowProduct(category_id)
          const categorybyID = await categoryApi.getCategorybyID(category_id)
          // console.log(categorybyID)
          setCategoryID(categorybyID.data.category_name)
        } else {
          res = await productApi.getProduct()
          setCategoryID('Tất cả sản phẩm')
        }
        setProducts(res.data)
      } catch (err) {
        console.error('Lỗi lấy sản phẩm:', err)
      }
    }
    fetchProducts()
  }, [category_id])

  //////////////////////////////////////////////Selected price////////////////////////////////////////////////////
  const [selectedPrices, setSelectedPrices] = useState([])

  // Dữ liệu ví dụ người dùng chọn khoảng giá 1 và 3
  const handleFilter = () => {
    const params = {
      prices: selectedPrices.map(Number), // VD: [1, 3]
    }

    productApi
      .getFilteredProducts(params)
      .then((response) => {
        console.log('Full response:', response.data)
        setProducts(response.data) // <-- đây mới là mảng sản phẩm
      })
      .catch((error) => {
        console.error('Error fetching filtered products:', error)
      })
  }
  const handleCheckboxChange = (e, value) => {
    const checked = e.target.checked
    const numberValue = Number(value) // Ép kiểu

    if (checked) {
      setSelectedPrices((prev) => [...prev, numberValue])
    } else {
      setSelectedPrices((prev) => prev.filter((item) => item !== numberValue))
    }
  }

  return (
    <div>
      <section className={d('bread_crumb')}>
        <div className="container ">
          <div className={d('bread_crumb_head  align-content-center ')}>
            <h1>{categoryID}</h1>
            <div className={d('link_bread_crumb ')}>
              <Link to="./Home">Trang chủ </Link>

              <span style={{ fontWeight: 'bolder' }}>{categoryID}</span>
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
                  {categories.map((item) => (
                    <li className={d('nav-item')} key={item.category_id}>
                      <Link to={`/Product?category=${item.category_id}`}>
                        {item.category_name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={d('aside-filter')}>
              <div className={d('aside-item')}>
                <div className={d('aside-title')}>Lọc sản phẩm</div>

                <div className={d('aside-content')}>
                  <div className={d('aside-titles')}>Giá sản phẩm</div>
                  <button onClick={handleFilter}>Lọc sản phẩm</button>
                  <ul>
                    <li className={d('aside-price')}>
                      <label>
                        <input
                          type="checkbox"
                          onChange={(e) => handleCheckboxChange(e, 1)}
                        ></input>
                        Giá dưới 50.000đ
                      </label>
                    </li>{' '}
                    <li className={d('aside-price')}>
                      <label>
                        <input
                          type="checkbox"
                          onChange={(e) => handleCheckboxChange(e, 2)}
                        ></input>
                        50.000đ - 80.000đ
                      </label>
                    </li>{' '}
                    <li className={d('aside-price')}>
                      <label>
                        <input
                          type="checkbox"
                          onChange={(e) => handleCheckboxChange(e, 3)}
                        ></input>
                        80.000đ - 120.000đ
                      </label>
                    </li>{' '}
                    <li className={d('aside-price')}>
                      <label>
                        <input
                          type="checkbox"
                          onChange={(e) => handleCheckboxChange(e, 4)}
                        ></input>
                        120.000 - 150.000đ
                      </label>
                    </li>{' '}
                    <li className={d('aside-price')}>
                      <label>
                        <input
                          type="checkbox"
                          onChange={(e) => handleCheckboxChange(e, 5)}
                        ></input>
                        Giá trên 150.000đ
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
                {products?.map((item) => (
                  <li className={d('col-3')} key={item.product_id}>
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
