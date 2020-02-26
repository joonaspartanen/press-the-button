const findPlayer = (id, gameState) => {
  return gameState.players.find(p => p.id === id)
}

const addPlayer = (socket, name, gameState) => {
  gameState.players.push({ name: name, id: socket.id, score: 20 })
  sortPlayers(gameState)
}

const resetPlayer = (socket, gameState) => {
  gameState.players = gameState.players.map(p => (p.id !== socket.id ? p : { ...p, score: 20 }))
  sortPlayers(gameState)
}

const removePlayer = (socket, gameState) => {
  gameState.players = gameState.players.filter(p => p.id !== socket.id)
}

const handleClick = (io, socket, gameState) => {
  gameState.counter = gameState.counter + 1

  if (gameState.counter % 500 === 0) {
    handleWin(250, socket, io, gameState)
  } else if (gameState.counter % 100 === 0) {
    handleWin(40, socket, io, gameState)
  } else if (gameState.counter % 10 === 0) {
    handleWin(5, socket, io, gameState)
  } else {
    handleLose(socket, io, gameState)
  }
}

const handleWin = (prize, socket, io, gameState) => {
  const player = findPlayer(socket.id, gameState)
  io.to(player.id).emit('win', prize)
  updateScore(player, prize, gameState)
}

const calculateNextPrize = counter => {
  return 10 - (counter % 10)
}

const aboutToLose = player => {
  return player.score === 1
}

const handleLose = (socket, io, gameState) => {
  const player = findPlayer(socket.id, gameState)
  aboutToLose(player)
    ? io.to(player.id).emit('lostGame')
    : io.to(player.id).emit('noWin', calculateNextPrize(gameState.counter))
  updateScore(player, 0, gameState)
}

const updateScore = (player, prize, gameState) => {
  player.score = player.score + prize - 1
  sortPlayers(gameState)
}

const sortPlayers = gameState => {
  gameState.players = gameState.players.sort((p1, p2) => p2.score - p1.score)
}

const sendGameState = (io, gameState) => {
  io.sockets.emit('gameState', {
    players: gameState.players
  })
}

module.exports = {
  addPlayer: addPlayer,
  findPlayer: findPlayer,
  resetPlayer: resetPlayer,
  removePlayer: removePlayer,
  sendGameState: sendGameState,
  handleClick: handleClick,
  handleWin: handleWin,
  handleLose: handleLose,
  updateScore: updateScore
}
