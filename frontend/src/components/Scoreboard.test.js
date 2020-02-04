import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import Scoreboard from './Scoreboard'

afterEach(cleanup)

test('Scoreboard contains all players', () => {
  const players = [
    { name: 'Tester', score: 16 },
    { name: 'Tester2', score: 18 },
    { name: 'Tester3', score: 20 }
  ]

  const component = render(<Scoreboard players={players} />)

  expect(component.container).toHaveTextContent('Tester')
  expect(component.container).toHaveTextContent('Tester2')
  expect(component.container).toHaveTextContent('Tester3')
})
