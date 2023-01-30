import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Link } from "react-router-dom";

function GridView({ cards }) {
  return (
    <Wrapper>
      {/* <div>
        {cards.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
      </div> */}
      {cards
        .filter((card) => card.cardmarket?.prices?.averageSellPrice)
        .map((card) => {
          const {
            id,
            name,
            images: { large: image },
            cardmarket: {
              prices: { averageSellPrice: price },
            },
          } = card;

          return (
            <article className="cards" key={id}>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>

                <h5>{price}</h5>
                <Link to={`/cards/${id}`}>Details</Link>
              </div>
            </article>
          );
        })}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
export default GridView;
