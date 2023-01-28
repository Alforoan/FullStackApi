import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <div className="loading">Loading</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .loading {
    text-align: center;
    font-size: 4rem;
  }
`;
export default Loading;
