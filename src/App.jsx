import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import CardPage from "./pages/CardPage/CardPage";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";

import style from "./App.module.css";

function App() {
  const [prod, setProd] = useState([]);
  const [cards, setCards] = useState([]);
  const [cart,setCart] = useState([])
 
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) =>
        setProd(
          res.map((prod) => {
            return {
              ...prod,
              count: 1,
              cardPrice: prod.price,
            };
          })
        )
      );
  }, []);

  
  
  
  const removeCart = (id) => {
   
    setCards(cards.filter(cards => cards.id !== id))
  }

  const change = (count, id) => {
    setCards(cards.map((card) => {
      if(card.id === id){
        return {
          ...card,
          count : count,
          cardPrice : card.price * count
        }
      }else {
        return card
      }
    }))
  }

  const ClaerAllPage = () => {
    setCards([])
  }

  

  const addToCart = (item) => {

    let bull = false

    cards.forEach((card) => {
      if (card.id === item.id) {
        bull = true
        setCards(cards.map((el) => {
          if (el.id === item.id) {
            return{
              ...el,
              count : ++el.count,
              cardPrice : el.cardPrice + el.price 
            }
          }else {
            return el
          }
        }))
      }
    })

    if(!bull){
      setCards((card)=>{
        return[...card,item]
      })
    }
    
  };

  return (
    <div className={style.App}>
      <Routes>
        <Route path="/" element={<Layout cards= {cards}/>}>
          <Route
            index
            element={
              <HomePage prod={prod}  addToCart={addToCart} />
            }
          />
          <Route
            path="/cart"
            element={<CardPage  cards={cards} change={change} removeCart={removeCart} ClaerAllPage={ClaerAllPage}/>}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
