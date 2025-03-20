import axios from "axios";
import { getProductAC } from "../store/reducers/prodReducer";
import { getFetchProdAC } from "../store/reducers/reqReducer";


 const instance = axios.create({
    baseURL: "https://fakestoreapi.com",
  });

  export const API = {
    getProd(dispatch){
        instance.get("/products")
        .then((res) => dispatch(getProductAC(res.data)))
    },
    fetchProd(dispatch,id){
        instance.get(`/products/${id}`)
        .then((res)=> dispatch(getFetchProdAC(res.data)))
    }
  }