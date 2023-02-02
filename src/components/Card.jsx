import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
function Card({ id, name, images: { large: image }, cardmarket }) {
  return (
    <Wrapper>
      <main className="card-container">
        <div>
          <div className="info-image-container">
            <div className="info-container">
              <h3 className="pokemon-name">{name}</h3>
              <p className="price">
                {cardmarket.prices?.averageSellPrice
                  ? `$${cardmarket.prices?.averageSellPrice}`
                  : "No market price"}
              </p>
            </div>
            <div className="image-link-container">
              <img className="pokemon-image" src={image} alt={name} />
              <Link className="link" to={`/cards/${id}`}>
                <FaSearch />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .pokemon-image {
    width: 270px;
    height: 380px;
    margin-bottom: 2rem;
  }
  .pokemon-name {
    font-size: 1.3rem;
  }
  .pokemon-image:hover {
    transition: all 0.3s linear;
  }
  .info-container {
    display: flex;
    justify-content: space-between;
    max-width: 260px;
    margin: auto;
    align-items: center;
    margin-bottom: 1rem;
  }
  .info-image-container {
    margin: auto;
  }
  .price {
    font-size: 1.2rem;
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    background: #eee600;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .image-link-container {
    position: relative;
    :hover .link {
      opacity: 1;
    }
  }
  .image-link-container:hover img {
    opacity: 0.5;
  }

  padding-right: 2rem;
  padding-left: 2rem;
`;

export default Card;
