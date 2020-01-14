const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static('build'))

app.get('/', (req, res) => {
  res.send('<p>Toimii</p>')
})

module.exports = app