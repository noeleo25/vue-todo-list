// Web server for the compiled app.
const path = require('path')
const express = require('express') // Third Party library.

const app = express()

let buildDir = path.join(__dirname, '..', 'dist')
app.use(express.static(buildDir))
app.use('*', function(req, res) {
  let indexPath = path.join(buildDir, 'index.html')
  res.sendFile(indexPath)
})

process.env.PORT = process.env.PORT ? process.env.PORT : 3300

app.listen(process.env.PORT, () => {
  console.log('--------------------------------------------')
  console.log(`App running on port: ${process.env.PORT}`)
  console.log('--------------------------------------------')
})