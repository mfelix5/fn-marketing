import React from "react"
import { Link } from "gatsby"
import Icon from "../components/icon"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="nav">
    <div className="nav-container">
      <div className="nav-left">
        <Link className="link" to="/">
          <Icon/>
          <h2 className="site-title">{siteTitle}</h2>
        </Link>
      </div>
      <Link className="link" to="/contact/">
         <h6 className="nav-item">Contact</h6>
      </Link>

    </div>
  </header>
)

export default Header
