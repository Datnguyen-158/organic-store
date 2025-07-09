import styles from './category.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import categoryApi from '../../../api/categoryApi'
import CategoryForm from './CategoryForm'
const d = classNames.bind(styles)

function Category() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filtered, setFiltered] = useState([])
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [category, setCategory] = useState(null)
  const [selectedId, setSelectedId] = useState(null)
  const openForm = (category_id = null) => {
    setSelectedId(category_id)
    setIsFormVisible(true)
  }

  // Đóng form
  const closeForm = () => {
    setIsFormVisible(false)
  }

  const get_all_category = async () => {
    try {
      const response = await categoryApi.getCategories()
      setCategory(response.data)

      if (!searchTerm.trim()) {
        setFiltered(response.data)
      }
    } catch (error) {
      console.error('Có lỗi khi lấy danh sách :', error)
    }
  }

  const deletecate = async (id) => {
    try {
      await categoryApi.deleteCategoriesById(id)
      get_all_category()
    } catch (error) {
      console.error('Có lỗi khi xóa danh muc:', error)
    }
  }
  useEffect(() => {
    get_all_category()
  }, [])
  const handleSearch = () => {
    const lowerSearch = searchTerm.toLowerCase()
    const result = category.filter((u) =>
      u.category_name.toLowerCase().includes(lowerSearch)
    )
    setFiltered(result)
  }

  const handleShowAll = () => {
    setSearchTerm('')
    setFiltered(category)
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
            placeholder="Tìm theo tên danh mục"
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
              <th>STT</th>
              <th>Tên danh mục</th>
              <th> Hành động</th>
            </tr>
          </thead>
          <tbody>
            {filtered?.map((item) => (
              <tr key={item.category_id}>
                <td>{item.category_id}</td>
                <td>{item.category_name}</td>
                <td>
                  <button
                    className="btn btn-warning "
                    style={{ marginRight: '15px' }}
                    onClick={() => openForm(item.category_id)}
                  >
                    Sửa
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deletecate(item.category_id)}
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
          <div className="overLay"></div>
          <CategoryForm
            category_id={selectedId}
            onUpdate={get_all_category}
            onClose={closeForm}
          />
        </>
      )}
    </div>
  )
}

export default Category
