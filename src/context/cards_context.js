import React from "react";
import reducer from "../reducers/cards_reducer";
import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../actions";

const initialState = {
  isSidebarOpen: false,
};

const CardsContext = React.createContext();

export const CardsProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };
};
