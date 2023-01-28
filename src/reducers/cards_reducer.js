import React from "react";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_CARDS_SUCCESS,
  GET_SINGLE_CARD_BEGIN,
  GET_SINGLE_CARD_SUCCESS,
  GET_CARDS_BEGIN,
} from "../actions";

function cards_reducer(state, action) {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === GET_CARDS_BEGIN) {
    return { ...state, cards_loading: true };
  }
  if (action.type === GET_CARDS_SUCCESS) {
    const featured_cards = action.payload.filter(
      (card) => card.name.length > 10
    );

    return {
      ...state,
      cards: action.payload,
      featured_cards,
    };
  }
  if (action.type === GET_SINGLE_CARD_BEGIN) {
    return {
      ...state,
      single_card_loading: true,
    };
  }
  if (action.type === GET_SINGLE_CARD_SUCCESS) {
    return {
      ...state,
      single_card: action.payload,
    };
  }
}

export default cards_reducer;
