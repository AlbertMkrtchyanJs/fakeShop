import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { data } from "./data/data";
import { MyContext } from "./context/myContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAC, clearCartAC } from "./store/reducers/mainReducer";
import { removeItemAC } from "./store/reducers/removeReducer";
import { API } from "./api/api";

import CardPage from "./pages/CardPage/CardPage";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import Reg from "./pages/Reg/Reg";
import Profile from "./pages/Profile/Profile";

import style from "./App.module.css";

function App() {
  const dispatch = useDispatch();

  const { cards } = useSelector((state) => state.mainState);
  const { prod } = useSelector((state) => state.prodState);
  const { users } = useSelector((state) => state.userState);
  const { count } = useSelector((state) => state.countState);

  useEffect(() => {
    API.getProd(dispatch)
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cards));
  }, [cards]);

  const removeCart = (id) => {
    dispatch(removeItemAC(id));
  };

  const change = (count, id) => {
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
    });
  };

  const ClaerAllPage = () => {
    dispatch(clearCartAC(cards));
  };

  const addToCart = (prod) => {
    dispatch(addToCartAC(prod));
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
          count,
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
