import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import styled from "styled-components";

function CartTotal() {
  const { tax, total_amount } = useCartContext();
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            Subtotal: <span>{total_amount}</span>
          </h5>
          <p>
            Tax: <span>{tax}</span>
          </p>
          <hr />
          <h4>
            Order total: <span>{total_amount + tax}</span>
          </h4>
        </article>
        <Link to="/checkout" className="btn">
          Proceed to checkout
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid lightgray;
    border-radius: 0.25rem;
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
    text-decoration: none;
  }
`;

export default CartTotal;
