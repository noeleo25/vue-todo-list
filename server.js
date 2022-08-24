// Web server for the compiled app.
const path = require('path')
const express = require('express') // Third Party library.
const serveStatic = require('serve-static')

const app = express()

let buildDir = path.join(__dirname, '/dist')
app.use('/', serveStatic(buildDir))
app.get(/.*/, function(req, res) {
  let indexPath = path.join(__dirname, '/dist/index.html')
  res.sendFile(indexPath)
})

process.env.PORT = process.env.PORT ? process.env.PORT : 3300

app.listen(process.env.PORT, () => {
  console.log('--------------------------------------------')
  console.log(`App running on port: ${process.env.PORT}`)
  console.log('--------------------------------------------')
})