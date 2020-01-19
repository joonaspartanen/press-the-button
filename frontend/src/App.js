import React, { useEffect, useState } from 'react'
import { Container, Navbar, Nav, Row, Col, Button } from 'react-bootstrap'
import { ForwardFill } from 'react-bootstrap-icons'

import io from 'socket.io-client'
const socket = io('http://localhost:5000')

const handleClick = () => {
  console.log('click')
  socket.emit('click')
}

const App = () => {
  const [players, setPlayers] = useState([])
  const [score, setScore] = useState(0)
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
    socket.on('win', score => {
      setNotification(`You win ${score} points!`)
      console.log(`new score ${score}`)
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
  }, [players, score, lostGame])

  return (
    <div>
      <Container
        fluid={'true'}
        style={{
          paddingLeft: 0,
          paddingRight: 0,
          backgroundColor: '#009688',
          height: '100vh'
        }}
      >
        <Navbar variant="dark">
          <Navbar.Brand href="#">Press the Button</Navbar.Brand>
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
      <div>
        <div>You lose!</div>
        <button onClick={playAgain}>Yes</button>
        <button onClick={leaveGame}>No</button>
      </div>
    )
  }
  return (
    <Container>
      <Row className="justify-content-center">
        <h1 style={{ color: '#FFF' }}>Press the Button!</h1>
      </Row>
      <Row
        className="justify-content-center align-items-center"
        style={{ height: '50vh' }}
      >
        <Col className="text-center">
          {players !== null && <PlayerList players={players}></PlayerList>}
        </Col>
        <Col className="text-center">
          <Button
            onClick={handleClick}
            size="lg"
            style={{
              backgroundColor: '#FFF',
              color: '#009688',
              border: '0px',
              borderRadius: '50%',
              height: '10em',
              width: '10em'
            }}
          >
            Press
          </Button>
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
      <p key={p.id}>
        {p.name} has {p.score} points
      </p>
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
        <h2 style={{ color: '#FFF' }}>What's your name?</h2>
      </Row>
      <Row
        className="justify-content-center align-items-center"
        style={{ height: '50vh' }}
      >
        <form onSubmit={enterGame}>
          <input value={name} onChange={handleNameChange} required></input>
          <button type="submit">Play</button>
        </form>
      </Row>
    </Container>
  )
}

export default App
