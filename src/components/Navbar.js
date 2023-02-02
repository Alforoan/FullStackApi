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

          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
        <div className="cart-btn-wrapper">
          <CartButtons />
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background: yellow;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1200px;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-links {
    list-style: none;

    li {
      padding: 0 1rem 0 1rem;
    }
    li: hover {
      text-decoration: underline;
      text-underline-offset: 0.5rem;
    }
    a {
      text-decoration: none;
    }
    a:visited {
      color: black;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;

    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 992px) {
    .nav-links {
      display: none;
    }
    .cart-btn-wrapper {
      display: none;
    }
    img {
      padding-left: 1rem;
    }
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    .nav-links li {
      padding: 0 0.5rem 0 0.5rem;
    }
  }
  @media screen and (min-width: 993px) {
    .nav-center {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      display: flex;
    }
    .nav-toggle {
      display: none;
    }
  }
`;

export default Navbar;
// display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 1.5rem;
//   background: #ffff00;
//   .nav-toggle {
//     background: transparent;
//     border: transparent;
//     cursor: pointer;
//     font-size: 2rem;
//   }
//   .nav-header {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//   }
//   .nav-center {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     width: 80vw;
//     margin: auto;
//     max-width: 1200px;
//     margin-top: 1.5rem;
//     margin-bottom: 1.5rem;
//   }
// .nav-links {
//   display: none;
//   list-style: none;

//   li {
//     padding: 0 1rem 0 1rem;
//   }
//   li: hover {
//     text-decoration: underline;
//     text-underline-offset: 0.5rem;
//   }
// }
//   .cart-btn-wrapper {
//     display: none;
//   }
//   .nav-links a {
//     text-decoration: none;
//   }
//   @media screen and (min-width: 1000px) {
//     .nav-toggle {
//       display: none;
//     }
//     .nav-center {
//       display: flex;
//     }

//     .nav-links {
//       display: flex;
//       justify-content: center;
//     }
//     .cart-btn-wrapper {
//       display: flex;
//       justify-center: center;
//     }
//   }
//   @media screen and (max-width: 1300px) {
//     .nav-links li {
//       padding-left: 0.5rem;
//       padding-right: 0.5rem;
//       font-size: 1.5rem;
//     }
//   }
