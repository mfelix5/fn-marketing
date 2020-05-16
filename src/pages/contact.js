import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.css"
import Colors from "../constants/Colors"

const ContactPage = () => (
  <Layout>
    <SEO title="Farewise Support" />
    <div className="page-container">
      <p>If you have any issues or feedback on how to improve Farewise, please let us know. We will get back to you shortly. Thanks!</p>
      <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
        <div className="field-container">

            <input className="form-field" type="text" name="name" id="name" placeholder="Name" />

            <input className="form-field" type="email" name="email" id="email" placeholder="Email" />

            <textarea name="message" id="message" placeholder="Message" />

          <div data-netlify-recaptcha="true"></div>

          <input
            type="submit"
            value="Send Message"
            style={{
              margin: "auto",
              borderRadius: 10,
              width: 365,
              backgroundColor: Colors.lightBlue,
              color: Colors.darkBlue
            }}
           />
        </div>

      </form>
    </div>

  </Layout>
)

export default ContactPage
