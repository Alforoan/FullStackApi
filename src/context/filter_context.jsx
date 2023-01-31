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
import { useCardsContext } from "./cards_context";
import reducer from "../reducers/filter_reducer";

const initialState = {
  filtered_cards: [],
  all_cards: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    text: "",
    category: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    types: "all",
  },
};

const FilterContext = React.createContext();

export default function FilterProvider({ children }) {
  const { cards } = useCardsContext();
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    dispatch({ type: LOAD_CARDS, payload: cards });
  }, [cards]);

  React.useEffect(() => {
    dispatch({ type: SORT_CARDS });
  }, [cards, state.sort]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };
  const updateFilters = (e) => {};
  const clearFilters = () => {};
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setListView,
        setGridView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export const useFilterContext = () => {
  return React.useContext(FilterContext);
};
