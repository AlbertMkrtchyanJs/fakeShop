

import CardItem from '../../components/CardItem/CardItem'
import style from './CardPage.module.css'

const CardPage = (props) => {

  const clear = () => {
    props.ClaerAllPage()
  }


  return (
    <div className={style.cartItem}>
                <div className={style.clear}>
                   <button onClick={clear} >Clear All</button>
                </div>
        {
            props.cards.map((el)=>{
                return (
                   <CardItem key={el.id}  el={el} change ={props.change} removeCart ={props.removeCart}/>
                )})
        }
    </div>
  )
}

export default CardPage