import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import PlayAgain from './PlayAgain'

describe('<PlayAgain />', () => {
  let component
  let yesButton
  let noButton

  const playAgainMock = jest.fn()
  const leaveGameMock = jest.fn()

  beforeEach(() => {
    component = render(
      <PlayAgain playAgain={playAgainMock} leaveGame={leaveGameMock} />
    )
    yesButton = component.container.querySelector('.yes-button')
    noButton = component.container.querySelector('.no-button')
  })

  afterEach(cleanup)

  test('is rendered correctly', () => {
    expect(component.container).toHaveTextContent('You lose!')
    expect(component.container).toHaveTextContent('Do you want to play again?')
    expect(yesButton).toBeDefined()
    expect(noButton).toBeDefined()
  })

  test('clicking yes button calls playAgain once', () => {
    fireEvent.click(yesButton)
    expect(playAgainMock).toHaveBeenCalledTimes(1)
  })

  test('clicking no button calls leaveGame once', () => {
    fireEvent.click(noButton)
    expect(leaveGameMock).toHaveBeenCalledTimes(1)
  })
})
