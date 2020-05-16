import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/form"

const SupportPage = () => (
  <Layout>
    <SEO title="Farewise Support" />
    <div style={{
      maxWidth: `960px`,
      margin: `1rem`
    }}>
      <p>If you have any issues or feedback on how to improve Farewise, please let us know. We will get back to you shortly. Thanks!</p>
      <ContactForm />
    </div>

  </Layout>
)

export default SupportPage
