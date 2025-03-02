import React, { useState } from 'react'
import style from './CardItem.module.css'

const CardItem = (props) => {
    let [count,setCount] = useState(props.el.count)

    const remove = () => {
    props.removeCart(props.el.id)
    }
    

    const minus = () => {
        if (count > 1) {
            setCount(--count)
            props.change(count,props.el.id)
        }
    }

    const plus = () =>{
        setCount(++count)
        props.change(count,props.el.id)
    }
  return (
    <div className={style.Big}>
        <div className={style.first}>
            <h2>{props.el.title}</h2>
            <img src={props.el.image} width={150}/>
        </div>
        <div className={style.second}>
            <button onClick={minus}>-</button>
            <h4>{count}</h4>
            <button onClick={plus}>+</button>
        </div>
        <div className={style.third}>
            <h4>Price:{props.el.cardPrice}$</h4>
            <button className={style.Xbutton} onClick={remove}>x</button>
        </div>
    </div>
  )
}

export default CardItem