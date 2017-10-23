import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui'
import InfoListItem from './InfoListItem'
import './main.css'




const InfoList = ({ champs }) => {
  return (
    <div className="list-wrapper">
      <Table fixedHeader selectable={true} height={700}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Key</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Title</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox
        >
          {Object.keys(champs).map(key => <InfoListItem key={champs[key].key} champ={champs[key]} />)}
        </TableBody>
      </Table>
    </div>
  )
}

export default InfoList

