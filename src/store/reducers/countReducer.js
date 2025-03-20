const PLUS_COUNT = 'getpluscount'
const MINUS_COUNT = 'getminuscount'
const initState = {
    count: 1
}

const countReducer = (state = initState,action) => {
    switch(action.type){
         case PLUS_COUNT:
             return{
                 ...state,
                 count: ++action.payload
             }
          case MINUS_COUNT :
            return{
                ...state,
                count: --action.payload
            }   
     default : 
     return state
    }
 }

 export const getMinusCountAC = (count) => ({type: MINUS_COUNT, payload :count})
 export const getPlusCountAC = (count) => ({type: PLUS_COUNT, payload :count}) 

 export default countReducer