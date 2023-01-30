import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";

function Sort() {
  const {
    filtered_cards: cards,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();
  return (
    <Wrapper>
      <div className="btn-container">
        <button
          onClick={setGridView}
          type="button"
          className={`${grid_view && "active"}`}
        >
          <BsFillGridFill />
        </button>
        <button
          onClick={setListView}
          type="button"
          className={`${!grid_view && "active"}`}
        >
          <BsList />
        </button>
      </div>
      <p>{cards.length} cards found</p>
      <hr />
      <form>
        <label htmlFor="sort">Sort by</label>
        <select value={sort} onChange={updateSort} name="sort" id="sort">
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
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
