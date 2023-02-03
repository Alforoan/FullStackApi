import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function ListView({ cards }) {
  return (
    <Wrapper>
      {cards
        .filter((card) => card.cardmarket?.prices?.averageSellPrice)
        .map((card) => {
          const {
            id,
            name,
            images: { large: image },
            cardmarket: {
              prices: { averageSellPrice: price },
            },
            flavorText: description,
          } = card;

          return (
            <article className="cards" key={id}>
              <img src={image} alt={name} />
              <div className="info-container">
                <h4 className="name">{name}</h4>

                <h5 className="price">${price}</h5>
                <p>{description}</p>
                <Link className="btn" to={`/cards/${id}`}>
                  Details
                </Link>
              </div>
            </article>
          );
        })}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: auto;

    border-radius: 0.25rem;
    margin-bottom: 1rem;
  }

  .cards {
    margin-left: 1rem;
    margin-top: 1rem;
  }
  .price {
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  .name {
    font-size: 4rem;
  }
  .info-container {
    margin-left: 2rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1.4rem;
    font-size: 1.3rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
    text-decoration: none;
    font-size: 1.5rem;
    padding: 0.5rem 0.3rem;
    background: #e9d66b;
    border-radius: 5px;

    :visited {
      color: black;
    }
  }
  @media (min-width: 1140px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
  @media screen and (max-width: 600px) {
    .name {
      font-size: 3rem;
    }
    .info-container {
      margin-left: 1rem;
    }
    p {
      max-width: 45em;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }
    img {
      margin-left: 0;
    }
  }
`;

export default ListView;
