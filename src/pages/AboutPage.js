import React from "react";
import styled from "styled-components";
import PageHero from "../components/PageHero";
import aboutImg from "../images/about.png";

function AboutPage() {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper>
        <img className="gengar" src={aboutImg} alt="nice pokemon" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            We have been selling Pokemon cards since before Jesus was born. When
            Jesus was born in approximately 0 A.D., the cards became very
            popular because he started to create legendary Pokemon cards out of
            thin air. He was nice enough to give us some of those legendary
            cards and we have been implementing ways of improving them. To check
            out the results of years of our effort, make sure to visit the card
            section and enjoy the beauty.
          </p>
        </article>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  max-width: 80vw;
  margin: auto;
  margin-top: 3rem;
  img {
    width: 100%;
    display: block;

    max-width: 500px;
  }
  p {
    line-height: 1.5;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    font-size: 1.2rem;
    text-align: justify;
  }
  .title {
    text-align: left;
    font-size: 2rem;
    margin-top: 2rem;
  }
  .underline {
    margin-left: 0;
  }
  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;

    .gengar {
      margin: auto;
      margin-bottom: -3rem;
    }
    .title {
      font-size: 1.5rem;
    }
  }
`;

export default AboutPage;
