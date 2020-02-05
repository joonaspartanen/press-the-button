import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Notification from './Notification'

afterEach(cleanup)

test('The notification is rendered correctly', () => {
  const testMessage = 'This is a test'
  const component = render(<Notification notification={testMessage} />)

  expect(component.container).toHaveTextContent('This is a test')
})
