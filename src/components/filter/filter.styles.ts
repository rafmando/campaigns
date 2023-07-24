import styled from 'styled-components'

export const StyledFilterRow = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
`
export const StyledFilterContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 30px;
`

export const StyledDatesInput = styled.input`
  width: 100px;
  height: 25px;
`;

export const StyledFilterButton = styled.button`
  width: 100px;
  height: 25px;
  margin-top: 20px;
  cursor: pointer;
  color: #fff;
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  border: 1px solid white;
  font-weight: bold;
`;