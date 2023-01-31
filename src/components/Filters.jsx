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
              placeholder="search"
              value={text}
              onChange={updateFilters}
            />
          </div>
          <div>
            <h5>Pokemon Types</h5>
            <div>
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
            <h5>Rarity</h5>
            <select name="rarity" value={rarity} onChange={updateFilters}>
              {rarities.map((c, index) => {
                return (
                  <option value={c} key={index}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: 5px;
    color: black;
    cursor: pointer;
  }

  .active {
    border-color: lightgray;
  }
`;
export default Filters;
