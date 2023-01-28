import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({ title, card }) => {
  return (
    <Wrapper>
      <div>
        <h3 className="link-text">
          <Link to="/">Home</Link> /{card && <Link to="/cards"> Cards</Link>}/
          {title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  .link-text a {
    text-decoration: none;
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
`;

export default PageHero;
