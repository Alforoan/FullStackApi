import React from "react";
import PageHero from "../components/PageHero";
import StripeCheckout from "../components/StripeCheckout";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

function CheckoutPage() {
  const { cart } = useCartContext();

  return (
    <main>
      <PageHero title="Checkout" />
      <Wrapper>
        {cart.length < 1 ? (
          <div className="empty-container">
            <h3 className="empty-text">Your cart is empty</h3>

            <Link to="/cards" className="btn">
              Fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .empty-container {
    text-align: center;
  }
  .empty-text {
    font-size: 3.5rem;
    margin-top: 3rem;
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
  @media screen and (max-width: 700px) {
    .empty-text {
      font-size: 2.5rem;
    }
    .btn {
      font-size: 1.5rem;
      padding: 0.2rem 0.8rem;
    }
  }
`;

export default CheckoutPage;
