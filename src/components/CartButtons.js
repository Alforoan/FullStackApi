import React from "react";
import styled from "styled-components";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function CartButtons() {
  return (
    <Wrapper>
      <Link to="/cart" className="cart-btn">
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">10</span>
        </span>
      </Link>
      <button type="button">
        Login <FaUserPlus />{" "}
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    display: flex;
    align-items: center;
  }
  a {
    text-decoration: none;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    border: 1px solid orange;
    border-radius: 50%;
    padding: 0.2rem;
    background: orange;
    color: white;
    font-size: 1rem;
  }
`;

export default CartButtons;
