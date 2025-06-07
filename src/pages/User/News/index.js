import classNames from 'classnames/bind'
import styles from './news.scss'
import { Link } from 'react-router-dom'
import newsApi from '../../../api/newsApi'
import { useState, useEffect } from 'react'
const d = classNames.bind(styles)
function News() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
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
            {news.map((item) => (
              <div className="col-3 item_block">
                <Link
                  onClick={() => scrollToTop()}
                  to={`/NewsDetails?new=${item.new_id}`}
                  className={d('image-wrapper')}
                >
                  <img
                    src={`http://localhost:8000/${item.new_img}`}
                    alt=""
                  ></img>
                </Link>
                <div className={d('content_blockk')}>
                  <h3>
                    <Link
                      onClick={() => scrollToTop()}
                      to={`/NewsDetails?new=${item.new_id}`}
                    >
                      {item.new_title}
                    </Link>
                  </h3>
                  <div className={d('article-sum')}>{item.new_content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
