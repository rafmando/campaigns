import { useState } from "react";
import { Filter } from "../filter/filter";
import { StyledResultsCross, StyledResultsRow, StyledResultsRowContainer, StyledResultsRowItem, StyledResultsTick } from "./results.styles"
import { getStatus } from "./results.utils";



export const Results = ({results,setResults,searchTerm}: any) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // const verifiedUser = {
  //   id: 201,
  //   name: "Verified User",
  //   startDate: "2017-01-01",
  //   endDate: "2028-01-01",
  //   Budget: 666666,
  // };

  // const addNewCampaign = (campaign: any) => {
  //   const idAvailable= addCampaign(campaign, results);
  //   if(!idAvailable){
  //     const tempResults = [...results]
  //     tempResults.push(campaign)
  //     setResults(tempResults)
  //   }
  // }

  const filterByDates = () => {
    const start = Date.parse(startDate);
    const end = Date.parse(endDate);

    const tempArray = results.filter((result: any) => {
      const resStart = Date.parse(result.startDate)
      const resEnd = Date.parse(result.endDate);
   
      if (start.valueOf() <= resStart && end.valueOf() >= resEnd) {
        return result;
      } else {
        return null;
      }
    }).map((result: any) => {
      return result
    })
    setResults(tempArray)
  }

  return (
    <StyledResultsRowContainer>
      {/* <button onClick={() => addNewCampaign(verifiedUser)}>Add Verified user</button> */}
      <Filter
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        setResults={setResults}
        filterByDates={filterByDates}
      />
      <StyledResultsRow>
        <StyledResultsRowItem>
          <h3>Name</h3>
        </StyledResultsRowItem>
        <StyledResultsRowItem>
          <h3>Status</h3>
        </StyledResultsRowItem>
        <StyledResultsRowItem>
          <h3>Start date</h3>
        </StyledResultsRowItem>
        <StyledResultsRowItem>
          <h3>End date</h3>
        </StyledResultsRowItem>
        <StyledResultsRowItem>
          <h3>Budget</h3>
        </StyledResultsRowItem>
      </StyledResultsRow>
      {results
        .filter((result: any) => {
          return searchTerm === ""
            ? result
            : result.name.toLowerCase().includes(searchTerm);
        })
        .map((result: any) => {
          return (
            <StyledResultsRow key={result.id}>
              <StyledResultsRowItem>
                <p>{result.name}</p>
              </StyledResultsRowItem>
              <StyledResultsRowItem>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {getStatus(result) === "Active" ? (
                    <StyledResultsTick />
                  ) : (
                    <StyledResultsCross />
                  )}
                </div>
                <p>{getStatus(result)}</p>
              </StyledResultsRowItem>
              <StyledResultsRowItem>
                <p>{result.startDate}</p>
              </StyledResultsRowItem>
              <StyledResultsRowItem>
                <p>{result.endDate}</p>
              </StyledResultsRowItem>
              <StyledResultsRowItem>
                <p>£{result.Budget}</p>
              </StyledResultsRowItem>
            </StyledResultsRow>
          );
        })} 
    </StyledResultsRowContainer>
  );
}