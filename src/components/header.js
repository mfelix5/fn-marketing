import React from "react"
import { Link } from "gatsby"
import Icon from "../components/icon"
import Colors from "../constants/Colors"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: Colors.primary,
    }}
  >
    <div
      style={{
        padding: `.1rem 1.5rem`,
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `space-between`,
        alignItems: `center`,
      }}
    >
      <div
        style={{
          display: `flex`,
          flexDirection: `row`,
          alignItems: `center`
        }}
      >
        <Icon
          style={{
          }}
        />
        <h2 style={{ margin: 0, padding: `0 0 .2rem .3rem` }}>
          <Link
            to="/"
            style={{
              color: `white`,
              fontFamily: `Roboto`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h2>
      </div>

      <h6 style={{
        margin: 0,
        paddingRight: `1.45rem`
      }}
      ><Link
        to="/contact/"
        style={{
          color: Colors.secondary,
          fontFamily: `Roboto`,
          textDecoration: `none`,
        }}
        >
          Contact
        </Link>
      </h6>

    </div>
  </header>
)

export default Header
