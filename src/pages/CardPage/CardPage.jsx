

import { useContext } from 'react'
import CardItem from '../../components/CardItem/CardItem'
import style from './CardPage.module.css'
import { MyContext } from '../../context/myContext'

const CardPage = () => {
const {cards,removeCart,ClaerAllPage} = useContext(MyContext)
  const clear = () => {
    ClaerAllPage()
  }

 


  return (
    <div className={style.cartItem}>
                <div className={style.clear}>
                   <button className={style.butt} onClick={clear} >Clear All</button>
                </div>
        {
            cards.map((el)=>{
                return (
                   <CardItem key={el.id}  el={el}  removeCart ={removeCart}/>
                )})
        }
       
    </div>
  )
}

export default CardPage