const CART_BUY_ITEM = 'cartbuyitem'

const initState = {
    cart: []
}

const cartReducer = (state = initState,action) => {
    switch(action.type){
         case CART_BUY_ITEM:
             return{
                 ...state,
                 cart: [...state.cart,action.payload]
             }
 
     default : 
     return state
    }
 }

 export const getCartBuyItemAC = (product) => ({type: CART_BUY_ITEM, payload :product}) 

 export default cartReducer