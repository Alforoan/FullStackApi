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
};

const FilterContext = React.createContext();

export default function FilterProvider({ children }) {
  const { cards } = useCardsContext();
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    dispatch({ type: LOAD_CARDS, payload: cards });
  }, [cards]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  return (
    <FilterContext.Provider value={{ ...state, setListView, setGridView }}>
      {children}
    </FilterContext.Provider>
  );
}

export const useFilterContext = () => {
  return React.useContext(FilterContext);
};
