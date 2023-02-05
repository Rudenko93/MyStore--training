import React from "react"
import Card from "../Card/Card"
import "./FeaturedProducts.scss"

const data = [
  {
    id: 1,
    img: "/img/pexels-pixabay-52518.jpg",
    img2: "/img/pexels-sam-lion-5709661.jpg",
    title: "12231",
    isNew: true,
    oldPrice: 19,
    price: 14,
  },
  {
    id: 2,
    img: "/img/pexels-pixabay-52518.jpg",
    img2: "/img/pexels-sam-lion-5709661.jpg",
    title: "12232",
    isNew: true,
    oldPrice: 19,
    price: 14,
  },
  {
    id: 3,
    img: "/img/pexels-sam-lion-5709661.jpg",
    img2: "/img/pexels-pixabay-52518.jpg",
    title: "12233",
    isNew: false,
    oldPrice: 19,
    price: 14,
  },
  {
    id: 4,
    img: "/img/pexels-sam-lion-5709661.jpg",
    img2: "/img/pexels-pixabay-52518.jpg",
    title: "12234",
    isNew: false,
    oldPrice: 19,
    price: 14,
  },
]

function FeaturedProducts({ type }) {
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
