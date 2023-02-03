import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

function IncreaseDecreaseButton({ amount, increase, decrease }) {
  return (
    <Wrapper>
      <button className="decrease-btn" type="button" onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button className="increase-btn" type="button" onClick={increase}>
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

  .amount {
    font-size: 2rem;
  }

  .increase-btn {
    border: transparent;
    background: transparent;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .decrease-btn {
    border: transparent;
    background: transparent;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  margin-bottom: 1rem;
`;

export default IncreaseDecreaseButton;
