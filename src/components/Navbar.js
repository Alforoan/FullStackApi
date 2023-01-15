import React from "react";
import styled from "styled-components";
import { links } from "../utilities/links";
import { Link } from "react-router-dom";
import logo from "../images/pokemon.png";
import CartButtons from "./CartButtons";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  return (
    <NavContainer>
      <div className="nav-center">
        <div>
          <Link to="/">
            <img src={logo} alt="pokemon logo" />
          </Link>
          <button type="button" className="nav-toggle">
            <BiMenu />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <Link to={url} />
                {text}
              </li>
            );
          })}
        </ul>
        <CartButtons />
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
  }
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80vw;
    margin: auto;
    max-width: 1150px;
  }
  .links {
    display: flex;
    list-style: none;
    li {
      padding-left: 2rem;
    }
  }
  @media screen and (max-width: 1000px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: none;
    }
  }
`;

export default Navbar;
