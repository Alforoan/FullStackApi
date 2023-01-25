import React from "react";
import styled from "styled-components";
import { useCardsContext } from "../context/cards_context";
import cards_reducer from "../reducers/cards_reducer";
import Card from "./Card";

function FeaturedCards() {
  const { featured_products: featured } = useCardsContext();
  return (
    <Wrapper>
      <div>
        <h2>Featured Products</h2>
      </div>
      <div>
        {featured.slice(0, 3).map((card) => {
          return <Card key={card.id} {...card} />;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default FeaturedCards;
