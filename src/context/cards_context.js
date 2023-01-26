import React from "react";
import reducer from "../reducers/cards_reducer";
import axios from "axios";
import {
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
  GET_CARDS_BEGIN,
  GET_CARDS_SUCCESS,
  GET_CARDS_ERROR,
} from "../actions";

const initialState = {
  isSidebarOpen: false,
  cards_error: false,
  cards: [],
  featured_cards: [],
};

const CardsContext = React.createContext();
const url = "https://api.pokemontcg.io/v2/cards";
export const CardsProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const FetchCards = async () => {
    try {
      const response = await fetch(url);
      const card = await response.json();
      const cards = card.data;
      dispatch({ type: GET_CARDS_SUCCESS, payload: cards });
    } catch (error) {
      dispatch({ type: GET_CARDS_ERROR });
    }
  };

  React.useEffect(() => {
    FetchCards();
  }, []);

  return (
    <CardsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </CardsContext.Provider>
  );
};

export const useCardsContext = () => {
  return React.useContext(CardsContext);
};

export default CardsProvider;
