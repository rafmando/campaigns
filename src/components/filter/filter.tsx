import { useState } from "react";
import {StyledFilterRow, StyledFilterContainer, StyledDatesInput, StyledFilterButton } from "./filter.styles";
import { GoFilter } from "react-icons/go";
import { resultsData } from "../results/data/resultsData";

export const Filter = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  filterByDates,
  setResults,
}: any) => {
  const [showFilter, setShowFilter] = useState(false);

  const clearFilter = () => {
    setResults(resultsData);
  };

  return (
    <>
      <StyledFilterRow>
        <GoFilter
          data-testid='toggleFilter'
          style={{ width: "25px", height: "25px", marginRight: "20px" }}
          onClick={() => setShowFilter(!showFilter)}
        />
        <p>Filter by dates</p>
      </StyledFilterRow>
      {showFilter ? (
        <StyledFilterContainer>
          <div>
            <p>Start</p>
            <StyledDatesInput
              placeholder="MM/DD/YYYY"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <p>End</p>
            <StyledDatesInput
              placeholder="MM/DD/YYYY"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
            <StyledFilterButton onClick={filterByDates}>
              Get results
            </StyledFilterButton>
          <StyledFilterButton onClick={clearFilter}>Reset filter</StyledFilterButton>
        </StyledFilterContainer>
      ) : null}
    </>
  );
};