import React from "react";
import styled from "styled-components";

function CartColumns() {
  return (
    <Wrapper>
      <div className="content">
        <h5>Item</h5>
        <h5>Price</h5>
        <h5>Quantity</h5>
        <h5>Subtotal</h5>
        <span></span>
      </div>
      <hr />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: none;
  @media (min-width: 776px) {
    display: block;
    .content {
      display: grid;
      grid-template-columns: 316px 1fr 1fr 1fr auto;
      justify-items: center;
      column-gap: 1rem;
      h5 {
        font-size: 1.5rem;
      }
    }

    span {
      width: 2rem;
      height: 2rem;
    }
    hr {
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
  }
`;

export default CartColumns;
