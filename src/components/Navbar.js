import React from "react";
import styled from "styled-components";
import { links } from "../utilities/links";
import { Link } from "react-router-dom";
import logo from "../images/pokemon.png";
import CartButtons from "./CartButtons";
import { BiMenu } from "react-icons/bi";
import { useCardsContext } from "../context/cards_context";

const Navbar = () => {
  const { openSidebar } = useCardsContext();
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="pokemon logo" />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <BiMenu />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <div className="cart-btn-wrapper">
          <CartButtons />
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;

  .nav-toggle {
    background: transparent;
    border: transparent;
    cursor: pointer;
    font-size: 2rem;
  }
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80vw;
    margin: auto;
    max-width: 1150px;
  }
  .nav-links {
    display: none;
    list-style: none;
    li {
      padding-left: 2rem;
    }
  }
  .cart-btn-wrapper {
    display: none;
  }
  .nav-links a {
    text-decoration: none;
  }
  @media (min-width: 1000px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: flex;
    }
    .nav-links {
      display: flex;
      justify-content: center;
    }
    .cart-btn-wrapper {
      display: flex;
      justify-center: center;
    }
  }
`;

export default Navbar;
