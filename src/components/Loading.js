import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <div className="loading">Loading...</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .loading {
    max-width: 500px;
    text-align: center;
    font-size: 4rem;
    overflow: hidden;
    border-right: 0.15em solid orange;
    white-space: nowrap;

    margin: auto;
    margin-top: 2rem;
    letter-spacing: 0.15em;
    animation: typing 3s steps(30, end), blink-caret 0.5s step-end infinite;
  }
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
`;
export default Loading;
