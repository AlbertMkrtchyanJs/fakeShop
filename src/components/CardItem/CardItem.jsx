
import { useDispatch, useSelector } from 'react-redux'
import style from './CardItem.module.css'
import { getMinusCountAC, getPlusCountAC } from '../../store/reducers/countReducer'
import { useContext } from 'react'
import { MyContext } from '../../context/myContext'


const CardItem = (props) => {
   const {change} = useContext(MyContext)
    const dispatch = useDispatch()
   const {count} = useSelector((state) => state.countState)

    const remove = () => {
    props.removeCart(props.el.id)
    }
    

    const minus = () => {
        if (count > 1) {
            dispatch(getMinusCountAC(count))
            change(count,props.el.id)
        }
    }

    const plus = () =>{
        dispatch(getPlusCountAC(count))
        change(count,props.el.id)
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
            <button className={style.Xbutton} onClick={remove}>remove</button>
        </div>
    </div>
  )
}

export default CardItem