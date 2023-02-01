import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

function IncreaseDecreaseButton({ amount, increase, decrease }) {
  return (
    <Wrapper>
      <button type="button" onClick={decrease}>
        <FaMinus />
      </button>
      <h2>{amount}</h2>
      <button type="button" onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`;

export default IncreaseDecreaseButton;
