import React, { useState } from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'

const NameForm = ({ setUser, socket }) => {
  const [name, setName] = useState('')

  const handleNameChange = event => {
    setName(event.target.value)
    console.log(name)
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
            type="text"
            value={name}
            onChange={handleNameChange}
            required
            autoFocus
          ></Form.Control>
          <button className="select-btn" type="submit">
            Play!
          </button>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default NameForm
