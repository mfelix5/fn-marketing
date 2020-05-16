import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import appStoreBadge from "../images/app-store-badge.svg"

const Badges = () => {
  const data = useStaticQuery(graphql`
    query {
      google: file(relativePath: { eq: "google-play-badge.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `center`,
        alignItems: `center`
      }}
    >
      <a
        href="https://apps.apple.com/us/app/farewise/id1511919932"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          style={{
            width: 160
          }}
          src={appStoreBadge}
          alt="Apple app store badge"
        />
      </a>

      <a
        href="https://play.google.com/store/apps/details?id=io.farewise"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fixed={data.google.childImageSharp.fixed} />
      </a>

    </div>
  )
}

export default Badges
