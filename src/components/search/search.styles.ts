import styled from 'styled-components'

export const StyledSearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 0 30px;
  height: 90px;
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    color: #fff;
  }
`;

export const StyledSearchInput = styled.input`
  width: 200px;
  height: 25px;
`;
