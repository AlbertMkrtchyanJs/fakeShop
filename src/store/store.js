import {combineReducers, createStore} from 'redux'
import mainReducer from './reducers/mainReducer'
import userReducer from './reducers/userReducer'
import prodReducer from './reducers/prodReducer'
import countReducer from './reducers/countReducer'
import removeReducer from './reducers/removeReducer'
import productReducer from './reducers/reqReducer'
import cartReducer from './reducers/cartReducer'


const rootReducer = combineReducers({
    mainState: mainReducer,
    userState : userReducer,
    prodState : prodReducer,
    countState : countReducer,
    removeState : removeReducer,
    productState : productReducer,
    cartState : cartReducer
})
export const store = createStore(rootReducer)