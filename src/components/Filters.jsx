import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";

function Filters() {
  const {
    filters: { text, category, min_price, max_price, price, types },
    updateFilters,
    clearFilters,
    all_cards,
  } = useFilterContext();
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
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section``;
export default Filters;
