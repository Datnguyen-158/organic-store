import classNames from 'classnames/bind'
import styles from './product.scss'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import categoryApi from '../../../api/categoryApi'
import productApi from '../../../api/productApi'
import { useSearchParams } from 'react-router-dom'
import newsApi from '../../../api/newsApi'
const d = classNames.bind(styles)

function NewsDetails() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const [searchParams] = useSearchParams()
  const category_id = searchParams.get('category')
  const [categories, setCategories] = useState([])
  const [fetchNew, setfetchNew] = useState([])

  const news_id = searchParams.get('new')
  const [news, setNews] = useState([])
  const [categoryID, setCategoryID] = useState('')
  const [newID, setNewID] = useState('')
  const [products, setProducts] = useState([])
  useEffect(() => {
    console.log('Query new:', news_id)
    const fetchNews = async () => {
      try {
        let response
        if (news_id) {
          response = await newsApi.getNewsbyID(news_id)
          setNews(response.data)
          setNewID(response.data.new_title)
        }
      } catch (err) {
        console.error('Lỗi lấy tin tuc:', err)
      }
    }
    fetchNews()
  }, [news_id])
  useEffect(() => {
    newsApi
      .getNews()
      .then((response) => {
        setfetchNew(response.data)
      })
      .catch((error) => {
        console.error('Error loading categories', error)
      })
  }, [])
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

  return (
    <div>
      <section className={d('bread_crumb')}>
        <div className="container ">
          <div className={d('bread_crumb_head  align-content-center ')}>
            <h1>{newID}</h1>
            <div className={d('link_bread_crumb ')}>
              <Link to="./Home">Trang chủ </Link>

              <span style={{ fontWeight: 'bolder' }}>{newID}</span>
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
                <div className={d('aside-title')}>Bài viết liên quan</div>
                <div className="aside-content">
                  {fetchNew.slice(0, 4).map((item) => (
                    <div className={d('aside-content-news')}>
                      <Link
                        onClick={() => scrollToTop()}
                        to={`/NewsDetails?new=${item.new_id}`}
                      >
                        <img
                          src={`http://localhost:8000/${item.new_img}`}
                          alt=""
                        />
                        <div className="news-content">{item.new_title}</div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
          <section className={d('main_container col-9')}>
            <div className="container">
              {news && (
                <div className="nd-article">
                  <h1>{news.new_title}</h1>
                  <div className="article-details">{news.new_content}</div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default NewsDetails
