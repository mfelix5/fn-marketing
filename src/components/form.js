import React from "react"
import useNetlifyForm from "../hooks/NetlifyFormHook"

const ContactForm = () => {
  const { inputs, handleInputChange, handleSubmit } = useNetlifyForm()

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        name={`contact-form`}
        id={`contact-form`}
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact-form" />
        <div>
          {/* <label htmlFor="name" className="hidden-label">Name</label> */}
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={handleInputChange}
            value={inputs.name || ""}
            required
            style={{
              width: 400,
              borderRadius: 5
            }}
          />
        </div>
        <div>
          {/* <label htmlFor="email" className="hidden-label">Email</label> */}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            onChange={handleInputChange}
            value={inputs.email || ""}
            required
          />
        </div>
        <div>
          {/* <label htmlFor="message" className="hidden-label">Message</label> */}
          <textarea
            type="text"
            name="message"
            id="message"
            onChange={handleInputChange}
            value={inputs.message || ""}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
