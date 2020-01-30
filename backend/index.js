const app = require('./app')
const server = require('http').createServer(app)
const io = require('socket.io')(server)

// Global counter
let counter = 0

// Clicks to the next prize
let nextPrize = 10

// Array to store the game state
let players = []

io.on('connection', socket => {
  console.log('user connected')

  socket.on('newPlayer', name => {
    players.push({ name: name, id: socket.id, score: 20 })
    sendGameState()
  })

  socket.on('click', () => {
    handleClick(socket)
    sendGameState()
  })

  socket.on('playAgain', () => {
    players = players.map(p => (p.id !== socket.id ? p : { ...p, score: 20 }))
    sendGameState()
  })

  socket.on('leaveGame', () => {
    players = players.filter(p => p.id !== socket.id)
    sendGameState()
  })

  socket.on('disconnect', () => {
    //console.log('user disconnected')
    players = players.filter(p => p.id !== socket.id)
    sendGameState()
  })
})

const handleClick = socket => {
  counter = counter + 1
  const player = findPlayer(socket.id)
  console.log(`player ${player.id} clicked the button`)

  if (counter % 500 === 0) {
    handleWin(250, player)
  } else if (counter % 100 === 0) {
    handleWin(40, player)
  } else if (counter % 10 === 0) {
    handleWin(5, player)
  } else {
    handleLose(player)
  }
}

const findPlayer = id => {
  return players.find(p => p.id === id)
}

const handleWin = (prize, player) => {
  nextPrize = nextPrize + 10
  io.to(player.id).emit('win', prize)
  updateScore(player, prize)
}

const handleLose = player => {
  io.to(player.id).emit('noWin', nextPrize - counter)
  if (player.score === 1) {
    io.to(player.id).emit('lostGame')
  }
  updateScore(player, 0)
}

const updateScore = (player, prize) => {
  player.score = player.score + prize - 1
}

const sendGameState = () => {
  io.sockets.emit('gameState', {
    players: players,
    toNextPrize: nextPrize - counter
  })
}

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log(`Listening port ${PORT}`)
})

module.exports = server
