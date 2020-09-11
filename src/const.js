// set up as a ternary so optimizer will optimize out the code that is never run
const uriBase = process.env.NODE_ENV !== 'production'?(
    "https://handymanslcvue.herokuapp.com"
) : (
    "http://localhost:5000"
)

module.exports.uriBase = uriBase


const serverUri = process.env.NODE_ENV !== 'production'?(
    "https://brettserver.herokuapp.com"
) : (
    "http://localhost:5000"
)

module.exports.serverUri = serverUri