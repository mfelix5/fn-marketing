import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.css"

const ContactPage = () => {
  const { background } = useStaticQuery(graphql`
    {
      background: file(relativePath: { eq: "anders-jilden.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage className="background-image" fluid={background.childImageSharp.fluid}>
      <Layout>
        <SEO title="Contact" />
        <div className="page-container">
          <div className="card">
            <h3>
              If you have any feedback or issues using Farewise, please let us know and we'll get back to you shortly!
            </h3>

            <form
              name="contact"
              method="POST"
              // action="https://naughty-lamarr-f5f136.netlify.app/.netlify/functions/redirect"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="field-container">
                <input
                  className="form-field"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                />
                <input
                  className="form-field"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
                <textarea name="message" id="message" placeholder="Message" required />
                <div data-netlify-recaptcha="true"></div>
                <input
                  className="form-field button"
                  type="submit"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </BackgroundImage>
  )
}

export default ContactPage
