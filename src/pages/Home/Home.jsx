import React from "react"
import Slider from "../../components/Slider/Slider"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import Categories from "../../components/Categories/Categories"
import Contacts from "../../components/Contacts/Contacts"

function Home() {
  return (
    <div>
      <Slider />
      <FeaturedProducts type={"Featured"} />
      <Categories />
      <FeaturedProducts type={"Trending"} />
      <Contacts />
    </div>
  )
}

export default Home
