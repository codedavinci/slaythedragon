import React from 'react'
import { AppBar } from 'material-ui'
import { connect } from 'react-redux'
import { LeftSide, RightSide } from './index'

const Header = ({ dispatch }) => {
  return (
    <AppBar
      title="SlayTheDragon" 
      iconElementRight={<LeftSide />}
      onLeftIconButtonTouchTap={(e) => dispatch({ type: "TOGGLE_MENU"}) } />
  )
}

export default connect()(Header)

