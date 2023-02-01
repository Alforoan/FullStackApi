import React from "react";
import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

// function cart_reducer(state, action) {
//     const cart_reducer = (state, action) => {
//   if (action.type === ADD_TO_CART) {
//     const {id, amount,card} = action.payload;
//     const tempItem = state.cart.find((i) => i.id === id );
//     if (tempItem) {
//         const tempCart = state.cart.map((cartItem) => {
//         if (cartItem.id === id + color) {
//           let newAmount = cartItem.amount + amount;
//           if (newAmount > cartItem.max) {
//             newAmount = cartItem.max;
//           }
//     } else {
//       const newItem = {
//         id: id,
//         name: card.name,

//         amount,
//         image: card.images.large,
//         price: card.cardmarket?.prices?.averageSellPrice,
//         max: 10,
//       };
//       return { ...state, cart: [...state.cart, newItem] };
//     }
//   }
//   return state;
//   throw new Error(`No Matching "${action.type}" - action type`);
// };

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, amount, card } = action.payload;
    const tempItem = state.cart?.find((i) => i.id === id);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id,
        name: card.name,

        amount,
        image: card.images.large,
        price: card.cardmarket.prices.averageSellPrice,
        max: 10,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        if (value === "dec") {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      } else {
        return item;
      }
    });
    return { ...state, cart: tempCart };
  }
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
