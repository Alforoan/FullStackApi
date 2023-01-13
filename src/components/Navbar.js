import React from "react";
import styled from "styled-components";
import { links } from "../utilities/links";
import { Link } from "react-router-dom";
import logo from "../images/pokemon.png";

const Navbar = () => {
  return (
    <NavContainer>
      <div className="nav-center">
        <div>
          <Link to="/">
            <img src={logo} alt="pokemon logo" />
          </Link>
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
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    display: flex;

    width: 80vw;
    margin: auto;
    max-width: 1150px;
    border: 1px solid black;
  }
  .links {
    display: flex;
    list-style: none;
  }
`;

export default Navbar;
