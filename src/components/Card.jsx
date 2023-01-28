import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
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
      <main className="card-container">
        <div>
          <h3 className="pokemon-name">{name}</h3>
          <img className="pokemon-image" src={image} alt={name} />
          <Link to={`/cards/${id}`}>
            <FaSearch />
          </Link>
        </div>
        <footer>
          <p>${price}</p>
        </footer>
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .pokemon-image {
    width: 300px;
    height: 400px;
  }
  .pokemon-name {
    text-align: center;
  }
  .pokemon-image:hover {
    -webkit-filter: brightness(65%);
    transition: all 0.3s linear;
    cursor: pointer;
  }

  padding-right: 1rem;
  padding-left: 1rem;
`;

export default Card;
