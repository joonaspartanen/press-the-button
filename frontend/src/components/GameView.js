import React from 'react'
import { Grid, Header, Button } from 'semantic-ui-react'

import Notification from './Notification'
import PlayAgain from './PlayAgain'
import Scoreboard from './Scoreboard'

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
    socket.emit('click')
  }

  if (lostGame) {
    return (
      <PlayAgain
        socket={socket}
        setLostGame={setLostGame}
        setNotification={setNotification}
        setUser={setUser}
      />
    )
  }
  return (
    <Grid textAlign='center' stackable>
      <Grid.Row columns={1}>
        <Grid.Column textAlign='center'>
          <Header
            as='h1'
            style={{
              color: '#fff',
              fontSize: '300%',
              paddingTop: '5vw',
              marginBottom: '5vw'
            }}
          >
            Press the Button!
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={10} textAlign='center'>
          <Button
            data-cy='game-btn'
            color='red'
            className='game-btn'
            onClick={handleClick}
          ></Button>
          <Notification notification={notification} />
        </Grid.Column>
        <Grid.Column
          textAlign='center'
          width={6}
          style={{ paddingRight: '8em' }}
        >
          <Scoreboard players={players} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default GameView
