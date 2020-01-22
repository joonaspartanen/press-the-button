const app = require('./app')
const server = require('http').createServer(app)
const io = require('socket.io')(server)

// Global counter
let counter = 0

// Clicks to the next prize
let nextPrize = 10

// Array to store the game state 
let players = []

const findPlayer = id => {
  return players.find(p => p.id === id)
}

const sendGameState = () => {
  io.sockets.emit('gameState', {
    players: players,
    toNextPrize: nextPrize - counter
  })
}

const handleWin = (prize, player) => {
  nextPrize = nextPrize + 10
  io.to(player.id).emit('win', prize)
  return prize
}

io.on('connection', socket => {
  console.log('user connected')

  socket.on('newPlayer', name => {
    players.push({ name: name, id: socket.id, score: 20 })
    sendGameState()
  })

  socket.on('click', () => {
    counter = counter + 1
    const player = findPlayer(socket.id)
    console.log(`player ${player.id} clicked the button`)
    console.log(`the counter is ${counter}`)

    // Player loses 1 point if there's no prize
    let scoreChange = -1

    if (counter % 500 === 0) {
      scoreChange = handleWin(250, player)
    } else if (counter % 100 === 0) {
      scoreChange = handleWin(40, player)
    } else if (counter % 10 === 0) {
      scoreChange = handleWin(5, player)
    } else {
      io.to(player.id).emit('noWin', nextPrize - counter)
      if (player.score === 1) {
        io.to(player.id).emit('lostGame')
      }
    }

    // Update the game state
    players = players.map(p =>
      p.id !== player.id ? p : { ...p, score: p.score + scoreChange }
    )

    console.log(`${nextPrize - counter} clicks to the next prize`)
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
    console.log('user disconnected')
    players = players.filter(p => p.id !== socket.id)
    sendGameState()
  })
})

const PORT = 5000
server.listen(PORT, () => {
  console.log(`Listening port ${PORT}`)
})
