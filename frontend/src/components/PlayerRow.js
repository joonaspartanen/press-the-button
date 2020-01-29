import React from 'react'

const PlayerRow = ({ players }) => {
  players.map(p => {
    return (
      <tr key={p.id}>
        <td>{p.name}</td>
        <td>{p.score}</td>
      </tr>
    )
  })
}

export default PlayerRow
