import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function AddtoCart() {
  const [amount, setAmount] = React.useState(1);

  function Increase() {}
  function Decrease() {}
  return (
    <Wrapper>
      <div>
        <Link to="/cart">Add to Cart</Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default AddtoCart;
