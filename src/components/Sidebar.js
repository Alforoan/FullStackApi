import React from "react";
import CartButtons from "./CartButtons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { links } from "../utilities/links";
import logo from "../images/pokemon.png";
import { useCardsContext } from "../context/cards_context";

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useCardsContext();

  return (
    <Wrapper>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "show-sidebar"}`}
      >
        <div>
          <img src={logo} alt="pokemon" />
          <button type="button" onClick={closeSidebar}>
            Click here
          </button>
        </div>
        <ul>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <CartButtons />
      </aside>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  @media screen and (min-width: 1000px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
