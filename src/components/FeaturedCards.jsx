import React from "react";
import styled from "styled-components";
import { useCardsContext } from "../context/cards_context";
import cards_reducer from "../reducers/cards_reducer";
import Card from "./Card";
import Loading from "./Loading";
import Error from "./Error";

function FeaturedCards() {
  const {
    cards_loading: loading,
    featured_cards: name,
    cards_error: error,
  } = useCardsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper>
      <div>
        <h2 className="featured-cards">Featured Cards</h2>
      </div>
      <div className="pokemon-cards">
        {name.slice(0, 3).map((card) => {
          return <Card key={card.id} {...card} />;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
  .pokemon-cards {
    display: flex;
    justify-content: center;
  }

  .featured-cards {
    margin-bottom: 3rem;
  }
`;

export default FeaturedCards;
