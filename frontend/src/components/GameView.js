import React from 'react'
import { Grid, Header, Button } from 'semantic-ui-react'

import Notification from './Notification'
import PlayAgain from './PlayAgain'
import Scoreboard from './Scoreboard'

const GameView = ({ notification, players, lostGame, clickGameButton, playAgain, leaveGame }) => {
  if (lostGame) {
    return <PlayAgain playAgain={playAgain} leaveGame={leaveGame} />
  }

  return (
    <Grid textAlign='center' stackable style={{ minHeight: 'calc(100vh - 50px)' }}>
      <Grid.Row columns={1}>
        <Grid.Column
          textAlign='center'
          verticalAlign='bottom'
          style={{ marginTop: '0.5em', paddingBottom: '3em' }}>
          <Header
            as='h1'
            style={{
              fontSize: '3em'
            }}>
            Press the Button!
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ paddingTop: '3em' }}>
        <Grid.Column width={10} textAlign='center'>
          <Button
            data-cy='game-btn'
            color='red'
            className='game-btn'
            onClick={clickGameButton}
            autoFocus
          />
          <Notification notification={notification} />
        </Grid.Column>
        <Grid.Column
          textAlign='center'
          width={6}
          style={{ paddingRight: '8em', paddingTop: '1em' }}>
          <Scoreboard players={players} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default GameView
