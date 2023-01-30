import React from "react";
import PageHero from "../components/PageHero";
import CardList from "../components/CardList";
import Sort from "../components/Sort";
import Filters from "../components/Filters";
import styled from "styled-components";

function CardsPage() {
  return (
    <main>
      <PageHero />
      <Wrapper>
        <div>
          <Filters />
          <div>
            <Sort />
            <CardList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.div``;

export default CardsPage;
