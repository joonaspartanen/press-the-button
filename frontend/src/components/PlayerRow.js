import React from 'react'

const players = [{ id: 1, name: 'Joonas', score: 20 }]

const PlayerRow = () => {
  players.map((p) => {
    return (
      <li></li>
    )
  })
}

export default PlayerRow
