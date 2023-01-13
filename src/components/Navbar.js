import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavContainer>
      <div className="testing">testing</div>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  .testing {
    background: red;
    font-size: 3rem;
  }
`;

export default Navbar;
