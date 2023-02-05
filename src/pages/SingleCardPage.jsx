import React from "react";
import { useParams } from "react-router-dom";
import { useCardsContext } from "../context/cards_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PageHero from "../components/PageHero";

import AddtoCart from "../components/AddtoCart";

const single_card_url = `https://api.pokemontcg.io/v2/cards/`;

function SingleCardPage({ error }) {
  const { id } = useParams();
  const { single_card: card, FetchSingleCard } = useCardsContext();

  React.useEffect(() => {
    FetchSingleCard(`${single_card_url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  if (!card) {
    return <div>loading</div>;
  }

  const {
    name,
    rarity,

    images: { large: image },
    set: { name: setName },
    hp,
    types: type,
    subtypes: stage,
    attacks: attack,

    cardmarket: {
      prices: { averageSellPrice: price },
    },
  } = card;

  return (
    <Wrapper>
      <PageHero title={name} card />
      <main className="card-container">
        <div className="image-btn-container">
          <Link className="backtocards-btn" to="/cards">
            Back to cards
          </Link>
          <img className="pokemon-image" src={image} alt={name} />
        </div>
        <div className="card-center">
          <div className="info-container">
            <h2 className="name">{name}</h2>{" "}
            <p className="rarity-p">
              <span className="rarity">Rarity: </span>
              {rarity}
            </p>
            <h3 className="product-details">Product Details</h3>
            <div className="card-info">
              <p>HP: {hp}</p>
              <p>Set Name: {setName}</p>
              <p>
                <span>Card Type / HP / Stage: </span>
                {type} / {hp} / {stage[0]}
              </p>
              <p>
                <span>Attack 1: </span> {attack[0].name} -
                {attack[0].text ? attack[0].text : "No description"}
              </p>
              {attack[1] ? (
                <p>
                  <span>Attack 2: </span> {attack[1].name} -
                  {attack[1].text ? attack[1].text : "No description"}
                </p>
              ) : (
                ""
              )}
              {attack[2] && attack[2].text ? (
                <p>
                  <span>Attack 3: </span> {attack[2].name} -
                  {attack[2].text ? attack[2].text : "No description"}
                </p>
              ) : (
                ""
              )}
            </div>
            <footer className="price">
              {typeof price === "undefined" ? "No market price" : `$${price}`}
            </footer>
            <hr />
            <AddtoCart card={card} />
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .card-center {
    display: flex;
    justify-content: center;
  }
  .pokemon-image {
    max-width: 450px;
    margin-right: 3rem;
  }
  .image-btn-container {
    display: flex;
    flex-direction: column;
  }
  .card-container {
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
    max-width: 75vw;
    margin: auto;
    margin-top: 3rem;
    margin-bottom: 4rem;
  }
  .backtocards-btn {
    max-width: 150px;
    padding: 0.5rem 0.2rem;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    text-align: center;
    text-decoration: none;

    background: #f4ca16;
    border-radius: 0.25rem;
    :hover {
      background: #eee600;
      transition: all 0.3s linear;
    }
    :visited {
      color: black;
    }
  }
  .name {
    font-size: 4rem;
  }
  .rarity {
    font-size: 2rem;
  }
  .rarity-p {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
  .product-details {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  .price {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  .card-info {
    line-height: 2rem;
    font-size: 1.2rem;
  }
  hr {
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 1100px) {
    .card-container {
      flex-direction: column;
    }
    .image-btn-container {
      margin-bottom: 2rem;

      max-width: 80vw;
    }
    .pokemon-image {
      max-width: 100%;
      margin-right: 0;
    }
  }
`;

export default SingleCardPage;
