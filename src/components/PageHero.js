import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({ title, card }) => {
  return (
    <Wrapper>
      <div className="container">
        <h3 className="link-text">
          <Link className="home" to="/">
            Home
          </Link>{" "}
          /{card && <Link to="/cards">Cards</Link>}/{title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;

  margin: auto;
  font-size: 3rem;
  background: lightgray;
  .container {
    max-width: 1150px;
    min-height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .link-text a {
    text-decoration: none;
  }
  .home {
    color: #fafa37;
  }
  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
  @media screen and (max-width: 1100px) {
    font-size: 2.5rem;
  }
`;

export default PageHero;
