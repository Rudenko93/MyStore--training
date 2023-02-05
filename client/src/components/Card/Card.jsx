import React from "react"
import "./Card.scss"
import { Link } from "react-router-dom"

function Card({ item }) {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew && <span>New Season</span>}
          <img src={item.img} alt="mainImg" className="mainImg" />
          <img src={item.img2} alt="secondImg" className="secondImg" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice || item.price + 20}</h3>
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card
