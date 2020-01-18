const app = require('./app')
const server = require('http').createServer(app)
const io = require('socket.io')(server)

let counter = 0
let nextPrize = 10

let players = []

const findPlayer = id => {
  return players.find(p => p.id === id)
}

io.on('connection', socket => {
  console.log('user connected')

  socket.on('newPlayer', name => {
    players.push({ name: name, id: socket.id, score: 20 })
    io.sockets.emit('gameState', {
      players: players,
      toNextPrize: nextPrize - counter
    })
  })

  socket.on('click', () => {
    counter = counter + 1
    const player = findPlayer(socket.id)
    console.log(`player ${player.id} clicked the button`)
    console.log(`the counter is ${counter}`)
    let newScore = -1

    if (counter % 500 === 0) {
      newScore = newScore + 250
      nextPrize = nextPrize + 10
      io.to(player.id).emit('win', newScore + 1)
    } else if (counter % 100 === 0) {
      newScore = newScore + 40
      nextPrize = nextPrize + 10
      io.to(player.id).emit('win', newScore + 1)
    } else if (counter % 10 === 0) {
      newScore = newScore + 5
      nextPrize = nextPrize + 10
      io.to(player.id).emit('win', newScore + 1)
    } else {
      io.to(player.id).emit('noWin', nextPrize - counter)
      if (player.score === 1) {
        console.log('you lose')
        io.to(player.id).emit('lostGame')
      }
    }

    players = players.map(p =>
      p.id !== player.id ? p : { ...p, score: p.score + newScore }
    )

    console.log(`${nextPrize - counter} clicks to the next prize`)
    io.sockets.emit('gameState', {
      players: players,
      toNextPrize: nextPrize - counter
    })
  })

  socket.on('playAgain', () => {
    players = players.map(p => (p.id !== socket.id ? p : { ...p, score: 20 }))
    io.sockets.emit('gameState', {
      players: players,
      toNextPrize: nextPrize - counter
    })
  })

  socket.on('leaveGame', () => {
    players = players.filter(p => p.id !== socket.id)
    io.sockets.emit('gameState', {
      players: players,
      toNextPrize: nextPrize - counter
    })
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
    players = players.filter(p => p.id !== socket.id)
    io.sockets.emit('gameState', {
      players: players,
      toNextPrize: nextPrize - counter
    })
  })
})

const PORT = 5000
server.listen(PORT, () => {
  console.log(`Listening port ${PORT}`)
})
