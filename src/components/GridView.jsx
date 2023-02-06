import React from "react";
import styled from "styled-components";
import CardTwo from "./CardTwo";

function GridView({ cards }) {
  return (
    <Wrapper>
      <div className="cards-container">
        {cards.map((card) => {
          return <CardTwo key={card.id} {...card} />;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  img {
    height: 250px;
  }

  .cards-container {
    display: grid;
    gap: 1rem 0;
    margin-left: -1rem;
    margin-right: -1.3rem;
  }

  @media (min-width: 992px) {
    .cards-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .cards-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
export default GridView;
