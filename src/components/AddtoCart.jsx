import React from "react";
import styled from "styled-components";

function AddtoCart() {
  const [amount, setAmount] = useState(1);

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
