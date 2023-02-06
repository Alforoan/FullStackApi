import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useUserContext } from "../context/user_context";

function CartTotal() {
  const { tax, total_amount } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            Subtotal: <span>${Math.round(total_amount * 100) / 100}</span>
          </h5>
          <p>
            Tax: <span>${tax}</span>
          </p>
          <hr />
          <h4 className="order-total">
            Order total:{" "}
            <span>${Math.round((total_amount + tax) * 100) / 100}</span>
          </h4>
        </article>
        {myUser ? (
          <Link to="/checkout" className="btn">
            Proceed to checkout
          </Link>
        ) : (
          <button type="button" className="btn" onClick={loginWithRedirect}>
            Login
          </button>
        )}
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
    margin-bottom: 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
    font-size: 1.2rem;
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
    cursor: pointer;
    text-align: center;
    font-weight: 700;
    text-decoration: none;
    padding: 1rem 0.5rem;
    background: #ffd300;
    border-radius: 0.25rem;
    :visited {
      color: black;
    }
    :hover {
      background: #fffd74;
      transition: all 0.3s linear;
    }
  }
  .order-total {
    font-size: 1.8rem;
  }
`;

export default CartTotal;
