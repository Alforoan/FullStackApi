import React from "react";
import styled from "styled-components";
import { useCardsContext } from "../context/cards_context";
import cards_reducer from "../reducers/cards_reducer";
import Card from "./Card";

function FeaturedCards() {
  const { featured_cards: name } = useCardsContext();

  if (!name) {
    return <div>loading</div>;
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
