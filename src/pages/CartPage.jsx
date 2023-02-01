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
      <Wrapper className="page-100">
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to="/cards" className="btn">
            Fill it
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <PageHero title="cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.main``;

export default CartPage;
