import React from "react"
import { Link } from "react-router-dom"

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import SearchIcon from "@mui/icons-material/Search"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import "./Header.scss"

function Header() {
  const leftLinks = ["Men", "Women", "Children", "Accessories"]
  const rightLinks = ["Hompage", "About", "Contacts", "Stores"]

  return (
    <header>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="en" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <stan>USD</stan>
            <KeyboardArrowDownIcon />
          </div>

          {leftLinks.map((link) => (
            <Link to={"/products/" + link.toLowerCase()}>{link}</Link>
          ))}
        </div>
        <Link className="center" to={"/"}>
          MyStore
        </Link>
        <div className="right">
          {rightLinks.map((link) => (
            <Link to={"/"}>{link}</Link>
          ))}
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
