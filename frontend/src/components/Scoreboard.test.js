import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import Scoreboard from './Scoreboard'

afterEach(cleanup)

test('Scoreboard contains all players', () => {
  const players = [
    { name: 'Tester', score: 16, id: '123a' },
    { name: 'Tester2', score: 18, id: '123b'},
    { name: 'Tester3', score: 20, id: '123c' }
  ]

  const component = render(<Scoreboard players={players} />)

  expect(component.container).toHaveTextContent('Tester')
  expect(component.container).toHaveTextContent('Tester2')
  expect(component.container).toHaveTextContent('Tester3')
})
