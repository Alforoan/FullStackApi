import React from "react";
import styled from "styled-components";

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
                <h5>{id}</h5>
                <h5>
                  {typeof price === "undefined"
                    ? "No market price"
                    : `$${price}`}
                </h5>
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
