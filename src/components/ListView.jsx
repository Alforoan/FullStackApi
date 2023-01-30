import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function ListView({ cards }) {
  return (
    <Wrapper>
      {cards
        .filter((card) => card?.cardmarket)
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

                <h5>{price ? `$${price}` : "No market price"}</h5>
                <Link to={`/cards/${id}`}>Details</Link>
              </div>
            </article>
          );
        })}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .cards {
    display: flex;
  }
`;

export default ListView;
