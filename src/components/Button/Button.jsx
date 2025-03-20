import React from 'react'
import style from './Button.module.css'

const Button = (props) => {
   
    
  return (
    <div>
        <button onClick={() => props.handleToCart(props.el)} className={style.butt}>Buy</button>
    </div>
  )
}

export default Button