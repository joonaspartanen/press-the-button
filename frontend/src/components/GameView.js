import React from 'react'
import { Grid, Header, Button } from 'semantic-ui-react'

import Notification from './Notification'
import PlayerList from './PlayerList'

const GameView = ({
  notification,
  setNotification,
  players,
  lostGame,
  setLostGame,
  setUser,
  socket
}) => {
  const handleClick = () => {
    console.log('click')
    socket.emit('click')
  }

  const playAgain = () => {
    socket.emit('playAgain')
    setLostGame(false)
    setNotification('')
  }

  const leaveGame = () => {
    socket.emit('leaveGame')
    setLostGame(false)
    setNotification('')
    setUser('')
  }

  if (lostGame) {
    return (
      <Grid
        verticalAlign='middle'
        textAlign='center'
        style={{ height: 'calc(100vh - 50px)' }}
      >
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
  return (
    <Grid
      verticalAlign='middle'
      textAlign='center'
      style={{ height: 'calc(100vh - 50px)' }}
    >
      <Grid.Column textAlign='center' width={8}>
        <Header
          as='h1'
          style={{ color: '#fff', paddingTop: '1em', paddingBottom: '1em' }}
        >
          Press the Button!
        </Header>
        <Button
          data-cy='game-btn'
          color='red'
          className='game-btn'
          onClick={handleClick}
        ></Button>
        <Notification notification={notification}></Notification>
      </Grid.Column>
      <Grid.Column textAlign='center' width={4}>
        <PlayerList players={players}></PlayerList>
      </Grid.Column>
    </Grid>
  )
}

export default GameView
