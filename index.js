const app = require('./app')
const server = require('http').createServer(app)
const io = require('socket.io')(server)

let counter = 0

let players = []

io.on('connection', socket => {
  console.log('user connected')
  console.log(socket.id)
  players.push({ id: socket.id, score: 20 })
  console.log(players)
  io.sockets.emit('players', players)

  socket.on('click', () => {
    counter = counter + 1
    const player = players.find(p => p.id === socket.id)
    console.log(`player ${player.id} clicked the button`)
    let newScore = -1
    if (counter % 10 === 0) {
      newScore = newScore + 5
      io.to(player.id).emit('win', newScore + 1)
    }

    players = players.map(p =>
      p.id !== player.id ? p : { ...p, score: p.score + newScore }
    )
    console.log(players)
    console.log(`counter now: ${counter}`)
    io.sockets.emit('players', players)
  })

  socket.on('disconnect', reason => {
    console.log('user disconnected')
    players = players.filter(p => p.id !== socket.id)
  })
})

const PORT = 5000
server.listen(PORT, () => {
  console.log(`Listening port ${PORT}`)
})
