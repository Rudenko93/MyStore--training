import React, { useState } from "react"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import BalanceIcon from "@mui/icons-material/Balance"
import "./Product.scss"

function Product() {
  const data = [
    "https://images.pexels.com/photos/12528815/pexels-photo-12528815.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ]
  // const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState(data[0])
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={data[0]} alt="0" onClick={(e) => setSelectedImg(data[0])} />
          <img src={data[1]} alt="1" onClick={(e) => setSelectedImg(data[1])} />
        </div>
        <div className="mainImg">
          <img src={selectedImg} alt="selectedImg" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">${221}</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe
          temporibus vitae perspiciatis ab vero quae alias exercitationem fugit
          eius molestiae itaque voluptas, iste, est officia magnam consectetur
          dignissimos animi!
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product
