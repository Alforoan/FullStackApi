import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <Wrapper>
      <div>
        <h1>Join us and get 10% off on your first purchase!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est delectus
          blanditiis, magni velit dolores non tempora facilis omnis quia nam.
        </p>
        <form>
          <input type="email" />
          <button type="button">Subscribe</button>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default Contact;
