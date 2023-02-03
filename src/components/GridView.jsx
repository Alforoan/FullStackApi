import React from "react";
import styled from "styled-components";
import CardTwo from "./CardTwo";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function GridView({ cards }) {
  return (
    <Wrapper>
      <div className="cards-container">
        {cards.map((card) => {
          return <CardTwo key={card.id} {...card} />;
        })}
      </div>
      {/* {cards
        .filter((card) => card.cardmarket?.prices?.averageSellPrice)
        .map((card) => {
          const {
            id,
            name,
            images: { large: image },
            cardmarket: {
              prices: { averageSellPrice: price },
            },
          } = card;

          return (
            <article className="cards" key={id}>
              <div className="name-price-container">
                <h4>{name}</h4>
                <h5>${price}</h5>
              </div>

              <div className="image-link-container">
                <img className="image" src={image} alt={name} />
                <Link className="link" to={`/cards/${id}`}>
                  <FaSearch />
                </Link>
              </div>
            </article>
          );
        })} */}
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
// display: flex;
//   flex-wrap: wrap;
//   max-width: 1000px;

//   .cards {
//     padding-left: 1rem;
//     padding-right: 1rem;
//     margin-bottom: 1.5rem;
//     border: 1px solid black;
//     max-width: 270px;
//   }
//   .image {
//     max-width: 100%;
//     height: auto;
//   }
//   .name-price-container {
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 0.5rem;
//     font-size: 1.2rem;
//     align-items: center;
//   }
//   .image-link-container {
//     width: 250px;
//     position: relative;
//     :hover .link {
//       opacity: 1;
//       transition: all 0.3s linear;
//     }
//   }
//   .link {
//     position: absolute;
//     z-index: 100;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     opacity: 0;
//     background: #eee600;
//     width: 2rem;
//     height: 2rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: 50%;

//     :visited {
//       color: black;
//     }
//   }
//   .image-link-container:hover img {
//     opacity: 0.5;
//     transition: all 0.3s linear;
//   }
//   @media (min-width: 1170px) {
//     .cards {
//       grid-template-columns: repeat(3, 1fr);
//     }
//   }
