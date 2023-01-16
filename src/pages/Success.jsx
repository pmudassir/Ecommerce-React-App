import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { userRequest } from '../requestMethods'

const Success = () => {

  const location = useLocation()
  const data =  location.state && location.state.stripeData
  const cart = location.state && location.state.cart
  const currentUser = useSelector((state) => state.user && state.user.currentUser)
  const [orderId, setOrderId] = useState(null)

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products && cart.products.map((item) => ({
            productId: item._id,
            quantity: item.quantity
          })),
          amount: cart.total,
          address: data.billing_details.address
        })
        setOrderId(res.data._id)
      } catch (error) {
        console.log(error);
      }
    }
    cart && createOrder()
  }, [cart, data, currentUser])

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      {orderId
        ? `Order has been placed successfully. Your order number is ${orderId}`
        : `Successful. Your order is being prepared...`
      }
      <button style={{ padding: 10, marginTop: 20 }}>Go To Homepage</button>
    </div>
  )
};

export default Success