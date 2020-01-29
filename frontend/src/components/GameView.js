import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { Hammer } from 'react-bootstrap-icons'

import Notification from './Notification'
import PlayerList from './PlayerList'

const GameView = ({
  notification,
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
  }

  const leaveGame = () => {
    socket.emit('leaveGame')
    setLostGame(false)
    setUser('')
  }

  if (lostGame) {
    return (
      <Container fluid={'true'}>
        <h1 style={{ textAlign: 'center' }}>You lose!</h1>
        <h2 style={{ textAlign: 'center' }}>Do you want to play again?</h2>
        <Row className="justify-content-center">
          <button className="select-btn" onClick={playAgain}>
            Yes
          </button>
          <button className="select-btn" onClick={leaveGame}>
            No
          </button>
        </Row>
      </Container>
    )
  }
  return (
    <Container fluid={'true'}>
      <h1 style={{ color: '#000', marginTop: '1em', textAlign: 'center' }}>
        Press the Button!
      </h1>
      <Row className="justify-content-center" style={{ paddingTop: '2em' }}>
        <Col md={4} className="text-center">
          <Notification notification={notification}></Notification>
        </Col>
        <Col md={4} className="text-center">
          <button className="game-btn" onClick={handleClick}>
            <Hammer size={'6em'}></Hammer>
          </button>
        </Col>
        <Col md={4} className="text-center">
          <Table striped bordered size="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <PlayerList players={players}></PlayerList>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default GameView
