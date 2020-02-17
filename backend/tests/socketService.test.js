const socketService = require('../services/socketService')

let gameStateMock
let socketMock
let ioMock
let spy

describe('addPlayer', () => {
  beforeEach(() => {
    initMocks()
  })

  test('adds new player with correct information', () => {
    socketService.addPlayer(socketMock, 'Tester', gameStateMock)
    expect(gameStateMock.players).toHaveLength(1)
    expect(gameStateMock.players[0].name).toBe('Tester')
    expect(gameStateMock.players[0].id).toBe(socketMock.id)
    expect(gameStateMock.players[0].score).toBe(20)
  })
})

describe('resetPlayer', () => {
  beforeEach(() => {
    initMocks()
    gameStateMock.players[0] = { name: 'Tester', id: 123, score: 1 }
  })

  test('resets player score', () => {
    socketService.resetPlayer(socketMock, gameStateMock)
    expect(gameStateMock.players).toHaveLength(1)
    expect(gameStateMock.players[0].name).toBe('Tester')
    expect(gameStateMock.players[0].score).toBe(20)
  })
})

describe('removePlayer', () => {
  beforeEach(() => {
    initMocks()
    gameStateMock.players = [
      { name: 'Tester', id: 123, score: 1 },
      { name: 'Tester2', id: 456, score: 20 }
    ]
  })

  test('removes right player', () => {
    expect(gameStateMock.players[0].name).toBe('Tester')
    socketService.removePlayer(socketMock, gameStateMock)
    expect(gameStateMock.players).toHaveLength(1)
    expect(gameStateMock.players[0].name).toBe('Tester2')
  })
})

describe('handleWin', () => {
  beforeEach(() => {
    initMocks()
    gameStateMock.players = [
      { name: 'Tester', id: 123, score: 20 },
      { name: 'Tester2', id: 456, score: 10 }
    ]
    spy = jest.spyOn(ioMock, 'to')
  })

  test('updates nextPrize', () => {
    socketService.handleWin(5, socketMock, ioMock, gameStateMock)
    expect(gameStateMock.nextPrize).toBe(20)
  })

  test('updates player score correctly', () => {
    const player = gameStateMock.players.find(p => p.id === socketMock.id)
    expect(player.score).toBe(20)
    socketService.handleWin(5, socketMock, ioMock, gameStateMock)
    expect(player.score).toBe(24)
    socketService.handleWin(10, socketMock, ioMock, gameStateMock)
    expect(player.score).toBe(33)
  })

  test('always emits message to player', () => {
    socketService.handleWin(5, socketMock, ioMock, gameStateMock)
    socketService.handleWin(5, socketMock, ioMock, gameStateMock)
    socketService.handleWin(5, socketMock, ioMock, gameStateMock)
    expect(spy).toHaveBeenCalledTimes(3)
  })
})

describe('handleLose', () => {
  beforeEach(() => {
    initMocks()
    gameStateMock.players = [
      { name: 'Tester', id: 123, score: 20 },
      { name: 'Tester2', id: 456, score: 10 }
    ]
    spy = jest.spyOn(ioMock, 'to')
  })

  test('updates player score correctly', () => {
    const player = gameStateMock.players.find(p => p.id === socketMock.id)
    expect(player.score).toBe(20)
    socketService.handleLose(socketMock, ioMock, gameStateMock)
    expect(player.score).toBe(19)
    socketService.handleLose(socketMock, ioMock, gameStateMock)
    expect(player.score).toBe(18)
  })

  test('always emits message to player', () => {
    socketService.handleLose(socketMock, ioMock, gameStateMock)
    socketService.handleLose(socketMock, ioMock, gameStateMock)
    socketService.handleLose(socketMock, ioMock, gameStateMock)
    expect(spy).toHaveBeenCalledTimes(3)
  })
})

const initMocks = () => {
  gameStateMock = { counter: 0, nextPrize: 10, players: [] }
  socketMock = { id: 123 }
  ioMock = {
    to: id => {
      const socket = {
        emit: () => {}
      }
      return socket
    }
  }
}
