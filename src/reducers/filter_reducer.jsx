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
    let maxPrice = action.payload
      .filter((card) => card.cardmarket?.prices?.averageSellPrice)
      .map((card) => card.cardmarket.prices.averageSellPrice);

    maxPrice = Math.max(...maxPrice);

    // let maxPrice = action.payload.filter((card) => {
    //   if (card?.cardmarket) {
    //     if (
    //       typeof card.cardmarket.prices.averageSellPrice !== "undefined" ||
    //       typeof card.cardmarket.prices.averageSellPrice === "number"
    //     ) {
    //       return card.cardmarket.prices.averageSellPrice;
    //     }
    //   }
    // });
    // maxPrice = maxPrice.map((card) => card.cardmarket.prices.averageSellPrice);

    // maxPrice = Math.max(...maxPrice);
    console.log(maxPrice);
    return {
      ...state,
      all_cards: [...action.payload],
      filtered_cards: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
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
  if (action.type === SORT_CARDS) {
    const { sort, filtered_cards } = state;
    let tempCards = [...filtered_cards];
    if (sort === "price-lowest") {
      tempCards = tempCards
        .filter((card) => card.cardmarket?.prices?.averageSellPrice)
        .sort(
          (a, b) =>
            a.cardmarket.prices.averageSellPrice -
            b.cardmarket.prices.averageSellPrice
        );
    }
    if (sort === "price-highest") {
      tempCards = tempCards
        .filter((card) => card.cardmarket?.prices?.averageSellPrice)
        .sort(
          (a, b) =>
            b.cardmarket.prices.averageSellPrice -
            a.cardmarket.prices.averageSellPrice
        );
    }
    if (sort === "name-a") {
      tempCards = tempCards.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempCards = tempCards.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return {
      ...state,
      filtered_cards: tempCards,
    };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_CARDS) {
    const { all_cards } = state;
    const { text, price, types, rarity } = state.filters;
    let tempCards = [...all_cards];
    if (text) {
      tempCards = tempCards.filter((card) => {
        return card.name.toLowerCase().startsWith(text);
      });
    }
    if (types !== "all") {
      tempCards = tempCards.filter((card) => card.types[0] === types);
    }
    if (rarity !== "all") {
      tempCards = tempCards.filter((card) => card.rarity === rarity);
    }

    return { ...state, filtered_cards: tempCards };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",

        price: state.filters.max_price,
        types: "all",
        rarity: "all",
      },
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
}

export default filter_reducer;
