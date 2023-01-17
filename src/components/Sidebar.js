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
        className={`${
          isSidebarOpen ? "sidebar show-sidebar" : "sidebar no-sidebar"
        }`}
      >
        <div className="sidebar-header">
          <img src={logo} alt="pokemon" className="logo" />
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul>
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
        <CartButtons />
      </aside>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;

  .sidebar-header {
    justify-content: space-between;
    align-items: center;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    transition: all 0.3s linear;
    transform: all 0.3s linear;
    z-index: -1;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .no-sidebar {
    display: none;
  }
  @media screen and (min-width: 1000px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
