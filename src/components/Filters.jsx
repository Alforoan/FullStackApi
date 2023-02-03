import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueRarities, getUniqueValues } from "../utils/etc";

function Filters() {
  const {
    filters: { text, category, min_price, max_price, price, types, rarity },
    updateFilters,
    clearFilters,
    all_cards,
  } = useFilterContext();

  const pokeTypes = getUniqueValues(all_cards, "types");
  const rarities = getUniqueRarities(all_cards, "rarity");

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="Search"
              value={text}
              onChange={updateFilters}
            />
          </div>
          <div>
            <h5 className="pokemon-types">Pokemon Types</h5>
            <div className="pokemon-categories">
              {pokeTypes.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type="button"
                    name="types"
                    className={`${types === c ? "active" : null}`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <h5 className="rarity">Rarity</h5>
            <select
              className="select"
              name="rarity"
              value={rarity}
              onChange={updateFilters}
            >
              {rarities.map((c, index) => {
                return (
                  <option className="options" value={c} key={index}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <h5 className="price">Price</h5>
            <p className="price-number">${price}</p>
            <input
              className="input-bar"
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
        </form>
        <button
          type="button"
          className="clear-filters-btn"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  button {
    display: block;

    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    letter-spacing: 2px;
    color: black;
    cursor: pointer;
  }

  .active {
    border-color: #ffbf00;
  }
  .content {
    position: sticky;
  }
  .pokemon-types {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
  .rarity {
    font-size: 1.3rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  .clear-filters-btn {
    background: green;
    border-radius: 5px;
  }
  .pokemon-categories button {
    font-family: inherit;
    font-size: 1rem;
  }
  .options {
    text-transform: capitalize;
  }
  .input-bar {
    width: 170px;
  }
  input {
    text-indent: 5px;
    background: #add8e6;
    padding: 0.5rem 0 0.5rem 0;
    border: transparent;
    font-family: inherit;
    font-size: 1.3rem;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
  .form-control {
    margin-bottom: 1.5rem;
  }
  .select {
    font-family: inherit;
    font-size: 1rem;
    background: #add8e6;
    border: transparent;
    border-radius: 3px;
    padding: 0.25rem 0.2rem;
    margin-bottom: 1rem;
  }
  .price {
    font-size: 1.3rem;
    margin-bottom: 0.3rem;
  }
  .price-number {
    font-size: 1.2rem;
  }
  .clear-filters-btn {
    background: #f4ca16;
    font-family: inherit;
    padding: 0.6rem 0.7rem;
    letter-spacing: 0;
    font-size: 1rem;
    :hover {
      background: #ffb200;
      transition: all 0.3s linear;
      color: white;
    }
  }
`;
export default Filters;
