import React from "react";
import PageHero from "../components/PageHero";
import CardList from "../components/CardList";
import Sort from "../components/Sort";
import Filters from "../components/Filters";
import styled from "styled-components";

function CardsPage() {
  return (
    <main>
      <PageHero title="Cards" />
      <Wrapper>
        <div className="container">
          <Filters />
          <div className="sort-cardlist-container">
            <Sort />
            <CardList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.div`
  .container {
    display: flex;
    max-width: 1100px;
    margin: auto;
    margin-top: 3rem;
    max-width: 75vw;
  }

  @media screen and (max-width: 990px) {
    .sort-cardlist-container {
      margin-top: 3rem;
    }
    .container {
      display: block;
    }
  }
`;

export default CardsPage;
