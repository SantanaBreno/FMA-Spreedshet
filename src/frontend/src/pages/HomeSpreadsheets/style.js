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
  border: 2px solid red;
  margin-top: 40px;
  margin-left: 40px;
  
`;



export const TopControls = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 40px;
  border: 2px solid blue;
`;

export const ControlsRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SpreadsheetContainer = styled.div`
  width: 100%;
  border: 2px solid green;
  overflow-y: auto;
  padding: 0;
  display: flex;

`;

export const OptionsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
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
  font-size: clamp(16px, 1.8vw, 20px);
  text-align: center;
  line-height: 1.3;
  font-weight: 300;
  color: #DDDDDD;
  font-family: 'Inter', sans-serif;
`;
