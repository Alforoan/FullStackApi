import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <div className="container">
        <h5 className="date">&copy; {new Date().getFullYear()}</h5>
        <span className="pokemon">Pokemon</span>
        <h5 className="rights">All rights reserved</h5>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background: #54626f;
  display: flex;
  color: white;
  align-items: center;
  margin: auto;
  justify-center: center;
  margin-top: 2rem;
  padding: 2rem 0 2rem 0;
  font-size: 2rem;
  letter-spacing: 1px;
  .container {
    margin: auto;
    display: flex;
    align-items: center;
  }
  .date {
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }
  .pokemon {
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }
  .rights {
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 519px) {
    font-size: 1.2rem;
  }
`;

export default Footer;
