const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
process.env.PWD = process.cwd();

app.use(cors())
app.use(express.static(path.join(process.env.PWD, '../frontend/build')))

app.get('/', (request, response) => {
  response.sendFile(path.join(process.env.PWD, '../frontend/index.html'))
})

module.exports = app
