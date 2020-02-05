import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import NameForm from './NameForm'

let component
let button
let input

afterEach(cleanup)

beforeEach(() => {
  component = render(<NameForm enterGame={enterGameMock} />)
  button = component.container.querySelector('button')
  input = component.container.querySelector('.name-input')
})

const enterGameMock = jest.fn()

describe('<NameForm />', () => {
  test('The name form is rendered correctly', () => {
    expect(component.container).toHaveTextContent("What's your name?")
    expect(button).toBeDefined()
    expect(input).toBeDefined()
  })

  test('when the button is clicked, enterGame is called once', () => {
    fireEvent.click(button)
    expect(enterGameMock).toHaveBeenCalledTimes(1)
  })


})
