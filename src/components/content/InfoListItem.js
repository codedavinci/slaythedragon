import React from 'react'
import {
  TableRow,
  TableRowColumn,
} from 'material-ui'

const InfoListItem = ({ champ }) => {
  return (
    <TableRow>
      <TableRowColumn>{champ.id}</TableRowColumn>
      <TableRowColumn>{champ.key}</TableRowColumn>
      <TableRowColumn>{champ.name}</TableRowColumn>
      <TableRowColumn>{champ.title}</TableRowColumn>
    </TableRow>
  )
}

export default InfoListItem
