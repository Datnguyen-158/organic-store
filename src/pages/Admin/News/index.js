import styles from './product.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import ProductForm from './ProductForm'
import newsApi from '../../../api/newsApi'
const d = classNames.bind(styles)
function News() {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [news, setNews] = useState(null)
  const [selectedId, setSelectedId] = useState(null)
  const openForm = (id = null) => {
    setSelectedId(id)
    setIsFormVisible(true)
  }

  // Đóng form
  const closeForm = () => {
    setIsFormVisible(false)
  }
  const get_all = async () => {
    try {
      const response = await newsApi.getNews()
      setNews(response.data)
      console.log(response.data)
    } catch (error) {
      console.error('Có lỗi khi lấy danh sách :', error)
    }
  }
  const deleteproduct = async (id) => {
    try {
      await newsApi.deleteNews(id)
      get_all()
    } catch (error) {
      console.error('Có lỗi khi xóa sản phẩm:', error)
    }
  }
  useEffect(() => {
    get_all()
  }, [])

  return (
    <div className="account-admin">
      <div className="add-account">
        <button className="btn btn-success" type="" onClick={() => openForm()}>
          Thêm
        </button>
      </div>
      <div className="table-add-account pt-4">
        <table>
          <thead>
            <tr>
              <th>Id tin tức</th>
              <th>Tiêu đề</th>
              <th>Nội dung</th>
              <th>Ảnh tin tức</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(news) &&
              news?.map((item, index) => (
                <tr key={index}>
                  <td>{item.new_id}</td>
                  <td>
                    <div className="long-text">{item.new_title}</div>
                  </td>

                  <td>
                    <div className="long-text">{item.new_content}</div>
                  </td>
                  <td>
                    <img
                      src={`http://127.0.0.1:8000/${item.new_img}`}
                      alt=""
                      style={{ width: '100px' }}
                    />
                  </td>

                  <td>
                    <button
                      className="btn btn-warning "
                      style={{ margin: '5px' }}
                      onClick={() => openForm(item.new_id)}
                    >
                      Sửa
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteproduct(item.new_id)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {isFormVisible && (
        <>
          <div className="overLay"></div> {/* Lớp overlay */}
          <ProductForm
            id={selectedId}
            onUpdate={get_all}
            onClose={closeForm}
          />{' '}
          {/* Form */}
        </>
      )}
    </div>
  )
}

export default News
