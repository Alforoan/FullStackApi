import React from "react";
import styled from "styled-components";
import IncreaseDecreaseButton from "./IncreaseDecreaseButton";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

function CartItem({ id, image, price, name, cardmarket, amount }) {
  const increase = () => {};
  const decrease = () => {};
  const { removeItem, toggleAmount } = useCartContext();
  return (
    <Wrapper>
      <div className="container">
        <img className="image" src={image} alt={name} />
        <div className="name-price-container">
          <h5>{name}</h5>
        </div>
        <div>
          <h5>${price}</h5>
        </div>
      </div>
      <IncreaseDecreaseButton
        amount={amount}
        increase={increase}
        decrease={decrease}
      />
      <h5>${price * amount}</h5>
      <button type="button" onClick={() => removeItem(id)}>
        <FaTrash />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: flex;
  justify-content: center;
  column-gap: 5rem;
  .container {
    display: flex;
  }
  .image {
    width: 150px;
  }
`;

export default CartItem;
