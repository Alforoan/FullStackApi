import {
  LOAD_CARDS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_CARDS,
  UPDATE_FILTERS,
  FILTER_CARDS,
  CLEAR_FILTERS,
} from "../actions";

import React from "react";

function filter_reducer(state, action) {
  if (action.type === LOAD_CARDS) {
    return {
      ...state,
      all_cards: [...action.payload],
      filter_cards: [...action.payload],
    };
  }
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
}

export default filter_reducer;
