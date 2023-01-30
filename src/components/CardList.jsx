import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
import styled from "styled-components";

function CardList() {
  const { filtered_cards: cards, grid_view } = useFilterContext();
  if (cards.length < 1) {
    return <h5>Sorry, better luck next time!</h5>;
  }
  if (grid_view === false) {
    return <ListView cards={cards} />;
  }
  return (
    <Wrapper>
      <GridView cards={cards}>CardList</GridView>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
export default CardList;
