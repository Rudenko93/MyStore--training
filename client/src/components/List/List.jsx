import React from "react"
import useFetch from "../../hooks/useFetch"
import Card from "../Card/Card"
import "./List.scss"

function List({ catTitle, maxPrice, sort, subCats }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][title]=${catTitle}${subCats.map(
      (subCat) => `&[filters][sub_categories][title][$eq]=${subCat}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  )

  console.log(catTitle)
  console.log(data)
  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  )
}

export default List
