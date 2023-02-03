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
          className={`${!grid_view && "active2"}`}
        >
          <BsList />
        </button>
      </div>
      <div>
        <p className="cards-found">{cards.length} Cards Found</p>
      </div>
      <div className="hr-container">
        <hr />
      </div>
      <form>
        <label className="sortby-label" htmlFor="sort">
          Sort by
        </label>
        <select
          className="select-button"
          value={sort}
          onChange={updateSort}
          name="sort"
          id="sort"
        >
          <option value="price-lowest">Price (Lowest)</option>
          <option value="price-highest">Price (Highest)</option>
          <option value="name-a">Name (A-Z)</option>
          <option value="name-z">Name (Z-A)</option>
        </select>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  margin-bottom: 1rem;
  justify-content: space-between;

  .btn-container {
    display: flex;
    border: 1px solid black;
    justify-content: space-between;

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
      margin-right: 0.5rem;
    }
    .active2 {
      margin-left: 0.5rem;
      background: black;
      color: white;
    }
  }
  .cards-found {
    margin-right: 3rem;
    margin-left: 1.5rem;
  }

  .sortby-label {
    margin-right: 1rem;
  }
  form {
    margin-left: 3rem;
  }
  .hr-container {
    display: flex;
    flex: 0.5;
  }
  .select-button {
    border: 1px solid black;
    font-family: inherit;
    font-size: 0.9rem;
    border-radius: 0.25rem;
    vertical-align: middle;
  }
  hr {
    flex-grow: 1;

    color: black;
  }
  @media screen and (max-width: 990px) {
    margin-bottom: 3rem;
  }
  @media screen and (max-width: 680px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;

    .btn-container {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }
    .cards-found {
      margin: 0;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    form {
      margin-left: 0;
      padding-left: 0;
    }
  }
`;

export default Sort;
