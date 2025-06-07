// import React, { useState, useEffect } from 'react'
// import productApi from '../../../api/productApi'
// import categoryApi from '../../../api/categoryApi'

// const ProductForm = ({ id, onUpdate, onClose }) => {
//   const [product_name, setProduct_name] = useState('')
//   const [product_price, setProduct_price] = useState('')
//   const [category_id, setCategory_id] = useState([])
//   const [product_dsc, setProduct_dsc] = useState([])
//   const [product_discount, setProduct_discount] = useState(0)
//   const [product_quantity, setProduct_quantity] = useState('')
//   const [imageFile, setImageFile] = useState(null) // file ảnh mới chọn
//   const [previewImage, setPreviewImage] = useState(null) // ảnh xem trước
//   useEffect(() => {
//     // Gọi tất cả category parent để populate dropdown
//     if (id) {
//       productApi
//         .getShowProductByID(id)
//         .then((response) => {
//           const data = response
//           console.log(data)
//           setProduct_name(data.data.product_name)
//           setProduct_price(data.data.product_price)
//           setCategory_id(data.data.category_id)
//           setProduct_dsc(data.data.product_dsc)
//           setProduct_quantity(data.data.product_quantity)
//           setPreviewImage(`http://127.0.0.1:8000/${data.data.product_img}`)
//           //   console.log(data.data.product_name)
//           setImageFile(null)
//         })
//         .catch((error) => {
//           console.error('Có lỗi khi lấy thông tin:', error)
//         })
//     } else {
//       setProduct_name('')
//       setProduct_price('')
//       setProduct_dsc('')
//       setCategory_id('')
//       setProduct_quantity('')
//       setPreviewImage(null)
//       setImageFile(null)
//     }
//   }, [id])

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const formData = new FormData()
//     formData.append('product_name', product_name)
//     formData.append('category_id', category_id)
//     formData.append('product_price', product_price)
//     formData.append('product_dsc', product_dsc)
//     formData.append('product_discount', product_discount)
//     formData.append('product_quantity', product_quantity)
//     // formData.append('previewImage', previewImage)
//     if (!imageFile && !previewImage) {
//       alert('Bạn cần chọn ảnh sản phẩm!')
//       return
//     }
//     if (imageFile) {
//       formData.append('product_img', imageFile)
//     }

//     // for (let [key, value] of formData.entries()) {
//     //   console.log(`${key}:`, value)
//     // }
//     try {
//       if (id) {
//         await productApi.updateProductsById(id, formData) // PUT hoặc POST tùy API
//       } else {
//         console.log(formData)
//         await productApi.addProducts(formData) // POST
//       }
//       onUpdate()
//       onClose()
//     } catch (err) {
//       console.error(err)
//       alert('Lỗi khi lưu sản phẩm')
//     }
//   }

