// Web server for the compiled app.
const path = require('path')
const express = require('express') // Third Party library.

const app = express()

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

process.env.PORT = process.env.PORT ? process.env.PORT : 3300

app.listen(process.env.PORT, () => {
  console.log('--------------------------------------------')
  console.log(`App running on port: ${process.env.PORT}`)
  console.log('--------------------------------------------')
})