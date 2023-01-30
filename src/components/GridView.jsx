import React from "react";
import styled from "styled-components";
import Card from "./Card";

function GridView({ cards }) {
  return (
    <Wrapper>
      <div>
        {cards.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
export default GridView;
