import React  from 'react'
import style from './ProductCard.module.css'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'

const ProductCard = (props) => {

    const handleToCart = (el) => {
    props.addToCart(el)   
}

  return (
    <div className={style.product}>
        <h2>{props.el.title}</h2>
        <NavLink to={`/products/${props.el.id}`}>
        <img src={props.el.image} width={200} height={250}/>
        </NavLink>
        <Button handleToCart={() => handleToCart(props.el)} />
    </div>
  )
}

export default ProductCard