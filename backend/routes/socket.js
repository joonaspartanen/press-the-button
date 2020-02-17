let gameState = { counter: 0, nextPrize: 10, players: [] }

const {
  addPlayer,
  resetPlayer,
  removePlayer,
  sendGameState,
  handleClick
} = require('../services/socketService')

const socketHandler = (io, socket) => {
  socket.on('newPlayer', name => {
    addPlayer(socket, name, gameState)
    sendGameState(io, gameState)
  })

  socket.on('click', () => {
    handleClick(io, socket, gameState)
    sendGameState(io, gameState)
  })

  socket.on('playAgain', () => {
    resetPlayer(socket, gameState)
    sendGameState(io, gameState)
  })

  socket.on('leaveGame', () => {
    console.log('Leaving game...')
    removePlayer(socket, gameState)
    sendGameState(io, gameState)
  })

  socket.on('disconnect', () => {
    removePlayer(socket, gameState)
    sendGameState(io, gameState)
  })
}

module.exports = socketHandler
