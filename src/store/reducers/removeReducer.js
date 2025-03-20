


const REMOVE_ITEM = 'remit'

const initState = {
    remove: []
}


const removeReducer = (state = initState,action) => {
    
    switch(action.type){
         case REMOVE_ITEM:
             return state.remove.filter(cards => cards.id !== action.payload)
     default : 
     return state
    }
 }

 export const removeItemAC = (id) => ({type: REMOVE_ITEM, payload :id}) 

 export default removeReducer