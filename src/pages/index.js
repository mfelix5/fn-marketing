import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Badges from "../components/badges"

const IndexPage = () => {
  const { background } = useStaticQuery(graphql`
    {
      background: file(relativePath: { eq: "rafael-leao.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      className="background-image-index"
      fluid={background.childImageSharp.fluid}
    >
    <Layout>
        <SEO title="Farewise" />
        <div style={{
          width: `100%`,
          maxWidth: `960px`,
          padding: `1.45rem 1.0875rem 1.45rem`,
          margin: 0
        }}>
          <h2>Save on your train commute!</h2>
          <h4>Farewise recommends the least expensive ticketing options for travel on Long Island Railroad, Metro-North and New Jersey Transit.</h4>
          <Image />
          <Badges />
        </div>
      </Layout>
    </BackgroundImage>
  )
}

export default IndexPage
