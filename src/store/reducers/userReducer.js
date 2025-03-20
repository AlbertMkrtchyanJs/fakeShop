const GET_USERS = 'getusers'

const initState = {
    users: []
}

const userReducer = (state = initState,action) => {
    switch(action.type){
         case GET_USERS:
             return{
                 ...state,
                 users: action.payload
             }
 
     default : 
     return state
    }
 }

 export const getusersAC = (users) => ({type: GET_USERS, payload :users}) 

 export default userReducer