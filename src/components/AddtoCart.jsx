import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import IncreaseDecreaseButton from "./IncreaseDecreaseButton";
import { useCartContext } from "../context/cart_context";

function AddtoCart({ card }) {
  const [amount, setAmount] = React.useState(1);
  const { addToCart } = useCartContext();
  const { id } = card;
  function Increase() {
    if (amount >= 0) {
      setAmount((prev) => prev + 1);
    }
  }
  function Decrease() {
    if (amount >= 2) {
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
        <Link to="/cart" onClick={() => addToCart(id, amount, card)}>
          Add to Cart
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default AddtoCart;
