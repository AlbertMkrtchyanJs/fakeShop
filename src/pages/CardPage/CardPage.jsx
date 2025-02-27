import React from 'react'

import style from './CardPage.module.css'

const CardPage = (props) => {
  return (
    <div>
        {
            props.card.map((el)=>{
                return <li>{el.title}</li>
            })
        }
    </div>
  )
}

export default CardPage