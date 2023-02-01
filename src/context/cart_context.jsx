import React from "react";
import reducer from "../reducers/cart_reducer";

import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

const initialState = {};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };
  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return React.useContext(CartContext);
};
