import React from "react"
import { Link } from "react-router-dom"

import "./Footer.scss"

const Footer = () => {
  const leftLinks = ["Men", "Women", "Children", "Accessories"]
  const middleLinks = ["FAQ", "Pages", "Stores", "Compare", "Cookies"]

  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          {leftLinks.map((link) => (
            <Link to={"/products/" + link.toLowerCase()}>{link}</Link>
          ))}
        </div>
        <div className="item">
          <h1>Links</h1>
          {middleLinks.map((link) => (
            <Link to={"/"}>{link}</Link>
          ))}
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">MyStore</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
