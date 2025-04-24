import styled from 'styled-components';

export const DecorationWorksheetsWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: white;
  padding: 0; // ou ajuste para não estourar a altura

  .nav-bar {
      justify-content: start;
    }   
`;

export const ContentContainer = styled.div`
    width: 90%;
    height: 80vh;
    margin-top: 40px;
    margin-left: 40px;

`;

export const UpSideContentContainer = styled.div`
    height: 20%;
    width: 100%;
    display: flex;

`;

export const LeftContainer = styled.div`
      width: 50%;
      height: 100%;

      h2 {
      color: black;
    }
`;

export const RightContainer = styled.div`
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

`;

export const EditButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 0;

    span {
      color: #D0D0D0;
      background-color: green;
      display: flex;
      align-items: center;
      padding: 8px;
      border-radius: 8px;
    }
`;

export const ExportButton = styled.button`
  background-color: black;
  display: flex;
  align-items: center;
  padding: 8px;
  border: none;
  border-radius: 8px;
  margin-top: 10px;

  span {
    color: #D0D0D0;
  }
`;

export const SpreadsheetContainer = styled.div`
    height: 80%;
    border: 2px solid black;
    width: 100%;
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  height: 100%;
`;