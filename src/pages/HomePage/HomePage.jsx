import React from 'react'
import style from './HomePage.module.css'
import ProductCard from '../../components/ProductCard/ProductCard'

const HomePage = (props) => {
  return (
    <>
    <div className={style.products}>
    {
        props.prod.map((el)=>{
                return <ProductCard key={el.id} el={el} addToCart={props.addToCart}/>
                
            })
        }
    </div>
    </>
  )
}

export default HomePage