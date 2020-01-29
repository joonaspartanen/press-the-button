const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static('build'))

app.get('/', (request, response) => {
  response.sendFile('index.html')
})

module.exports = app
