import React, { useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../../api/api'
import Button from '../../components/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getCartBuyItemAC } from '../../store/reducers/cartReducer'

const Product = () => {
  const dispatch = useDispatch()
   const {id} = useParams()
   const product = useSelector((state) => state.productState.product)
   
   useEffect(()=>{
    API.fetchProd(dispatch,id)
   },[id])

   const handleToCart = () =>{
    dispatch(getCartBuyItemAC(product))
   }
  return (

    <div>
        <h1>{product.title}</h1>
        <img src={product.image} width={250}/>
        <Button handleToCart = {handleToCart}/>
    </div>
  )
}

export default Product