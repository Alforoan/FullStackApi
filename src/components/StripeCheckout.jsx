import React from "react";
import styled from "styled-components";

function CheckoutForm() {
  return <h2>Checkout form</h2>;
}

function StripeCheckout() {
  return (
    <Wrapper>
      <CheckoutForm />
    </Wrapper>
  );
}

const Wrapper = styled.section``;

export default StripeCheckout;
