import React from 'react'
import style from './ProductCard.module.css'

const ProductCard = (props) => {

const handleToCart = (el) => {
 props.addToCart(el)
 
}

  return (
    <div className={style.product}>
        <h2>{props.el.title}</h2>
        <img src={props.el.image} width={200} height={250}/>
        <button onClick={() => handleToCart(props.el)}>Buy</button>
    </div>
  )
}

export default ProductCard