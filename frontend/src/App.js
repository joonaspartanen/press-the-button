import React, { useEffect, useState } from 'react'
import { Container, Navbar, Nav, Row, Col, Form, Button } from 'react-bootstrap'
import './App.css'
import GameView from './components/GameView'
import NameForm from './components/NameForm'
import io from 'socket.io-client'

const socket = io()

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
    })
    socket.on('noWin', toNextPrize => {
      setNotification(`The next prize is ${toNextPrize} clicks away!`)
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
            socket={socket}
          ></GameView>
        ) : (
          <NameForm setUser={setUser} socket={socket}></NameForm>
        )}
      </Container>
    </div>
  )
}



export default App
