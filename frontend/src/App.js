import React, { useEffect, useState } from 'react'
import { Container } from 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import GameView from './components/GameView'
import NameForm from './components/NameForm'
import io from 'socket.io-client'

const socket = io()

const App = () => {
  const [players, setPlayers] = useState([])
  const [notification, setNotification] = useState('Ready to play?')
  const [user, setUser] = useState('')
  const [lostGame, setLostGame] = useState(false)

  useEffect(() => {
    socket.on('gameState', data => {
      setPlayers(data.players)
    })
    socket.on('lostGame', () => {
      setLostGame(true)
    })
    socket.on('win', prize => {
      setNotification(`You win ${prize} points!`)
    })
    socket.on('noWin', toNextPrize => {
      setNotification(`The next prize is ${toNextPrize} clicks away!`)
    })
  }, [players, lostGame])

  return (
    <Container
      style={{
        backgroundColor: '#2a3950',
        minHeight: '100vh'
      }}
    >
      {user ? (
        <GameView
          notification={notification}
          setNotification={setNotification}
          players={players}
          lostGame={lostGame}
          setLostGame={setLostGame}
          setUser={setUser}
          socket={socket}
        />
      ) : (
        <NameForm setUser={setUser} socket={socket} />
      )}
    </Container>
  )
}

export default App
