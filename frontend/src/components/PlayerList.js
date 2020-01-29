import React from 'react'
import { Table } from 'react-bootstrap'
import PlayerRow from './PlayerRow'

const PlayerList = ({ players }) => {
  return (
    <Table striped bordered size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <PlayerRow players={players} />
      </tbody>
    </Table>
  )
}

export default PlayerList
