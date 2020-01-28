const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

app.use(cors())
app.use(express.static(path.join(__dirname, '/../frontend/build')))
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'))
})

module.exports = app
