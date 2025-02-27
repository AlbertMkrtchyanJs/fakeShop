import React from 'react'

import { NavLink } from 'react-router-dom'
import { MdOutlineShoppingCartCheckout } from "react-icons/md"
import { IoLogoPlaystation } from "react-icons/io5"
import style from './Header.module.css'

const Header = () => {
  return (
    <div className={style.header}>
        <NavLink to='/' style={{color:'blue'}}>
    <h1 style={{fontSize: '40px'}}><IoLogoPlaystation /></h1>
        </NavLink>
        <div style={{fontSize: '25px'}}>
       <NavLink to='/card'>
        <MdOutlineShoppingCartCheckout />
       </NavLink>
        </div>
    </div>
  )
}

export default Header