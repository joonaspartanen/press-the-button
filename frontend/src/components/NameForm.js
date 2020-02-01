import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'

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
    <Container className="text-center">
      <h2 style={{ color: '#000', marginTop: '2em', marginBottom: '1em' }}>
        What's your name?
      </h2>
      <Form onSubmit={enterGame}>
        <Form.Group>
          <Form.Control
            data-cy="name-form"
            type="text"
            value={name}
            onChange={handleNameChange}
            required
            autoFocus
          ></Form.Control>
          <button className="select-btn" type="submit" data-cy="join-btn">
            Play!
          </button>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default NameForm
