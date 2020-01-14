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
  const [counter, setCounter] = useState(0)
  const [players, setPlayers] = useState([])
  const [score, setScore] = useState(0)

  useEffect(() => {
    socket.emit('newPlayer')
  }, [])

  useEffect(() => {
    socket.on('players', data => {
      setPlayers(data)
    })
    socket.on('win', score => {
      setScore(score)
      console.log(`new score ${score}`)
      setTimeout(() => {
        setScore(0)
      }, 2000)

    })
  }, [counter, players, score])

  return (
    <div>
      <h1> Press the Button! </h1>{' '}
      <WinNotification score={score}></WinNotification>
      <button onClick={handleClick}> Press </button>
      {players.length !== 0 && <PlayerList players={players}></PlayerList>}
    </div>
  )
}

const PlayerList = ({ players }) =>
  players.map(p => {
    return (
      <p key={p.id}>
        {p.id} has {p.score} points
      </p>
    )
  })

const WinNotification = ({ score }) => {
  if (score === 0) {
    return null
  }

  return (
    <div>
      You got {score} points!
    </div>
  )
}

export default App
