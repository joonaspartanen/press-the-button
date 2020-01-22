import React, { useEffect, useState } from 'react'
import { Container, Navbar, Nav, Row, Col, Button } from 'react-bootstrap'
import { Hammer } from 'react-bootstrap-icons'
import './App.css'

import io from 'socket.io-client'
const socket = io('http://localhost:5000')

const handleClick = () => {
  console.log('click')
  socket.emit('click')
}

const App = () => {
  const [players, setPlayers] = useState([])
  const [notification, setNotification] = useState('')
  const [user, setUser] = useState('')
  const [lostGame, setLostGame] = useState(false)

  useEffect(() => {
    socket.on('gameState', data => {
      console.log(data)
      setPlayers(data.players)
      console.log(lostGame)
    })
    socket.on('lostGame', () => {
      setLostGame(true)
    })
    socket.on('win', prize => {
      setNotification(`You win ${prize} points!`)
      console.log(`new score ${prize}`)
      setTimeout(() => {
        setNotification('')
      }, 2000)
    })
    socket.on('noWin', toNextPrize => {
      setNotification(`The next prize is ${toNextPrize} clicks away!`)
      setTimeout(() => {
        setNotification('')
      }, 2000)
    })
  }, [players, lostGame])

  return (
    <div>
      <Container
        fluid={'true'}
        style={{
          paddingLeft: 0,
          paddingRight: 0,
          backgroundColor: '#f5f8fa',
          height: '100vh'
        }}
      >
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#">Press the Button</Navbar.Brand>
          <Nav>
            <Nav.Item>
              <Nav.Link href="https://github.com/joonaspartanen/press-the-button">
                About
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
        {user ? (
          <GameView
            notification={notification}
            players={players}
            lostGame={lostGame}
            setLostGame={setLostGame}
            setUser={setUser}
          ></GameView>
        ) : (
          <NameForm setUser={setUser}></NameForm>
        )}
      </Container>
    </div>
  )
}

const GameView = ({
  notification,
  players,
  lostGame,
  setLostGame,
  setUser
}) => {
  const playAgain = () => {
    socket.emit('playAgain')
    setLostGame(false)
  }

  const leaveGame = () => {
    socket.emit('leaveGame')
    setUser('')
  }

  if (lostGame) {
    return (
      <Container fluid={'true'}>
        <h1 style={{ textAlign: 'center' }}>You lose!</h1>
        <h2 style={{ textAlign: 'center' }}>Do you want to play again?</h2>
        <Row className="justify-content-center">
          <button onClick={playAgain}>Yes</button>
          <button onClick={leaveGame}>No</button>
        </Row>
      </Container>
    )
  }
  return (
    <Container fluid={'true'}>
      <h1 style={{ color: '#000', marginTop: '1em', textAlign: 'center' }}>
        Press the Button!
      </h1>
      <Row
        className="justify-content-center"
        style={{ height: '30vh', paddingTop: '2em' }}
      >
        <Col className="text-center">
          {players !== null && (
            <ul className="list-unstyled">
              <h3>Current players</h3>
              <PlayerList players={players}></PlayerList>
            </ul>
          )}
        </Col>
        <Col className="text-center">
          <button className="game-btn" onClick={handleClick}>
            <Hammer size={'6em'}></Hammer>
          </button>
        </Col>
        <Col className="text-center">
          <Notification notification={notification}></Notification>
        </Col>
      </Row>
    </Container>
  )
}

const PlayerList = ({ players }) =>
  players.map(p => {
    return (
      <li key={p.id} style={{ color: '#000' }}>
        {p.name} has {p.score} points
      </li>
    )
  })

const Notification = ({ notification }) => {
  if (notification === '') {
    return null
  }
  return <div>{notification}</div>
}

const NameForm = ({ setUser }) => {
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
    <Container>
      <Row className="justify-content-center">
        <h2 style={{ color: '#000', marginTop: '2em' }}>What's your name?</h2>
      </Row>
      <Row
        className="justify-content-center align-items-center"
        style={{ height: '30vh' }}
      >
        <form onSubmit={enterGame}>
          <input
            value={name}
            onChange={handleNameChange}
            required
            autoFocus
          ></input>
          <button type="submit">Play</button>
        </form>
      </Row>
    </Container>
  )
}

export default App
