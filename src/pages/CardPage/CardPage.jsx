

import style from './CardPage.module.css'

const CardPage = (props) => {



  


  return (
    <div className={style.cartItem}>
        {
            props.card.map((el)=>{
                return (
                    <div className={style.cart}>
                    <li key={el.id}>{el.title}</li>
                    <img src={el.image} width={150}/>
               
                    
                    </div>
                )

            })
        }
    </div>
  )
}

export default CardPage