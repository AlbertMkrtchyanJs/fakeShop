import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import CardPage from "./pages/CardPage/CardPage";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import Reg from "./pages/Reg/Reg";

import style from "./App.module.css";
import axios from "axios";
import Profile from "./pages/Profile/Profile";

export const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

function App() {
  const [prod, setProd] = useState([]);
  const [cards, setCards] = useState([]);
  const [users, setUsers] = useState([
    { id: 1, name: "Gago", email: "Gago@gmail.com", password: "1234" },
    { id: 2, name: "Abo", email: "Abo@gmail.com", password: "1234" },
  ]);

  useEffect(() => {
    instance.get("/products").then((res) => setProd(res.data));
    const savedProducts = JSON.parse(localStorage.getItem("items")) || [];
    setCards(savedProducts);
  }, []);

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

  const addToCart = (item) => {
   localStorage.setItem('items', JSON.stringify(cards)) 

    const findedProd = cards.find((el) => el.id === item.id);
    if (findedProd) {
      setCards(
        cards.map((el) => {
          return el.id === item.id ? { ...el, count: el.count + 1 } : el;
        })
      );
    } else {
      setCards([...cards, { ...item, count: 1 }]);
    }
  };

  return (
    <div className={style.App}>
      <Routes>
        <Route path="/" element={<Layout cards={cards} />}>
          <Route
            index
            element={<HomePage prod={prod} addToCart={addToCart} />}
          />
          <Route path="/products/:id" element={<Product />} />
          <Route
            path="/cart"
            element={
              <CardPage
                cards={cards}
                change={change}
                removeCart={removeCart}
                ClaerAllPage={ClaerAllPage}
              />
            }
          />
          <Route path="/login" element={<Login users={users} />} />
          <Route path="/registration" element={<Reg setUsers={setUsers} />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
