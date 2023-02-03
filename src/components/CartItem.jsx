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
      <div className="title">
        <img className="image" src={image} alt={name} />
        <div>
          <h5 className="name">{name}</h5>
        </div>
      </div>
      <h5 className="price">${price}</h5>
      <IncreaseDecreaseButton
        amount={amount}
        increase={increase}
        decrease={decrease}
      />
      <h5 className="subtotal">${price * amount}</h5>

      <button
        className="remove-btn"
        type="button"
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .title {
    grid-template-rows: 75px;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 0.2rem;
  }
  h5 {
    font-size: 1.8rem;
    margin-bottom: 0;
  }

  .amount-btns {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
  .remove-btn {
    background: transparent;
    border: transparent;
    color: red;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    font-size: 1.25rem;
    cursor: pointer;
  }
  @media (min-width: 776px) {
    margin-top: 5rem;
    margin-bottom: 5rem;

    .subtotal {
      display: block;
      margin-bottom: 0;

      font-weight: 400;
      font-size: 2rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1.5rem;

      font-weight: 400;
    }
    .name {
      font-size: 2.5rem;
    }
    .color {
      font-size: 0.85rem;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: auto;
    }
    .title {
      height: auto;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;

export default CartItem;
// display: flex;
//   justify-content: space-between;
//   align-items: center;
//   border: 1px solid black;
//   max-width: 1100px;
//   width: 70vw;
//   margin: auto;
//   .container {
//     display: flex;
//   }
//   .image {
//     width: 150px;
//   }
//   .trash-button {
//     color: white;
//     background: transparent;
//     border: transparent;
//     letter-spacing: 3px;
//     background: darkred;
//     width: 1.5rem;
//     height: 1.5rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: 0.25rem;
//     font-size: 0.75rem;
//     cursor: pointer;
//   }
//   .container {
//     align-items: center;
//     border: 1px solid black;
//     max-width: 400px;
//     display: flex;
//     justify-content: center;
//   }
//   .name-price-container {
//     display: flex;
//   }
//   .name {
//   }
//   .price {
//   }
//   .center-container {
//     border: 1px solid black;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 50vw;
//   }
