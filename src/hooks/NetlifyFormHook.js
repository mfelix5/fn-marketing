import { useState } from "react"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const useNetlifyForm = (callback) => {
  const [inputs, setInputs] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...inputs,
      }),
    })
      .then(
        () => { alert("Thank you for your message!") },
        (error) => { alert(error) }
      )
  }

  const handleInputChange = (event) => {
    event.persist()
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }))
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs
  }
}

export default useNetlifyForm
