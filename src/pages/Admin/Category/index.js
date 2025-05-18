import styles from './category.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import categoryApi from '../../../api/categoryApi'
import CategoryForm from './CategoryForm'
const d = classNames.bind(styles)

function Category() {
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
      console.log(response.data)
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
              <th>STT</th>
              <th>Tên danh mục</th>
              <th> Hành động</th>
            </tr>
          </thead>
          <tbody>
            {category?.map((item) => (
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
