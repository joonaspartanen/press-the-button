import React from 'react'
import { Table } from 'semantic-ui-react'

const Scoreboard = ({ players }) => {
  return (
    <Table basic='very' inverted unstackable textAlign='center'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Score</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {players.map(p => (
          <Table.Row key={p.id}>
            <Table.Cell>{p.name}</Table.Cell>
            <Table.Cell data-cy='score'>{p.score}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export default Scoreboard
