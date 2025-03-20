const GET_PRODUCTS = 'getpeoducts'

const initState = {
    prod: []
}

const prodReducer = (state = initState,action) => {
    switch(action.type){
         case GET_PRODUCTS:
             return{
                 ...state,
                 prod: action.payload.map((el) => ({
                     ...el,
                     count: 1,
                     cardPrice: el.price
                 }))
             }
        
     default : 
     return state
    }
 }

 export const getProductAC = (prod) =>({type: GET_PRODUCTS , payload: prod})

 export default prodReducer
