import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
import styled from "styled-components";

function CardList() {
  const { filtered_cards: cards } = useFilterContext();
  return (
    <Wrapper>
      <GridView cards={cards}>CardList</GridView>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
export default CardList;
