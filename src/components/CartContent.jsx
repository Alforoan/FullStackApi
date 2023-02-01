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
      <hr />
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
`;

export default CartContent;
