// Global counter
let counter = 0

// Clicks to the next prize
let nextPrize = 10

// Array to store the game state
let players = []

const findPlayer = id => {
  return players.find(p => p.id === id)
}

const addPlayer = (socket, name) => {
  players.push({ name: name, id: socket.id, score: 20 })
}

const resetPlayer = socket => {
  players = players.map(p => (p.id !== socket.id ? p : { ...p, score: 20 }))
  sortPlayers()
}

const removePlayer = socket => {
  players = players.filter(p => p.id !== socket.id)
}

const handleClick = (io, socket) => {
  counter = counter + 1
  const player = findPlayer(socket.id)

  if (counter % 500 === 0) {
    handleWin(250, player, io)
  } else if (counter % 100 === 0) {
    handleWin(40, player, io)
  } else if (counter % 10 === 0) {
    handleWin(5, player, io)
  } else {
    handleLose(player, io)
  }
}

const handleWin = (prize, player, io) => {
  nextPrize = nextPrize + 10
  io.to(player.id).emit('win', prize)
  updateScore(player, prize)
}

const aboutToLose = player => {
  return player.score === 1
}

const handleLose = (player, io) => {
  aboutToLose(player)
    ? io.to(player.id).emit('lostGame')
    : io.to(player.id).emit('noWin', nextPrize - counter)
  updateScore(player, 0)
}

const updateScore = (player, prize) => {
  player.score = player.score + prize - 1
  sortPlayers()
}

const sortPlayers = () => {
  players = players.sort((p1, p2) => p2.score - p1.score)
}

const sendGameState = io => {
  io.sockets.emit('gameState', {
    players: players,
    toNextPrize: nextPrize - counter
  })
}

module.exports = {
  addPlayer: addPlayer,
  resetPlayer: resetPlayer,
  removePlayer: removePlayer,
  sendGameState: sendGameState,
  handleClick: handleClick,
  counter: counter
}
