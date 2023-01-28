import React from "react";
import reducer from "../reducers/cards_reducer";
import axios from "axios";
import {
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
  GET_CARDS_BEGIN,
  GET_CARDS_SUCCESS,
  GET_CARDS_ERROR,
  GET_SINGLE_CARD_BEGIN,
  GET_SINGLE_CARD_SUCCESS,
  GET_SINGLE_CARD_ERROR,
} from "../actions";

const initialState = {
  isSidebarOpen: false,
  cards_loading: false,
  cards_error: false,
  cards: [],
  featured_cards: [],
  single_card_loading: false,
  single_card_error: false,
  single_card: {},
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

  // const FetchCards = async () => {
  //   dispatch({ type: GET_CARDS_BEGIN });
  //   try {
  //     const response = await fetch(url);
  //     const card = await response.json();
  //     const cards = card.data;
  //     dispatch({ type: GET_CARDS_SUCCESS, payload: cards });
  //   } catch (error) {
  //     dispatch({ type: GET_CARDS_ERROR });
  //   }
  // };

  const FetchCards = async (url) => {
    dispatch({ type: GET_CARDS_BEGIN });
    try {
      const response = await axios.get(url);
      const cards = response.data.data;
      dispatch({ type: GET_CARDS_SUCCESS, payload: cards });
    } catch (error) {
      dispatch({ type: GET_CARDS_ERROR });
    }
  };

  // const FetchSingleCard = async () => {
  //   dispatch({ type: GET_SINGLE_CARD_BEGIN });
  //   try {
  //     const response = await fetch(url);
  //     const cards = await response.json();
  //     const singleCard = cards.data;
  //     dispatch({ type: GET_SINGLE_CARD_SUCCESS, payload: singleCard });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const FetchSingleCard = async (url) => {
    dispatch({ type: GET_SINGLE_CARD_BEGIN });
    try {
      const response = await axios.get(url);
      const singleCard = response.data.data;
      dispatch({ type: GET_SINGLE_CARD_SUCCESS, payload: singleCard });
    } catch (error) {
      dispatch({ type: GET_SINGLE_CARD_ERROR });
    }
  };

  React.useEffect(() => {
    FetchCards(url);
  }, []);

  return (
    <CardsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, FetchSingleCard }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export const useCardsContext = () => {
  return React.useContext(CardsContext);
};

export default CardsProvider;
