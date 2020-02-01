import React from 'react'

const Notification = ({ notification }) => {
  if (notification === '') {
    return <div></div>
  }
  return (
    <div data-cy="notification" style={{ marginBottom: '1em' }}>
      {notification}
    </div>
  )
}

export default Notification
