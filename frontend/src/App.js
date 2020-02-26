import React, { useEffect, useState } from 'react'
import { Container } from 'semantic-ui-react'
import './App.css'
import GameView from './components/GameView'
import NameForm from './components/NameForm'
import Footer from './components/Footer'
import io from 'socket.io-client'

const socket = io()

const App = () => {
  const [players, setPlayers] = useState([])
  const [notification, setNotification] = useState('Ready to play?')
  const [user, setUser] = useState('')
  const [name, setName] = useState('')
  const [lostGame, setLostGame] = useState(false)

  const enterGame = event => {
    event.preventDefault()
    socket.emit('newPlayer', name)
    setUser(name)
  }

  const playAgain = () => {
    socket.emit('playAgain')
    setLostGame(false)
    setNotification('Ready to play?')
  }

  const leaveGame = () => {
    socket.emit('leaveGame')
    setLostGame(false)
    setNotification('Ready to play?')
    setUser('')
    setName('')
  }

  const clickGameButton = () => {
    socket.emit('click')
  }

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
    <Container className='main-container'>
      {user ? (
        <GameView
          notification={notification}
          players={players}
          lostGame={lostGame}
          clickGameButton={clickGameButton}
          playAgain={playAgain}
          leaveGame={leaveGame}
        />
      ) : (
        <NameForm enterGame={enterGame} name={name} setName={setName} />
      )}
      <Footer />
    </Container>
  )
}

export default App
