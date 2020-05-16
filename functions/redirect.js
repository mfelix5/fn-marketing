exports.handler = async (event, context) => {

  const redirectUrl = 'https://naughty-lamarr-f5f136.netlify.app/'

  alert("Thanks for your message!")

  return {
    statusCode: 302,
    headers: {
      Location: redirectUrl,
      'Cache-Control': 'no-cache',
    },
    body: JSON.stringify({})
  }
}