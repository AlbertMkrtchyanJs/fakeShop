import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

const Layout = (props) => {
  return (
    <div>
        <Header cards= {props.cards}/>
        <Outlet />
    </div>
  )
}

export default Layout