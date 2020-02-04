const {
  addPlayer,
  resetPlayer,
  removePlayer,
  sendGameState,
  handleClick
} = require('../services/socketService')

const socketHandler = (io, socket) => {
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
    console.log('Leaving game...')
    removePlayer(socket)
    sendGameState(io)
  })

  socket.on('disconnect', () => {
    removePlayer(socket)
    sendGameState(io)
  })
}

module.exports = socketHandler
