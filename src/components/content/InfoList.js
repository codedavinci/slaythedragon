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




class InfoList extends React.Component {
  constructor(props) {
    super(props)
    this.wrapper = null
    this.state = {
      elementHeight: 700,
    }
  }

  componentDidMount(){
    this.setState({ elementHeight: this.wrapper.clientHeight})
  }

  render() {
    const { champs } = this.props
    const { elementHeight } = this.state

    return (
      <div className="list-wrapper" ref={el =>  this.wrapper = el}>
        <Table fixedHeader selectable={true} height={`${elementHeight}px`}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn colSpan="4" tooltip="List of all champions v3" style={{ textAlign: 'center', fontSize: 36, fontFamily: "'Press Start 2P', cursive"}}>
                LOL Champions
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Key</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
          >
            {Object.keys(champs).map(key => <InfoListItem key={champs[key].key} champ={champs[key]} />)}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default InfoList

