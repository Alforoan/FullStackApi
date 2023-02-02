import React from "react";
import CartButtons from "./CartButtons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { links } from "../utilities/links";
import logo from "../images/pokemon.png";
import { useCardsContext } from "../context/cards_context";
import { FaTimes } from "react-icons/fa";

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useCardsContext();

  return (
    <Wrapper>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <img src={logo} alt="pokemon" className="logo" />
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          <li>
            <Link to="/checkout" onClick={closeSidebar}>
              checkout
            </Link>
          </li>
        </ul>
        <div className="cart-btn-wrapper">
          <CartButtons />
        </div>
      </aside>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  max-width: 90vw;

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1.4rem;
    margin: auto;
    margin-top: -0.8rem;
    max-width: 90vw;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;

    transition: all 0.3s linear;
    cursor: pointer;

    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: yellow;
  }
  .logo {
    justify-self: center;
    width: 170px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1.3rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    text-decoration: none;
    transition: all 0.3s linear;
  }
  .links a:visited {
    color: black;
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: #fffe71;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 2rem;
    width: 100%;
    height: 100%;
    background: white;
    transition: all 0.3s linear;
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    display: flex;
    margin: auto;
    justify-content: center;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
// .sidebar {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: #fff;
//     transition: all 0.3s linear;
//     transform: translate(-100%);
//     z-index: -1;
//   }

//   .close-btn {
//     font-size: 2rem;
//     background: transparent;
//     border-color: transparent;

//     transition: all 0.3s linear;
//     cursor: pointer;

//     margin-top: 0.2rem;
//   }
//   .show-sidebar {
//     transform: translate(0);
//     z-index: 999;
//   }
//   .no-sidebar {
//     display: none;
//   }
//   @media screen and (min-width: 1000px) {
//     .sidebar {
//       display: none;
//     }
//   }
