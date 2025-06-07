import React, { useState, useEffect, useId } from 'react'
import axios from 'axios'
import receiverApi from '../../../api/receiverApi'
import './style.css'

const AddAddress = ({ onSuccess, onClose, id }) => {
  const [userId, setUserId] = useState(localStorage.getItem('user_id'))

  useEffect(() => {
    const handleStorageChange = () => {
      setUserId(localStorage.getItem('user_id'))
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])
  console.log('đây là:', userId)
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [specificAddress, setSpecificAddress] = useState('')
  const [provinces, setProvinces] = useState([])
  const [districts, setDistricts] = useState([])
  const [communes, setCommunes] = useState([])
  const [selectedProvince, setSelectedProvince] = useState('')
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const [selectedCommune, setSelectedCommune] = useState('')
  useEffect(() => {
    axios
      .get('https://api.mysupership.vn/v1/partner/areas/province')
      .then((response) => {
        setProvinces(response.data.results)
        console.log(response.data.results)
      })
      .catch((error) => {
        console.error('Error fetching provinces:', error)
      })
  }, [])

  // Lấy danh sách Huyện khi chọn Tỉnh
  const handleProvinceChange = (e) => {
    const provinceId = e.target.value
    const provinceName = provinces.find(
      (province) => province.code === e.target.value
    )
    console.log(provinceName.name)
    setSelectedProvince(provinceName)

    setSelectedDistrict('') // Reset huyện
    setCommunes([]) // Reset xã

    if (provinceId) {
      axios
        .get('https://api.mysupership.vn/v1/partner/areas/district', {
          params: { province: provinceId },
        })
        .then((response) => {
          setDistricts(response.data.results)
        })
        .catch((error) => {
          console.error('Error fetching districts:', error)
        })
    } else {
      setDistricts([])
    }
  }
  // Lấy danh sách Xã khi chọn Huyện
  const handleDistrictChange = (e) => {
    const districtId = e.target.value
    const districtName = districts.find(
      (district) => district.code === e.target.value
    )
    setSelectedDistrict(districtName)

    if (districtId) {
      axios
        .get('https://api.mysupership.vn/v1/partner/areas/commune', {
          params: { district: districtId },
        })
        .then((response) => {
          setCommunes(response.data.results)
        })
        .catch((error) => {
          console.error('Error fetching communes:', error)
        })
    } else {
      setCommunes([])
    }
  }
  const handleCommuneChange = (e) => {
    const communeId = e.target.value
    const communeName = communes.find(
      (commune) => commune.code === e.target.value
    )
    setSelectedCommune(communeName)
  }

  useEffect(() => {
    if (id) {
      receiverApi
        .getShowByID(id)
        .then((response) => {
          const data = response.data
          setFullName(data.receiver_name)
          setPhone(data.receiver_phone)
          setSpecificAddress(data.receiver_desc)
          setSelectedProvince(data.receiver_city)
          setSelectedDistrict(data.receiver_district)
          setSelectedCommune(data.receiver_commune)
          console.log(data)
        })
        .catch((error) => {
          console.error('Có lỗi khi lấy thông tin tài khoản:', error)
        })
    } else {
      // reset khi không phải edit
      setFullName('')
      setPhone('')
      setSpecificAddress('')
      setSelectedProvince('')
      setSelectedDistrict('')
      setSelectedCommune('')
    }
  }, [userId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      user_id: userId,
      receiver_name: fullName,
      receiver_phone: phone,
      receiver_desc: specificAddress,
      receiver_city: selectedProvince.name || selectedProvince,
      receiver_district: selectedDistrict.name || selectedDistrict,
      receiver_type: 0,
      receiver_commune: selectedCommune.name || selectedCommune,
    }
    // console.log(data)

    try {
      if (id) {
        receiverApi
          .updateAddress(id, data)
          .then(() => {
            console.log('Cập nhật địa chỉ thành công')
          })
          .catch((error) => {
            console.error('Có lỗi khi cập nhật địa chỉ:', error)
          })
      } else {
        receiverApi.addAddress(data).then(() => {
          console.log('Thêm địa chỉ thành công')
        })
      }
      onSuccess()
      onClose()
    } catch (err) {
      console.error(err)
      alert('Thêm địa chỉ thành công')
    }
  }
  // console.log(userId)
  return (
    <>
      <div className="form-popup">
        <h6>Thêm địa chỉ mới</h6>
        <input
          type="text"
          placeholder="Họ tên"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Số điện thoại"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="text"
          placeholder="Địa chỉ"
          value={specificAddress}
          onChange={(e) => setSpecificAddress(e.target.value)}
        />
        <div className="row mt-4">
          <div className="col-md-4">
            <select
              value={selectedProvince.code}
              onChange={handleProvinceChange}
            >
              <option value="">
                {selectedProvince.name || selectedProvince || 'Chọn Tỉnh'}
              </option>
              {provinces.map((p) => (
                <option key={p.code} value={p.code}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <select
              value={selectedDistrict.code}
              onChange={handleDistrictChange}
              disabled={!selectedProvince}
            >
              <option value="">
                {selectedDistrict.name || selectedDistrict || 'Chọn huyện'}
              </option>
              {districts.map((d) => (
                <option key={d.code} value={d.code}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <select
              disabled={!selectedDistrict}
              value={selectedCommune.code}
              onChange={handleCommuneChange}
            >
              <option value="">
                {selectedCommune.name || selectedCommune || 'Chọn Xã'}
              </option>
              {communes.map((w) => (
                <option key={w.code} value={w.code}>
                  {w.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-4 float-end">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Lưu
          </button>
          <button
            type="button"
            className="ms-3 btn btn-secondary"
            onClick={onClose}
          >
            Đóng
          </button>
        </div>
      </div>
    </>
  )
}

export default AddAddress
