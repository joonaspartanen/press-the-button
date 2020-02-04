const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static('build'))

const server = require('http').createServer(app)
const io = require('socket.io')(server)
const socketHandler = require('./routes/socket')

io.on('connection', socket => {
  console.log('user connected')
  socketHandler(io, socket)
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log(`Listening port ${PORT}`)
})

module.exports = { server: server }
