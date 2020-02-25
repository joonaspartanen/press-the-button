import React from 'react'
import { Header } from 'semantic-ui-react'

const Notification = ({ notification }) => {
  return (
    <Header as='h3' data-cy='notification' style={{ height: '30px', marginBottom: '0.5em' }}>
      {notification}
    </Header>
  )
}

export default Notification
