import React from "react"
import Card from "../Card/Card"
import "./List.scss"

function List({ catId, maxPrice, sort }) {
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
    {
      id: 5,
      img: "/img/pexels-pixabay-52518.jpg",
      img2: "/img/pexels-sam-lion-5709661.jpg",
      title: "12232",
      isNew: true,
      oldPrice: 19,
      price: 14,
    },
    {
      id: 6,
      img: "/img/pexels-sam-lion-5709661.jpg",
      img2: "/img/pexels-pixabay-52518.jpg",
      title: "12233",
      isNew: false,
      oldPrice: 19,
      price: 14,
    },
    {
      id: 7,
      img: "/img/pexels-sam-lion-5709661.jpg",
      img2: "/img/pexels-pixabay-52518.jpg",
      title: "12234",
      isNew: false,
      oldPrice: 19,
      price: 14,
    },
  ]
  return (
    <div className="list">
      {data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  )
}

export default List
