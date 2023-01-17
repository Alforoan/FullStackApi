import React from "react";
import styled from "styled-components";

function Hero() {
  return (
    <Wrapper>
      <article>
        <h1>
          Get your <br />
          first pokemon cards
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima dolor
          libero repellat porro aliquam delectus officiis labore excepturi
          facere! Repellendus in nostrum repellat asperiores sit adipisci
          dolorum harum optio recusandae.
        </p>
      </article>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

export default Hero;
