import { combineReducers } from "redux";
import { cartProductsReducer, productReducer, selectedProductsReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductsReducer,
    cartProducts: cartProductsReducer
})

export default reducers;