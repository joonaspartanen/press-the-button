import React from 'react'

import { Grid, Header, Button } from 'semantic-ui-react'

const PlayAgain = ({ playAgain, leaveGame }) => {
  return (
    <Grid verticalAlign='middle' textAlign='center' style={{ height: '100vh' }}>
      <Grid.Column>
        <Header as='h1' style={{ paddingTop: '1em' }}>
          You lose!
        </Header>
        <Header as='h2' style={{ paddingBottom: '1em' }}>
          Do you want to play again?
        </Header>
        <Button
          onClick={playAgain}
          className='yes-button'
          color='green'
          size='huge'
          style={{ marginRight: '1em' }}>
          Yes
        </Button>
        <Button onClick={leaveGame} className='no-button' color='red' size='huge'>
          No
        </Button>
      </Grid.Column>
    </Grid>
  )
}

export default PlayAgain
