import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <Wrapper>
      <section className="container">
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found.</h3>
        <Link className="btn" to="/">
          Back Home
        </Link>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  background: lightgray;

  margin-bottom: -2rem;
  height: 75vh;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 12rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
    font-size: 3rem;
  }
  .container {
    max-width: 80vw;
  }
  .btn {
    background: yellow;
    text-decoration: none;
    padding: 0.5rem 0.4rem;
    border-radius: 0.25rem;
    border: 1px solid black;
    a:visited {
      color: black;
    }
  }
  @media screen and (max-width: 1100px) {
    h1 {
      font-size: 9rem;
    }
    h3 {
      font-size: 2rem;
    }
  }
`;

export default ErrorPage;
