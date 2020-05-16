import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Badges from "../components/badges"

const IndexPage = () => (
  <Layout>
    <SEO title="Farewise" />
    <div style={{
      maxWidth: `960px`,
      margin: `1rem`
    }}>
      <h2>Save money on your train commute!</h2>
      <h4>Farewise recommends the least expensive ticketing options for travel on Long Island Railroad, Metro-North and New Jersey Transit.</h4>
      <Image />
      <Badges />
    </div>
  </Layout>
)

export default IndexPage
