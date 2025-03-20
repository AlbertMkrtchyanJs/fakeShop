import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { data } from "./data/data";
import { MyContext } from "./context/myContext";
import {useDispatch,useSelector} from 'react-redux'
import { getProductAC } from "./store/store";


import CardPage from "./pages/CardPage/CardPage";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import Reg from "./pages/Reg/Reg";
import Profile from "./pages/Profile/Profile";

import style from "./App.module.css";
import { instance } from "./api/api";




function App() {
const dispatch = useDispatch()

  const {users,cards,prod} = useSelector((state) => state)

  

  useEffect(() => {
    instance.get("/products")
    .then((res) => dispatch(getProductAC(res.data)));
    
  }, [dispatch]);

  useEffect(()=> {
    localStorage.setItem("items", JSON.stringify(cards));
  },[cards])

  const removeCart = (id) => {
    setCards(cards.filter((cards) => cards.id !== id));
  };

  const change = (count, id) => {
    setCards(
      cards.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            count: count,
            cardPrice: card.price * count,
          };
        } else {
          return card;
        }
      })
    );
  };

  const ClaerAllPage = () => {
    setCards([]);
  };

  const addToCart = (prod) => {
  dispatch({type: 'addtocart' , payload : prod})
   
  };

  return (
    <div className={style.App}>
      <MyContext.Provider
        value={{
          valid: data.validationSchema,
          cards,
          prod,
          addToCart,
          change,
          removeCart,
          ClaerAllPage,
          users,
          setUsers,
          
        }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<CardPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Reg />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;
