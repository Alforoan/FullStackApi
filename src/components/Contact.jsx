import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <Wrapper>
      <main className="container">
        <h1 className="title">Join us and get 10% off!</h1>
        <div className="form-container">
          <p className="paragraph">
            Make sure not to miss out on this one time chance of getting 10% off
            on your first purchase. Valid e-mail addresses only.
          </p>

          <form className="input-container">
            <input placeholder="Enter Email" type="email" />
            <button className="btn" type="button">
              Subscribe
            </button>
          </form>
        </div>
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1100px;
  font-size: 1.2rem;

  margin: auto;
  margin-bottom: 5rem;
  margin-top: 4rem;
  .title {
    letter-spacing: 3px;

    margin-bottom: 1.5rem;
  }
  .form-container {
    display: flex;
    justify-content: space-between;
  }
  .input-container {
    display: flex;
    height: 2rem;

    border-radius: 3px;
  }
  .paragraph {
    max-width: 600px;
    text-align: justify;
  }
  input {
    width: 350px;
    text-indent: 7px;
    border: 1px solid black;
    border-radius: 2px;
  }
  .btn {
    width: 100px;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 2px;
    background: #ffe5b4;
    :hover {
      background: #ffd300;
      color: gray;
      transition: all 0.3s linear;
    }
    font-family: inherit;
    font-size: 1.2rem;
  }
  @media screen and (max-width: 1097px) {
    display: flex;
    justify-content: center;
    .form-container {
      display: flex;
      flex-direction: column;
    }
    .input-container {
      margin-top: 2rem;
      max-width: 60vw;
    }

    .container {
      display: block;
      margin-left: 3rem;
    }
  }
  @media screen and (max-width: 700px) {
    .title {
      font-size: 1.8rem;
    }
    .paragraph {
      font-size: 1rem;
      max-width: 70vw;
    }
    .btn {
      font-size: 1rem;
      padding: 0.3rem 0.2rem;
    }
  }
`;

export default Contact;
