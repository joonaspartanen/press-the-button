const io = require('socket.io-client')
const { server } = require('../index')

const socketURL = 'http://localhost:5000'
let socket

const options = {
  transports: ['websocket'],
  'force new connection': true
}

afterAll(() => {
  server.close()
})

describe('The server handles socket events correctly', () => {
  describe('When new player joins', () => {
    beforeEach(() => {
      socket = io.connect(socketURL, options)
      socket.on('connect', data => {
        socket.emit('newPlayer', 'Tester')
      })
    })

    afterEach(() => {
      socket.disconnect()
    })

    test('new player is added to players', done => {
      socket.on('gameState', data => {
        expect(data.players).toHaveLength(1)
        done()
      })
    })

    test('the name of the new player is correct', () => {
      socket.on('gameState', data => {
        expect(data.players[0].name).toBe('Tester')
        done()
      })
    })

    test('new player starts with 20 points', done => {
      socket.on('gameState', data => {
        expect(data.players[0].score).toBe(20)
        done()
      })
    })

    test('socket id becomes the player id', done => {
      socket.on('gameState', data => {
        expect(data.players[0].id).toBe(socket.id)
        done()
      })
    })
  })

  describe('When button is clicked', () => {
    //const index = require('../index')
    //const spy = jest.spyOn(index, 'handleClick')

    beforeEach(() => {
      socket = io.connect(socketURL, options)
      socket.on('connect', data => {
        socket.emit('newPlayer', 'Tester')
      })
    })

    afterEach(() => {
      socket.disconnect()
    })

    test('counter is incremented by 1', done => {
      const { counter, handleClick } = require('../services/socketService')
      expect(counter).toBe(0)
      console.log(counter)
      // TODO
      done()
    })
  })
})
