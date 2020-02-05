import React from 'react'
import { Button, Form, Grid, Header } from 'semantic-ui-react'

const NameForm = ({ enterGame, name, setName }) => {
  const handleNameChange = event => {
    setName(event.target.value)
  }

  return (
    <Grid
      verticalAlign='middle'
      textAlign='center'
      style={{ height: 'calc(100vh - 50px)' }}
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' style={{ color: '#fff' }} textAlign='center'>
          What's your name?
        </Header>
        <Form size='large' onSubmit={enterGame}>
          <Form.Field>
            <Form.Input
              type='text'
              value={name}
              onChange={handleNameChange}
              required
              autoFocus
              className='name-input'
              data-cy='name-input'
            ></Form.Input>
          </Form.Field>
          <Button
            type='submit'
            fluid
            size='large'
            color='green'
            className='join-btn'
            data-cy='join-btn'
          >
            Play!
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default NameForm
