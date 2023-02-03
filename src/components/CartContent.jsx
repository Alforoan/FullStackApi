import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import CartTotal from "./CartTotal";

function CartContent() {
  const { cart, clearCart } = useCartContext();
  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr
        className="hr
      "
      />
      <div className="link-container">
        <Link to="/cards" className="link-btn">
          Continue Shopping
        </Link>

        <button
          type="button"
          className="link-btn clear-btn"
          onClick={clearCart}
        >
          Clear Shopping Cart
        </button>
      </div>
      <CartTotal />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .link-container {
    display: flex;
    margin-top: 2rem;
    justify-content: space-between;
  }
  hr {
    margin: 2rem 0;
  }
  .link-btn {
    text-decoration: none;
    padding: 0.5rem 0.4rem;
    background: #fcd12a;
    border-radius: 5px;
    :visited {
      color: black;
    }
    :hover {
      background: #ffe6a8;
      transition: all 0.3s linear;
    }
  }
  .clear-btn {
    background: lightgray;
    color: black;
    font-family: inherit;
    border: transparent;
    cursor: pointer;
  }
`;

export default CartContent;
