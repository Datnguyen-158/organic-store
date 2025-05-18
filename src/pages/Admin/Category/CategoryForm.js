import React, { useState, useEffect } from 'react'
import categoryApi from '../../../api/categoryApi'

const CategoryForm = ({ category_id, onUpdate, onClose }) => {
  const [category, setCategory] = useState('')
  useEffect(() => {
    if (category_id) {
      categoryApi
        .getCategorybyID(category_id)
        .then((response) => {
          const data = response.data
          setCategory(data.category_name)
        })
        .catch((error) => {
          console.error('Có lỗi khi lấy thông tin:', error)
        })
    } else {
      // reset khi không phải edit
      setCategory('')
    }
  }, [category_id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const categorys = {
      category_name: category,
    }
    try {
      if (category_id) {
        // Sửa tài khoản
        await categoryApi.updateCategoriesById(category_id, categorys)
      } else {
        // Thêm tài khoản
        await categoryApi.addCategories(categorys)
      }
      onUpdate()
      onClose()
    } catch (err) {
      console.error(err)
      alert('Có lỗi xảy ra khi lưu .')
    }
  }

  return (
    <div className="form-popup111">
      <form className="form-container" onSubmit={handleSubmit}>
        <h4 className="mt-3" style={{ fontSize: '1.9rem' }}>
          Danh mục sản phẩm
        </h4>
        <div>
          <label className="name">Dòng</label>
          <input
            type="text"
            placeholder="Nhập dòng sản phẩm"
            name="CategoryParentName"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="form-bt">
          <button
            type="submit"
            style={{ fontSize: '1.6rem' }}
            className="btn btn-success"
          >
            Lưu
          </button>
          <button
            type="button"
            style={{ fontSize: '1.6rem' }}
            className="btn btn-warning"
            onClick={onClose}
          >
            Đóng
          </button>
        </div>
      </form>
    </div>
  )
}
export default CategoryForm
