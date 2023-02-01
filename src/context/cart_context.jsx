import React from "react";
import reducer from "../reducers/cart_reducer";

import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  tax_fee: 0,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const addToCart = (id, amount, card) => {
    dispatch({ type: ADD_TO_CART, payload: { id, amount, card } });
  };
  const removeItem = (id) => {};
  const toggleAmount = (id, value) => {};
  const clearCart = () => {};
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return React.useContext(CartContext);
};
