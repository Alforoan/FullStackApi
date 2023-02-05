import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
import styled from "styled-components";

function CardList() {
  const { filtered_cards: cards, grid_view } = useFilterContext();
  if (cards.length < 1) {
    return (
      <Wrapper>
        <h2 className="loading">Loading...</h2>
      </Wrapper>
    );
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

const Wrapper = styled.div`
  .loading {
    text-align: center;
    font-size: 4rem;
    overflow: hidden;
    border-right: 0.15em solid orange;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.15em;
    animation: typing 2s steps(30, end), blink-caret 0.5s step-end infinite;
  }
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
`;
export default CardList;
