import React from "react";
import styled from "styled-components";
function Card({
  id,
  name,
  images: { large: image },
  cardmarket: {
    prices: { averageSellPrice: price },
  },
}) {
  return (
    <Wrapper>
      <div>
        <h3>{name}</h3>
        <img src={image} alt={name} />
      </div>
      <footer>
        <p>{price}</p>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default Card;
