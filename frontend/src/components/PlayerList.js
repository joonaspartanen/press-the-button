import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const players = [
  { id: 1, name: 'Joonas', score: 20 },
  { id: 2, name: 'Nuutti', score: 20 }
]

const PlayerList = ({ players }) =>
  players.map(p => {
    return (
      <tr key={p.id}>
        <th>{p.name}</th>
        <th data-cy="score">{p.score}</th>
      </tr>
    )
  })

export default PlayerList
