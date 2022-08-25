import { ActionTypes } from "../constants/action-types"

const initialState = {
  products: []
}

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload }
    default:
      return state;
  }
}

export const selectedProductsReducer = (state = [], { type, payload }) => {
  // console.log(payload);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCTS:
      return [];
    default:
      return state;
  }
};

const Cart = [];

export const cartProductsReducer = (state = Cart, { type, payload }) => {
  let doesItemExist;
  const product = payload;
  switch (type) {
    case ActionTypes.CART_PRODUCTS:
      //check if item already exists in cart
      doesItemExist = false;
      const newState = state.map((item) => {
        if (item.Id === payload.Id) {
          item.quantity++;
          doesItemExist = true;
        }
        return item;
      })
      if (doesItemExist) {
        // return newState;
        console.log(newState)
      }
      return [...state, { ...payload, quantity: 1 }];
    case ActionTypes.DELETE_PRODUCTS:
      break;
    default:
      return state;
  }
}