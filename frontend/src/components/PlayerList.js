import React from 'react'
import { Table } from 'semantic-ui-react'

const PlayerList = ({ players }) => {
  return (
    <Table basic='very' inverted celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>score</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {players.map(p => (
          <Table.Row key={p.id}>
            <Table.Cell>{p.name}</Table.Cell>
            <Table.Cell>{p.score}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export default PlayerList
