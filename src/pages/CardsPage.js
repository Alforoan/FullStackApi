import React from "react";
import PageHero from "../components/PageHero";
import CardList from "../components/CardList";

function CardsPage() {
  return (
    <main>
      <PageHero />
      <div>
        <CardList />
      </div>
    </main>
  );
}

export default CardsPage;
