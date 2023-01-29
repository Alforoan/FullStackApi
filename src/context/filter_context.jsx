import React from "react";
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

const initialState = {
  filtered_cards: [],
  all_cards: [],
};

const FilterContext = React.createContext();

function filter_context({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <FilterContext.Provider value="filter context">
      {children}
    </FilterContext.Provider>
  );
}

export const useFilterContext = () => {
  return React.useContext(FilterContext);
};
