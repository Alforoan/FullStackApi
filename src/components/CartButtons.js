import React from "react";
import styled from "styled-components";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useCardsContext } from "../context/cards_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

function CartButtons() {
  const { closeSidebar } = useCardsContext();
  const { total_items } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();
  return (
    <Wrapper>
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      {myUser ? (
        <button
          className="logout-btn"
          type="button"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout <FaUserMinus className="logout-icon" />
        </button>
      ) : (
        <button type="button" className="login-btn" onClick={loginWithRedirect}>
          Login <FaUserPlus className="login-icon" />
        </button>
      )}
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
    :visited {
      color: black;
    }
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
  .login-btn,
  .logout-btn {
    background: transparent;
    border: transparent;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-family: inherit;
    padding-left: 0.5rem;
  }
  .login-icon,
  .logout-icon {
    padding-left: 0.3rem;
  }
`;

export default CartButtons;
