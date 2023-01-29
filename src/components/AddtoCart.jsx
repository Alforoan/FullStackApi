import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import IncreaseDecreaseButton from "./IncreaseDecreaseButton";

function AddtoCart() {
  const [amount, setAmount] = React.useState(1);

  function Increase() {
    if (amount >= 0) {
      setAmount((prev) => prev + 1);
    }
  }
  function Decrease() {
    if (amount >= 1) {
      setAmount((prev) => prev - 1);
    }
  }
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
