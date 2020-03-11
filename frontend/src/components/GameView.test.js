import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import GameView from './GameView'

let component
let gameButton
const players = [
  { name: 'Tester', score: 16, id: '123a' },
  { name: 'Tester2', score: 18, id: '123b' },
  { name: 'Tester3', score: 20, id: '123c' }
]

afterEach(cleanup)

describe('When game is lost', () => {
  test('the game view is not rendered', () => {
    let lostGame = true
    component = render(<GameView lostGame={lostGame} players={players} />)
    expect(component.container).not.toHaveTextContent('Press the Button!')
    gameButton = component.container.querySelector('.game-btn')
    expect(gameButton).toBeNull()
  })
})

describe('<GameView />', () => {
  let lostGame = false
  const clickGameButtonMock = jest.fn()

  beforeEach(() => {
    component = render(
      <GameView
        lostGame={lostGame}
        players={players}
        clickGameButton={clickGameButtonMock}
      />
    )
    gameButton = component.container.querySelector('.game-btn')
  })

  test('is rendered correctly', () => {
    expect(component.container).toHaveTextContent('Press the Button!')
    expect(gameButton).toBeDefined()
  })

  test('clicking game button calls handleClick once', () => {
    fireEvent.click(gameButton)
    expect(clickGameButtonMock).toHaveBeenCalledTimes(1)
  })
})
