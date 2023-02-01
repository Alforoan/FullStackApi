import React from "react";
import styled from "styled-components";
import IncreaseDecreaseButton from "./IncreaseDecreaseButton";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

function CartItem({ id, image, price, name, cardmarket, amount }) {
  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };
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
      <button
        className="trash-button"
        type="button"
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5rem;
  .container {
    display: flex;
  }
  .image {
    width: 150px;
  }
  .trash-button {
    color: white;
    background: transparent;
    border: transparent;
    letter-spacing: 3px;
    background: darkred;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    cursor: pointer;
  }
`;

export default CartItem;
