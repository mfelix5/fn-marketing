import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Colors from "../constants/Colors"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `960px`,
          minHeight: `81vh`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer
          style={{
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `center`,
            width: `100%`,
            alignItems: `center`,
            backgroundColor: Colors.secondary,
            // backgroundColor: `#FFEED9`,
            height: 70
          }}
        >
          <h6
            style={{
              marginBottom: 0,
            }}
          >© {new Date().getFullYear()}, Farewise</h6>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
