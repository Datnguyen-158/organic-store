import styles from './product.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import ProductForm from './ProductForm'
import productApi from '../../../api/productApi'
const d = classNames.bind(styles)
function Product() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filtered, setFiltered] = useState([])
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [product, setProduct] = useState(null)
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
      const response = await productApi.getProduct()
      setProduct(response.data)
      if (!searchTerm.trim()) {
        setFiltered(response.data)
        console.log(response.data)
      }
    } catch (error) {
      console.error('Có lỗi khi lấy danh sách :', error)
    }
  }
  const deleteproduct = async (id) => {
    try {
      await productApi.deleteProductsById(id)
      get_all()
    } catch (error) {
      console.error('Có lỗi khi xóa sản phẩm:', error)
    }
  }
  useEffect(() => {
    get_all()
  }, [])
  const handleSearch = () => {
    const lowerSearch = searchTerm.toLowerCase()
    const result = product.filter((u) =>
      u.product_name.toLowerCase().includes(lowerSearch)
    )
    setFiltered(result)
  }

  const handleShowAll = () => {
    setSearchTerm('')
    setFiltered(product)
  }
  return (
    <div className="account-admin">
      <div className="add-account d-flex justify-content-between align-items-center mb-3">
        <button className="btn btn-success" type="" onClick={() => openForm()}>
          Thêm
        </button>
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ height: '50px' }}
        >
          <input
            type="text"
            style={{ fontSize: '14px' }}
            className="form-control h-75"
            placeholder="Tìm theo tên sản phẩm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Tìm
          </button>
          <button
            className="btn btn-secondary"
            onClick={handleShowAll}
            style={{ width: '200px' }}
          >
            Tất cả
          </button>
        </div>
      </div>
      <div className="table-add-account pt-4">
        <table>
          <thead>
            <tr>
              <th>Tên sản phẩm</th>
              <th> Danh mục</th>
              <th> Ảnh sản phẩm</th>
              <th>Giá gốc</th>
              <th>Giá giảm</th>
              <th>Số lượng (gram)</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(product) &&
              filtered?.map((item, index) => (
                <tr key={index}>
                  <td>{item.product_name}</td>
                  <td>{item.category_id}</td>
                  <td>
                    <img
                      src={`http://127.0.0.1:8000/${item.product_img}`}
                      alt={item.product_name}
                      style={{ width: '100px' }}
                    />
                  </td>
                  <td>{item.product_price}</td>
                  <td>{item.product_dsc}</td>
                  <td>{item.product_quantity}</td>

                  <td>
                    <button
                      className="btn btn-warning "
                      style={{ margin: '5px' }}
                      onClick={() => openForm(item.product_id)}
                    >
                      Sửa
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteproduct(item.product_id)}
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

export default Product
