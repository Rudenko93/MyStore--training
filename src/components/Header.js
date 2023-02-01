import React from "react"
import { Outlet, Link } from "react-router-dom"

function Header() {
  const leftLinks = ["Men", "Women", "Children", "Accessories"]
  const rightLinks = ["Hompage", "About", "Contacts", "Stores"]

  return (
    <div className="flex justify-between">
      <div className="flex">
        <div>Language</div>
        <div>Currency</div>
        {leftLinks.map((link) => (
          <Link to={"/"}>{link}</Link>
        ))}
      </div>
      <h1>MyStore</h1>
      <div className="flex">
        {rightLinks.map((link) => (
          <Link to={"/"}>{link}</Link>
        ))}
        <div>Icons</div>
      </div>
      <Outlet />
    </div>
  )
}

export default Header
