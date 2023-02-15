import React, { useState } from "react"
import { Link } from "react-router-dom"

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import SearchIcon from "@mui/icons-material/Search"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import "./Header.scss"
import Cart from "../Cart/Cart"

function Header() {
  // const rightLinks = ["Hompage", "About", "Contacts", "Stores"]
  const [open, setOpen] = useState(false)

  return (
    <header>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="en" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>

          <div className="item">
            <Link className="link" to="/products/women">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/men">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/children">
              Children
            </Link>
          </div>
        </div>
        <Link className="center" to={"/"}>
          MyStore
        </Link>
        <div className="right">
          <Link className="link" to="/">
            Hompage
          </Link>
          <Link className="link" to="/">
            About
          </Link>
          <Link className="link" to="/">
            Contacts
          </Link>
          <Link className="link" to="/">
            Stores
          </Link>

          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon onClick={() => setOpen(!open)} />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </header>
  )
}

export default Header
