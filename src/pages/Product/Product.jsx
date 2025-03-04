import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { instance } from '../../App'
import Button from '../../components/Button/Button'


const Product = () => {
   const [product,setProduct] = useState({})
   const {id} = useParams()
   
   useEffect(()=>{
instance.get(`/products/${id}`)
.then((res)=> setProduct(res.data)
)
   },[id])
  return (

    <div>
        <h1>{product?.title}</h1>
        <img src={product.image} width={250}/>
        <Button />
    </div>
  )
}

export default Product