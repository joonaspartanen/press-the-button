import React from 'react'
import { Header } from 'semantic-ui-react'

const Notification = ({ notification }) => {
  return (
    <Header
      as='h3'
      data-cy='notification'
      style={{ color: '#fff', height: '50px', marginBottom: '1em' }}
    >
      {notification}
    </Header>
  )
}

export default Notification
