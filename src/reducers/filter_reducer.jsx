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
      filtered_cards: [...action.payload],
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return {
      ...state,
      grid_view: true,
    };
  }
  if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      grid_view: false,
    };
  }
  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    };
  }
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
}

export default filter_reducer;
