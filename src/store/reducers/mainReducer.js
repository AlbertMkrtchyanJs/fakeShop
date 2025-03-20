const ADD_TO_CART = "addtocart";
const CLEAR_CART = 'clear'

const initState = {
  cards: JSON.parse(localStorage.getItem("items")) || [],
};

const mainReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const findedProd = state.cards.find((el) => el.id === action.payload.id);
      let update;
      if (findedProd) {
        update = state.cards.map((el) =>
          el.id === action.payload.id ? { ...el, count: el.count + 1 } : el
        );
      } else {
        update = [...state.cards, { ...action.payload, count: 1 }];
      }
      return {
        ...state,
        cards: update,
      };
      case CLEAR_CART: 
      localStorage.removeItem('items')
      return{
        ...state,cards: []
      }

    default:
      return state;
  }
};

export const addToCartAC = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const clearCartAC = (cards) => ({
    type: CLEAR_CART,
    payload: cards
})

export default mainReducer;
