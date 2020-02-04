import React from 'react'
import { render, cleanup } from '@testing-library/react'
import NameForm from './NameForm'

afterEach(cleanup)

describe('<NameForm />', () => {
  let component
  let button
  let input

  beforeEach(() => {
    component = render(<NameForm />)
    button = component.container.querySelector('button')
    input = component.container.querySelector('.name-input')
  })

  test('The name form is rendered correctly', () => {
    expect(component.container).toHaveTextContent("What's your name?")
    expect(button).toBeDefined()
    expect(input).toBeDefined()
  })
})
