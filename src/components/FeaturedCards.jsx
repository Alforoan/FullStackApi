import React from "react";
import styled from "styled-components";
import { useCardsContext } from "../context/cards_context";
import cards_reducer from "../reducers/cards_reducer";
import Card from "./Card";
import Loading from "./Loading";
import Error from "./Error";
import { Link } from "react-router-dom";

function FeaturedCards() {
  const {
    cards_loading: loading,
    featured_cards: name,
    cards_error: error,
  } = useCardsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper>
      <main className="card-container">
        <div>
          <h2 className="featured-cards">Featured Cards</h2>
        </div>
        <div className="pokemon-cards">
          {name.slice(0, 3).map((card) => {
            return <Card key={card.id} {...card} />;
          })}
        </div>
      </main>
      <Link to="/cards" className="btn">
        All Cards
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  margin-top: 6rem;
  padding-top: 3rem;

  padding-bottom: 5rem;
  background: #ffe6a8;
  .pokemon-cards {
    max-width: 1200px;
    margin: auto;
    display: grid;
  }
  .card-container {
    margin-bottom: 1rem;
  }
  .featured-cards {
    margin-bottom: 3rem;
    font-size: 4rem;
  }
  .btn {
    text-decoration: none;
    font-size: 1.7rem;
    background: lightgray;
    padding: 0.4rem 1rem;
    border-radius: 0.25rem;
    :visited {
      color: black;
    }
  }
  @media (min-width: 576px) {
    .pokemon-cards {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (max-width: 800px) {
    .featured-cards {
      font-size: 3rem;
    }
  }
`;

export default FeaturedCards;
// display: flex;
//     justify-content: space-between;
//     max-width: 1200px;
//     padding-bottom: 6rem;
//     margin: auto;
