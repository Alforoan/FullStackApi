import React from "react";
import styled from "styled-components";
import image from "../images/charizard.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <Wrapper>
      <article>
        <h1 className="title">
          Get your <br />
          first pokemon cards
        </h1>
        <p className="paragraph">
          Get the best cards available on the market. They are as cheap as a few
          pennies and can be as expensive as a few hundred dollars!
        </p>
        <div className="btn-container">
          <Link className="btn" to="/cards">
            Shop Now
          </Link>
        </div>
      </article>
      <img className="charizard" src={image} alt="charizard" />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  max-width: 1150px;
  margin: auto;
  margin-top: 5rem;

  align-items: center;
  justify-content: space-between;
  .charizard {
    max-width: 350px;
  }
  .paragraph {
    text-align: justify;
    margin-top: 2rem;
    max-width: 500px;
    font-size: 1.5rem;
    letter-spacing: 2px;
    line-height: 2rem;
  }

  .title {
    font-size: 4rem;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 1.2rem;
    border: transparent;
    border-radius: 5px;
    border: 2px solid black;
    background: yellow;
    cursor: pointer;
    color: black;
    text-decoration: none;
  }
  .btn-container {
    margin-top: 3rem;
  }
  .btn:hover {
    background: #ffbf00;
    transition: all 0.3s linear;
    color: red;
  }
  @media screen and (max-width: 992px) {
    margin: auto;
    margin-top: 5rem;
    margin-left: 5rem;
    .charizard {
      display: none;
    }
    .title {
      font-size: 3rem;
      max-width: 70vw;
    }
    .paragraph {
      font-size: 1.2rem;
      max-width: 70vw;
    }
    .btn {
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 600px) {
    .paragraph {
      max-width: 300px;
    }
  }
  @media screen and (max-width: 1300px) {
    max-width: 80vw;
    .charizard {
      width: 300px;
    }
  }
  @media screen and (max-width: 519px) {
    margin-left: 2.5rem;
  }
`;

export default Hero;
