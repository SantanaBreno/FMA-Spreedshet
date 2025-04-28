import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: white;
  padding: 0;

  .nav-bar {
      justify-content: start;
    }   
`;

export const ContentWrapper = styled.div`
  height: 80vh;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 40px;
  
`;



export const TopControls = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 64px;
`;

export const ControlsRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SpreadsheetContainer = styled.div`
  width: 103%;
  overflow-y: auto;
  padding: 0;
  display: flex;

`;

export const OptionsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;
  width: 100%;
`;

export const OptionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
`;

export const OptionLabel = styled.div`
  font-size: 16px;
  text-align: center;
  line-height: 1.3;
  font-weight: 300;
  color: #DDDDDD;
  font-family: 'Inter', sans-serif;
`;
