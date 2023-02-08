import React from "react"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import "./Cart.scss"
import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../../store/cartSlice"

// const products = [
//   {
//     id: 1,
//     img: "/img/pexels-pixabay-52518.jpg",
//     img2: "/img/pexels-sam-lion-5709661.jpg",
//     title: "12231",
//     isNew: true,
//     oldPrice: 19,
//     price: 14,
//   },
//   {
//     id: 2,
//     img: "/img/pexels-pixabay-52518.jpg",
//     img2: "/img/pexels-sam-lion-5709661.jpg",
//     title: "12232",
//     isNew: true,
//     oldPrice: 19,
//     price: 14,
//   },
// ]

function Cart() {
  const products = useSelector((state) => state.cart.products)
  const dispatch = useDispatch()

  const totalPrice = () => {
    let total = 0
    products.forEach((item) => {
      total += item.quantity * item.price
    })
    return total.toFixed(2)
  }

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>Product</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeFromCart(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={""}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={""}>
        Reset Cart
      </span>
    </div>
  )
}

export default Cart
