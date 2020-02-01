import React, { useEffect, useState } from 'react'
import { Grid } from 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.min.css'
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
    <div
      style={{
        paddingLeft: 0,
        paddingRight: 0,
        backgroundColor: '#2a3950',
        height: '100vh'
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
        ></GameView>
      ) : (
        <NameForm setUser={setUser} socket={socket}></NameForm>
      )}
    </div>
  )
}

export default App
