import React, { useState } from 'react'
import { Button, Form, Grid, Header } from 'semantic-ui-react'

const NameForm = ({ setUser, socket }) => {
  const [name, setName] = useState('')

  const handleNameChange = event => {
    setName(event.target.value)
  }

  const enterGame = event => {
    event.preventDefault()
    socket.emit('newPlayer', name)
    setUser(name)
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
              data-cy='name-form'
              type='text'
              value={name}
              onChange={handleNameChange}
              required
              autoFocus
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
