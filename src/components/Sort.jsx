import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";

function Sort() {
  const { filtered_cards: cards, grid_view } = useFilterContext();
  return (
    <Wrapper>
      <div className="btn-container">
        <button type="button" className={`${grid_view && "active"}`}>
          <BsFillGridFill />
        </button>
        <button type="button" className={`${!grid_view && "active"}`}>
          <BsList />
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .btn-container {
    display: flex;
    button {
      background: transparent;
      border: 1px solid black;
      color: black;
      width: 1.5rem;
      border-radius: 0.25rem;
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: black;
      color: white;
    }
  }
`;

export default Sort;
