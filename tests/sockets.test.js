const io = require('socket.io-client')
const server = require('../index')

const socketURL = 'http://localhost:5000'

const options = {
  transports: ['websocket'],
  'force new connection': true
}

afterAll(() => {
  server.close()
})

describe('The server handles socket events correctly', () => {
  describe('New player', () => {
    test('New player is added to the game state', done => {
      const socket = io.connect(socketURL, options)

      socket.on('connect', data => {
        socket.emit('newPlayer', 'Tester')
      })

      socket.on('gameState', data => {
        console.log(socket.id)
        console.log(data)
        console.log(data.players)
        expect(data.players.length).toBe(1)
        expect(data.players[0].name).toBe('Tester')
        socket.disconnect()
        done()
      })
    })

    test('New player starts with 20 points', done => {
      const socket = io.connect(socketURL, options)

      socket.on('connect', data => {
        socket.emit('newPlayer', 'Tester')
      })

      socket.on('gameState', data => {
        expect(data.players[0].score).toBe(20)
        socket.disconnect()
        done()
      })
    })
  })
})

describe('Sample Test', () => {
  test('true === true', () => {
    expect(true).toBe(true)
  })
})
