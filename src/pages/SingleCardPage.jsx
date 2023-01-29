import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useCardsContext } from "../context/cards_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PageHero from "../components/PageHero";
import Loading from "../components/Loading";
import Error from "../components/Error";
import AddtoCart from "../components/AddtoCart";

const single_card_url = `https://api.pokemontcg.io/v2/cards/`;

function SingleCardPage() {
  const { id } = useParams();
  const { single_card: card, FetchSingleCard } = useCardsContext();

  React.useEffect(() => {
    FetchSingleCard(`${single_card_url}${id}`);
  }, [id]);

  if (!card) {
    return <div>loading</div>;
  }

  const {
    id: sky,
    name,
    rarity,

    images: { large: image },
    set: { name: setName },
    hp,
    types: type,
    subtypes: stage,
    attacks: attack,
  } = card;

  return (
    <Wrapper>
      <PageHero title={name} card />
      <div className="card-container">
        <img src={image} alt={name} />
        <div>
          <h2>{name}</h2>{" "}
          <p>
            <span>Rarity:</span>
            {rarity}
          </p>
          <p>{hp}</p>
          <p>{setName}</p>
          <h3>Product Details</h3>
          <p>
            <span>Card Type / HP / Stage:</span>
            {type} / {hp} / {stage[0]}
          </p>
          <p>
            <span>Attack 1: </span>
            {attack[0].name} - {attack[0].text}
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
          <hr />
          <AddtoCart />
        </div>
      </div>
      <div>
        <Link to="/cards">Back to cards</Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .card-container {
    display: flex;
  }
`;

export default SingleCardPage;
