import React, { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom';
import orderApi from '../../../api/order'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import cartApi from '../../../api/cartApi'

function Thanks() {
  const location = useLocation();
  const { fetchCartCount } = useContext(CartContext);
  const hasOrdered = useRef(false);
  useEffect(() => {

    const queryParams = new URLSearchParams(location.search);
    const extraDataEncoded = queryParams.get("extraData");
    const resultCode = queryParams.get("resultCode");

    if (resultCode === "0" && extraDataEncoded) {
      hasOrdered.current = true;
      const extraData = JSON.parse(decodeURIComponent(extraDataEncoded));
      const payload = extraData.payload;
      const cartid = extraData.cartid;
      console.log("Payload:", payload);
      console.log("Cart ID:", cartid);

      const createOrder = async () => {
        try {
          const res = await orderApi.addOrder(payload);
          console.log("Đặt hàng thành công:", payload);
          await Promise.all(
            cartid?.map(item =>
              item ? cartApi.removetocart(item) : null
            )
          );
          fetchCartCount();

        } catch (err) {
          console.error("Tạo đơn hàng thất bại:", err);
        }
      };

      createOrder();

    }
    else {
      console.log("Không có dữ liệu đơn hàng hoặc mã kết quả không hợp lệ.");
    }
  }, [location.search]);
  return (
    <div className="d-flex align-items-center justify-content-center">
      <img
        style={{ width: '500px' }}
        src="https://i.pinimg.com/736x/5f/1e/e2/5f1ee2a73cf03b5dff932e34a7c4defb.jpg"
        alt=""
      />
    </div>
  )
}

export default Thanks
