import React from "react";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../actions";

function cards_reducer(state, action) {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  return state;
}

export default cards_reducer;
