import React from "react";
import reducer from "../reducers/cards_reducer";
import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../actions";

const initialState = {
  isSidebarOpen: false,
};

const CardsContext = React.createContext();

const CardsProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

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
