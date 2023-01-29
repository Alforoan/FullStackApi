import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import IncreaseDecreaseButton from "./IncreaseDecreaseButton";

function AddtoCart() {
  const [amount, setAmount] = React.useState(1);

  function Increase() {}
  function Decrease() {}
  return (
    <Wrapper>
      <div>
        <IncreaseDecreaseButton
          amount={amount}
          increase={Increase}
          decrease={Decrease}
        />
        <Link to="/cart">Add to Cart</Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default AddtoCart;
