import React from "react";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE, GET_CARDS_SUCCESS } from "../actions";

function cards_reducer(state, action) {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === GET_CARDS_SUCCESS) {
    const featured_cards = action.payload.filter(
      (card) => card.cardmarket.prices.averageSellPrice > 10
    );

    return {
      ...state,
      cards: action.payload,
      featured_cards,
    };
  }
}

export default cards_reducer;
