import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import styled from "styled-components";

function CartTotal() {
  const { tax, total_amount } = useCartContext();
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            Subtotal: <span>{total_amount}</span>
          </h5>
          <p>
            Tax: <span>{tax}</span>
          </p>
          <hr />
          <h4>
            Order total: <span>{total_amount + tax}</span>
          </h4>
        </article>
        <Link to="/checkout" className="btn">
          Proceed to checkout
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

export default CartTotal;
