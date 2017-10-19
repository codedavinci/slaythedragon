import React from 'react'
import { Drawer } from 'material-ui'
import { connect } from 'react-redux'
import './menu.css'

const Menu = ({toggle, dispatch }) =>{
  return (
    <Drawer 
      open={toggle}
      width={300}
      docked={false}
      onRequestChange={(a) => dispatch({ type: "TOGGLE_MENU"}) }>

    </Drawer>
  )
}

export default connect(state => state.toggleMenu)(Menu)



