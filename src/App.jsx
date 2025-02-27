
import { Routes,Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

import CardPage from './pages/CardPage/CardPage'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'

import style from './App.module.css'

function App() {
  const[prod,setProd] = useState([])
  const[card,setCard] = useState([])
useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(res => setProd(res.map((prod)=>{
    return {
      ...prod,
      count : 1,
      cardPrice : prod.price
    }
  })))
},[])

const addToCart = (item ) => {
 setCard((card)=>{
  const exists = card.some((el)=>el.id === item.id)

  if (!exists) {
    return [...card,item]
  }
return card
 })
  
}

  return (
    <div className={style.App}>
     <Routes>
      <Route path='/' element={<Layout/> }>
        <Route index element={<HomePage prod={prod}  addToCart={addToCart}/> }/>
        <Route path='/cart' element={<CardPage card={card} setProd={setCard}/>}/>
      </Route>
     </Routes>
    </div>
  )
}

export default App
