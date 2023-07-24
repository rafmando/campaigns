import styled from 'styled-components'
import { TiTickOutline } from "react-icons/ti";
import { MdOutlineClose } from "react-icons/md";

export const StyledResultsRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 15px 0 15px;
  
  button {
    width: 100px;
  }
`;

export const StyledResultsRow = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  width: 100%;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
`;

export const StyledResultsTick = styled(TiTickOutline)`
  width: 35px;
  color: #32cd32;
  height: 35px;
  margin-right: 50px;
  
`;

export const StyledResultsCross = styled(MdOutlineClose)`
  width: 30px;
  color: red;
  height: 30px;
  margin-right: 30px;

`;

export const StyledResultsRowItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 200px;
  h3 {
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    font-weight: 900; 
  }
`;
