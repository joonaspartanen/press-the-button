import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
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
    <div>
      <h1> Press the Button! </h1>{' '}
      <Notification notification={notification}></Notification>
      <button onClick={handleClick}> Press </button>
      {players !== null && <PlayerList players={players}></PlayerList>}
    </div>
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
    <form onSubmit={enterGame}>
      <input value={name} onChange={handleNameChange} required></input>
      <button type="submit">Play</button>
    </form>
  )
}

export default App
