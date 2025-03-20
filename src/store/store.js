import {createStore} from 'redux'

const ADD_TO_CART = 'addtocart'
const GET_USERS = 'getusers'
const GET_PRODUCTS = 'getpeoducts'

const initState = {
    users: [],
    products: [],
    cards : JSON.parse(localStorage.getItem("items")) || []
}

const reducer = (state = initState,action) => {
   switch(action.type){
    case ADD_TO_CART:
        const findedProd = state.cards.find((el) => el.id === action.payload.id);
        let update
        if (findedProd) {
          update = state.cards.map((el) =>  el.id === action.payload.id ? { ...el, count: el.count + 1 } : el)
          
        } else {
          update = [...state.cards, { ...action.payload, count: 1 }];
        }
        return{
            ...state,
            cards: update
        }
        case GET_PRODUCTS:
            return{
                ...state,
                products: action.payload.map((el) => ({
                    ...el,
                    count: 1,
                    cardPrice: el.price
                }))
            }
        case GET_USERS:
            return{
                ...state,
                users: action.payload
            }

    default : 
    return state
   }
}

export const addToCartAC = (product) => ({type: ADD_TO_CART, payload : product})
export const getProductAC = (products) =>({type: GET_PRODUCTS , payload: products})
export const getusersAC = (users) => ({type: GET_USERS, payload :users}) 
export const store = createStore(reducer)