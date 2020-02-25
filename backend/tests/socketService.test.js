const socketService = require('../services/socketService')

let gameStateStub
let socketStub
let ioMock
let spy

describe('addPlayer', () => {
  beforeEach(() => {
    initMocksAndStubs()
  })

  test('adds new player with correct information', () => {
    socketService.addPlayer(socketStub, 'Tester', gameStateStub)
    expect(gameStateStub.players).toHaveLength(1)
    expect(gameStateStub.players[0].name).toBe('Tester')
    expect(gameStateStub.players[0].id).toBe(socketStub.id)
    expect(gameStateStub.players[0].score).toBe(20)
  })
})

describe('resetPlayer', () => {
  beforeEach(() => {
    initMocksAndStubs()
    gameStateStub.players[0] = { name: 'Tester', id: 123, score: 1 }
  })

  test('resets player score', () => {
    socketService.resetPlayer(socketStub, gameStateStub)
    expect(gameStateStub.players).toHaveLength(1)
    expect(gameStateStub.players[0].name).toBe('Tester')
    expect(gameStateStub.players[0].score).toBe(20)
  })
})

describe('removePlayer', () => {
  beforeEach(() => {
    initMocksAndStubs()
    gameStateStub.players = [
      { name: 'Tester', id: 123, score: 1 },
      { name: 'Tester2', id: 456, score: 20 }
    ]
  })

  test('removes right player', () => {
    expect(gameStateStub.players[0].name).toBe('Tester')
    socketService.removePlayer(socketStub, gameStateStub)
    expect(gameStateStub.players).toHaveLength(1)
    expect(gameStateStub.players[0].name).toBe('Tester2')
  })
})

describe('handleWin', () => {
  beforeEach(() => {
    initMocksAndStubs()
    gameStateStub.players = [
      { name: 'Tester', id: 123, score: 20 },
      { name: 'Tester2', id: 456, score: 10 }
    ]
    spy = jest.spyOn(ioMock, 'to')
  })

  test('updates player score correctly', () => {
    const player = gameStateStub.players.find(p => p.id === socketStub.id)
    expect(player.score).toBe(20)
    socketService.handleWin(5, socketStub, ioMock, gameStateStub)
    expect(player.score).toBe(24)
    socketService.handleWin(10, socketStub, ioMock, gameStateStub)
    expect(player.score).toBe(33)
  })

  test('always emits message to player', () => {
    socketService.handleWin(5, socketStub, ioMock, gameStateStub)
    socketService.handleWin(5, socketStub, ioMock, gameStateStub)
    socketService.handleWin(5, socketStub, ioMock, gameStateStub)
    expect(spy).toHaveBeenCalledTimes(3)
  })
})

describe('handleLose', () => {
  beforeEach(() => {
    initMocksAndStubs()
    gameStateStub.players = [
      { name: 'Tester', id: 123, score: 20 },
      { name: 'Tester2', id: 456, score: 10 }
    ]
    spy = jest.spyOn(ioMock, 'to')
  })

  test('updates player score correctly', () => {
    const player = gameStateStub.players.find(p => p.id === socketStub.id)
    expect(player.score).toBe(20)
    socketService.handleLose(socketStub, ioMock, gameStateStub)
    expect(player.score).toBe(19)
    socketService.handleLose(socketStub, ioMock, gameStateStub)
    expect(player.score).toBe(18)
  })

  test('always emits message to player', () => {
    socketService.handleLose(socketStub, ioMock, gameStateStub)
    socketService.handleLose(socketStub, ioMock, gameStateStub)
    socketService.handleLose(socketStub, ioMock, gameStateStub)
    expect(spy).toHaveBeenCalledTimes(3)
  })
})

const initMocksAndStubs = () => {
  gameStateStub = { counter: 0, players: [] }
  socketStub = { id: 123 }
  ioMock = {
    to: id => {
      const socket = {
        emit: () => {}
      }
      return socket
    }
  }
}
