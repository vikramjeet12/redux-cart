

const initialState = {
  cart: [],
  searchUser: []
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {

    case "ADD_TO_CART":
      const findIndx = state.cart.findIndex((index) => index.id === action.payload.id);
      if (findIndx >= 0) {
        state.cart[findIndx].qnty += 1;
      } else {
        const data = { ...action.payload, qnty: 1 }
        return {
          ...state,
          cart: [...state.cart, data]
        }
      }

    case "REMOVE_TO_CART":
      let data = state.cart.filter((itemId) => itemId.id !== action.payload);
      return {
        ...state,
        cart: data
      }

    case "INCREMENT_TO_CART":
      const findIndex_Increment = state.cart.findIndex((index) => index.id === action.payload.id);
      const increment = state.cart[findIndex_Increment].qnty += 1;
      return {
        ...state,
        cart: [...state.cart]
      }
    case "DECREMENT_TO_CART":
      const findIndex_decrement = state.cart.findIndex((index) => index.id === action.payload.id);

      if (state.cart[findIndex_decrement].qnty >= 2) {
        const decrease_item = state.cart[findIndex_decrement].qnty -= 1
      }
      return {
        ...state,
        cart: [...state.cart]
      }
    case "SEARCH_TO_CART":
      // const searchData = state.cart.filter((item) => item.rname == action.payload)
      // console.log(searchData);
      return {
        ...state,
        searchUser: action.payload
      }
    default:
      return state
  }
}