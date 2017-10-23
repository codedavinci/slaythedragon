import React from 'react'
import { Logo } from '../common'
import './menu.css'

const games = [
  "LOL", 
  "Call Of Duty",
  "CS GO",
  "Overwatch"
]


const Title = () => (
  <div className="title-wrapper" >
    <span className="title-logo" >
      Slay The Dragon
   </span>
  </div>
)


const MenuList = () => (
  <div className="menulist-container" >
    <div  className="menu-list-wrapper" >
      <ul>  
        { games.map((c, i) => <MenuListItem  key={i} game={c} />)}
      </ul>
    </div>
  </div>
)


const MenuListItem = ({ game }) => (
  <li className="menu-item">{game}</li>
)

export default () => {
  return (
    <div className="sidebar">
      <Title />
      <MenuList />
    </div>
  )
}
