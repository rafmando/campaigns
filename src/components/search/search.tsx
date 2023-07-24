import { StyledSearchContainer, StyledSearchInput } from "./search.styles"

export const Search = ({ searchTerm, setSearchTerm }: any) => {
  return (
    <StyledSearchContainer>
      <h1>Campaings</h1>
      <StyledSearchInput placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
    </StyledSearchContainer>
  );
};