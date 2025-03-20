const FETCH_PRODUCT = 'getusers'

const initState = {
    product :{}
}

const productReducer = (state = initState,action) => {
    switch(action.type){
         case FETCH_PRODUCT:
             return{
                 ...state,
                 product: action.payload
             }
 
     default : 
     return state
    }
 }

 export const getFetchProdAC = (data) => ({type:FETCH_PRODUCT, payload :data}) 

 export default productReducer