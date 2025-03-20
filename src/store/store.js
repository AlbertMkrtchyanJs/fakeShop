import {combineReducers, createStore} from 'redux'
import mainReducer from './reducers/mainReducer'
import userReducer from './reducers/userReducer'
import prodReducer from './reducers/prodReducer'
import countReducer from './reducers/countReducer'
import removeReducer from './reducers/removeReducer'


const rootReducer = combineReducers({
    mainState: mainReducer,
    userState : userReducer,
    prodState : prodReducer,
    countState : countReducer,
    removeState : removeReducer
})
export const store = createStore(rootReducer)