import React from 'react'
import './layout.css'
import { Sidebar } from '../menu'

export default ({ children }) =>  (
    <div className="layout-container">
      <Sidebar />
      {children}
    </div>
  )


