import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <div className="container">
        <h5>&copy; {new Date().getFullYear()}</h5>
        <span>Pokemon</span>
        <h5>All rights reserved</h5>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background: black;
  display: flex;
  color: white;
  align-items: center;
  margin: auto;
  justify-center: center;

  .container {
    margin: auto;
    display: flex;
    align-items: center;
  }
`;

export default Footer;