//   return (
//     <div className="form-popup111" style={{ width: '700px' }}>
//       <form className="form-container" onSubmit={handleSubmit}>
//         <h4 className="mt-3">Thông tin loại xe</h4>
//         <div className="mt-3 row">
//           <div className="col-6">
//             <div>
//               <label>Tên sản phẩm</label>
//               <input
//                 type="text"
//                 value={product_name}
//                 onChange={(e) => setProduct_name(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label>Tên danh mục</label>
//               <input
//                 type="text"
//                 value={category_id}
//                 onChange={(e) => setCategory_id(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label>Giảm giá (%)</label>
//               <input
//                 type="number"
//                 value={product_discount}
//                 onChange={(e) => setProduct_discount(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label>Giá gốc</label>
//               <input
//                 type="text"
//                 value={product_price}
//                 onChange={(e) => setProduct_price(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label>Giá giảm</label>
//               <input
//                 type="text"
//                 value={product_dsc}
//                 onChange={(e) => setProduct_dsc(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label>Số lượng sản phẩm</label>
//               <input
//                 type="text"
//                 value={product_quantity}
//                 onChange={(e) => setProduct_quantity(e.target.value)}
//                 required
//               />
//             </div>
//           </div>
//           <div className="col-6 d-flex flex-column align-items-center justify-content-center">
//             {previewImage && (
//               <img
//                 src={previewImage}
//                 alt={product_name}
//                 style={{ width: 200, marginTop: 10 }}
//               />
//             )}
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => {
//                 const file = e.target.files[0]
//                 if (file) {
//                   setImageFile(file)
//                   setPreviewImage(URL.createObjectURL(file)) // xem trước ảnh mới
//                 }
//               }}
//             />
//           </div>
//         </div>

//         <div className="form-bt">
//           <button
//             style={{ fontSize: '1.6rem' }}
//             type="submit"
//             className="btn btn-success"
//           >
//             Lưu
//           </button>
//           <button
//             style={{ fontSize: '1.6rem' }}
//             type="button"
//             className="btn btn-secondary"
//             onClick={onClose}
//           >
//             Đóng
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default ProductForm
import React, { useState, useEffect } from 'react'
import newsApi from '../../../api/newsApi'

const ProductForm = ({ id, onUpdate, onClose }) => {
  const [new_title, setNew_title] = useState('')
  const [new_content, setNew_content] = useState('')
  const [imageFile, setImageFile] = useState(null) // File ảnh mới chọn
  const [previewImage, setPreviewImage] = useState(null) // Ảnh xem trước

  useEffect(() => {
    if (id) {
      newsApi
        .getNewsbyID(id)
        .then((response) => {
          const data = response.data // Truy cập data bên trong response
          // console.log('Dữ liệu sản phẩm khi sửa:', data)
          setNew_title(data.new_title)
          setNew_content(data.new_content)
          setPreviewImage(`http://127.0.0.1:8000/${encodeURI(data.new_img)}`)
          setImageFile(null) // Reset imageFile khi load dữ liệu sửa
          // data.forEach((product) => {
          //   console.log('Đường dẫn ảnh:', product.product_img)
          // })
        })
        .catch((error) => {
          console.error('Lỗi khi lấy thông tin sản phẩm để sửa:', error)
        })
    } else {
      // Reset form khi không có ID (chế độ thêm mới)
      setNew_title('')
      setNew_content('')
      setPreviewImage(null)
      setImageFile(null)
    }
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('new_title', new_title)
    formData.append('new_content', new_content)
    if (!imageFile && !id) {
      alert('Bạn cần chọn ảnh tin tức!')
      return // Ngăn không cho submit form nếu không có ảnh
    }

    if (imageFile) {
      formData.append('new_img', imageFile)
    }

    // console.log(
    //   'Dữ liệu FormData trước khi gửi:',
    //   Array.from(formData.entries())
    // )

    try {
      if (id) {
        console.log('Đang gọi API sửa tin tức với ID:', id)
        await newsApi.updateNews(id, formData) // Giả sử API sửa dùng PUT hoặc POST
        alert('Cập nhật tin tức thành công!')
      } else {
        console.log('Đang gọi API thêm mới tin tức')
        await newsApi.addNews(formData)
        alert('Thêm tin tức thành công!')
      }
      onUpdate()
      onClose()
    } catch (error) {
      console.error('Lỗi khi lưu tin tức:', error)
      alert('Lỗi khi lưu tin tức!')
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImageFile(file)
      setPreviewImage(URL.createObjectURL(file)) // Xem trước ảnh mới
    }
  }

  return (
    <div className="form-popup111" style={{ width: '700px' }}>
      <form className="form-container" onSubmit={handleSubmit}>
        <h4 className="mt-3">
          {id ? 'Sửa thông tin tin tức' : 'Thêm mới tin tức'}
        </h4>
        <div className="mt-3 row">
          <div className="col-6">
            <div>
              <label>Tiêu đề</label>
              <input
                type="text"
                value={new_title}
                onChange={(e) => setNew_title(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Nội dung</label>
              <input
                type="text"
                value={new_content}
                onChange={(e) => setNew_content(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-6 d-flex flex-column align-items-center justify-content-center">
            {previewImage && (
              <img
                src={previewImage}
                alt=""
                style={{ width: 200, marginTop: 10, marginBottom: 10 }}
              />
            )}
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
        </div>

        <div className="form-bt">
          <button
            style={{ fontSize: '1.6rem' }}
            type="submit"
            className="btn btn-success"
          >
            {id ? 'Lưu thay đổi' : 'Lưu'}
          </button>
          <button
            style={{ fontSize: '1.6rem' }}
            type="button"
            className="btn btn-secondary"
            onClick={onClose}
          >
            Đóng
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProductForm
