import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useCardsContext } from "../context/cards_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PageHero from "../components/PageHero";

const single_card_url = `https://api.pokemontcg.io/v2/cards/`;

function SingleCardPage({ name, images }) {
  const { id } = useParams();
  const { single_card: card, FetchSingleCard } = useCardsContext();
  React.useEffect(() => {
    FetchSingleCard(`${single_card_url}${id}`);
  }, [id]);

  return (
    <Wrapper>
      <PageHero title={name} card={card} />
      <div>
        <img src={images} alt={name} />
      </div>
      <div>
        <Link to="/cards">Back to cards</Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default SingleCardPage;
