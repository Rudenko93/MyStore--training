import React, { useState } from "react"
import { useParams } from "react-router-dom"
import "./Products.scss"

import List from "../../components/List/List"
import useFetch from "../../hooks/useFetch"

function Products() {
  const catTitle = useParams().title
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState("asc")
  const [selectedSubCats, setSelectedSubCats] = useState([])

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][title][$eq]=${catTitle}`
  )

  const handleChange = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    )
  }

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((subCat) => (
            <div className="inputItem" key={subCat.id}>
              <input
                type="checkbox"
                key={subCat.id}
                value={subCat.attributes.title}
                onChange={handleChange}
              />
              <label htmlFor={subCat.attributes.title}>
                {subCat.attributes.title}
              </label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={() => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={() => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List
          catTitle={catTitle}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  )
}

export default Products
