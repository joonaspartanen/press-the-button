const app = require('./app')
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const {
  addPlayer,
  resetPlayer,
  removePlayer,
  sendGameState,
  handleClick
} = require('./services/socketService')

io.on('connection', socket => {
  console.log('user connected')

  socket.on('newPlayer', name => {
    addPlayer(socket, name)
    sendGameState(io)
  })

  socket.on('click', () => {
    handleClick(io, socket)
    sendGameState(io)
  })

  socket.on('playAgain', () => {
    resetPlayer(socket)
    sendGameState(io)
  })

  socket.on('leaveGame', () => {
    removePlayer(socket)
    sendGameState(io)
  })

  socket.on('disconnect', () => {
    removePlayer(socket)
    sendGameState(io)
  })
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log(`Listening port ${PORT}`)
})

module.exports = { server: server }
