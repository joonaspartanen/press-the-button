import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const PlayerList = ({ players }) =>
  players.map(p => {
    return (
      <li key={p.id} style={{ color: '#000' }}>
        {p.name} has {p.score} points
      </li>
    )
  })

export default PlayerList
