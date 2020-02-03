import React from 'react'

import { Grid, Header, Button } from 'semantic-ui-react'

const PlayAgain = ({ socket, setLostGame, setNotification, setUser }) => {
  const playAgain = () => {
    socket.emit('playAgain')
    setLostGame(false)
    setNotification('Ready to play?')
  }

  const leaveGame = () => {
    socket.emit('leaveGame')
    setLostGame(false)
    setNotification('Ready to play?')
    setUser('')
  }

  return (
    <Grid verticalAlign='middle' textAlign='center' style={{ height: '100vh' }}>
      <Grid.Column>
        <Header as='h1' style={{ color: '#fff', paddingTop: '1em' }}>
          You lose!
        </Header>
        <Header as='h2' style={{ color: '#fff', paddingBottom: '1em' }}>
          Do you want to play again?
        </Header>
        <Button
          onClick={playAgain}
          color='green'
          size='huge'
          style={{ marginRight: '1em' }}
        >
          Yes
        </Button>
        <Button onClick={leaveGame} color='red' size='huge'>
          No
        </Button>
      </Grid.Column>
    </Grid>
  )
}

export default PlayAgain
