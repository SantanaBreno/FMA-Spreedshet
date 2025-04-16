import styled from 'styled-components';

export const HomeWrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  background-color: white;
  color: white;
  padding: 0;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  width: 90%;
  padding: 40px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const OptionsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  row-gap: 68px;
  column-gap: 120px;
  width: 90%;
  max-width: 1180px;
  margin: 0 auto;
  justify-content: start;
  box-sizing: border-box;
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

export const TopControls = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 40px;

`;

export const ControlsRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

