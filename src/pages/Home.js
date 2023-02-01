import React from "react"
import Slider from "../components/Slider"
import FeaturedProducts from "../components/FeaturedProducts"
import Categories from "../components/Categories"
import Contacts from "../components/Contacts"

function Home() {
  return (
    <div>
      <Slider />
      <FeaturedProducts />
      <Categories />
      <FeaturedProducts />
      <Contacts />
    </div>
  )
}

export default Home
