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

  useEffect(() => {
    socket.on('gameState', data => {
      console.log(data)
      setPlayers(data.players)
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
  }, [players, score])

  return (
    <div>
      <h1> Press the Button! </h1>{' '}
      <Notification notification={notification}></Notification>
      <button onClick={handleClick}> Press </button>
      {players !== null && <PlayerList players={players}></PlayerList>}
      <NameForm></NameForm>
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

const NameForm = () => {
  const [name, setName] = useState('')

  const handleNameChange = event => {
    setName(event.target.value)
    console.log(name)
  }

  const enterGame = event => {
    console.log('???')
    event.preventDefault()
    console.log('new player')
    socket.emit('newPlayer', name)
  }

  return (
    <form onSubmit={enterGame}>
      <input value={name} onChange={handleNameChange} required></input>
      <button type="submit">Play</button>
    </form>
  )
}

export default App
