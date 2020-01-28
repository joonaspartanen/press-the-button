const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

app.use(cors())
app.use(express.static(path.join(__dirname, '/../frontend/build')))

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '/../frontend/build/index.html'))
})

module.exports = app
