import React from "react"
import { Outlet, Link } from "react-router-dom"

function Footer() {
  const leftLinks = ["Men", "Women", "Children", "Accessories"]
  const middleLinks = ["FAQ", "Pages", "Stores", "Compare", "Cookies"]

  return (
    <footer className="mt-auto">
      <Outlet />
      <div className="flex justify-between">
        <div className="flex">
          <div>Categories</div>
          {leftLinks.map((link) => (
            <Link to={"/"}>{link}</Link>
          ))}
        </div>

        <div className="flex">
          <div>Links</div>
          {middleLinks.map((link) => (
            <Link to={"/"}>{link}</Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
