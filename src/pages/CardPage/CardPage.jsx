import React, { useEffect, useState } from 'react'

import style from './CardPage.module.css'

const CardPage = (props) => {

const[cartCount,setCartCount] = useState('')

  


  return (
    <div>
        {
            props.card.map((el)=>{
                return (
                    <>
                    <li key={el.id}>{el.title}</li>
                    <img src={el.image} width={150}/>
                    <p>{cartCount}</p>
                    
                    </>
                )

            })
        }
    </div>
  )
}

export default CardPage