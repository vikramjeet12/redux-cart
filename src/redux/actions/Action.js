export const ADD = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item
  }
}

export const REMOVE = (id) => {
  return {
    type: "REMOVE_TO_CART",
    payload: id
  }
}
export const INCREMENT = (item) => {
  return {
    type: "INCREMENT_TO_CART",
    payload: item
  }
}

export const DECREMENT = (item) => {
  return {
    type: "DECREMENT_TO_CART",
    payload: item
  }
}

export const SEARCH = (item) => {
  return {
    type: "SEARCH_TO_CART",
    payload: item
  }
}