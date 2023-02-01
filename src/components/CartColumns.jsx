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
  .content {
    display: flex;

    justify-content: center;
    column-gap: 5rem;
    h5 {
      color: var(lightgray);
      font-weight: 400;
    }
  }
`;

export default CartColumns;
