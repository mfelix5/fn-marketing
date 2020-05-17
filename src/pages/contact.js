import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.css"
import Colors from "../constants/Colors"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="page-container">
      <p>If you have any issues or feedback on how to improve Farewise, please let us know. We will get back to you shortly. Thanks!</p>

      <form
        name="contact"
        method="POST"
        // action="https://naughty-lamarr-f5f136.netlify.app/.netlify/functions/redirect"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
      <input type="hidden" name="form-name" value="contact" />
        <div className="field-container">
            <input className="form-field" type="text" name="name" id="name" placeholder="Name" />
            <input className="form-field" type="email" name="email" id="email" placeholder="Email" />
            <textarea name="message" id="message" placeholder="Message" />
          <div data-netlify-recaptcha="true"></div>
          <input
            className="form-field"
            type="submit"
            value="Send Message"
            style={{
              height: `50px`,
              width: `75%`,
              margin: `1rem auto`,
              backgroundColor: Colors.secondary,
              // border: `2px solid #4CAF50`,
              color: Colors.primary,
              cursor: `pointer`
            }}
           />
        </div>
      </form>

    </div>
  </Layout>
)

export default ContactPage
