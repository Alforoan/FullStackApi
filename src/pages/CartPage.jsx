import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PageHero from "../components/PageHero";
import CartContent from "../components/CartContent";

function CartPage() {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className="container">
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to="/cards" className="btn" type="button">
            Fill it
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main className="main-container">
      <PageHero title="cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.main`
  height: 69vh;
  .empty {
    text-align: center;
    margin: auto;
    padding-top: 10rem;
  }
  h2 {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  .btn {
    text-decoration: none;
    font-size: 2rem;
    background: #fffd74;
    padding: 0.3rem 1rem;
    border-radius: 0.3rem;
    border: 1px solid black;
    :visited {
      color: black;
    }
  }

  @media screen and (max-width: 801px) {
    h2 {
      font-size: 3rem;
    }
    .btn {
      font-size: 1.5rem;
    }
  }
`;

export default CartPage;
