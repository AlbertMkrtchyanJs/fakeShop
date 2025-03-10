import React, { useContext } from 'react'
import style from './HomePage.module.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import { MyContext } from '../../context/myContext'

const HomePage = () => {
  const {prod,addToCart} = useContext(MyContext)
  return (
    <>
    <div className={style.products}>
    {
        prod.map((el)=>{
                return <ProductCard   key={el.id} el={el} addToCart={addToCart}/>
                
            })
        }
    </div>
    </>
  )
}

export default HomePage