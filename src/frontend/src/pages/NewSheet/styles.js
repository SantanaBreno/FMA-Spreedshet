import styled from 'styled-components';

export const NewSheetWrapper = styled.div`
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

export const ContentContainer = styled.div`
    width: 90%;
    height: 80vh;
    margin-top: 40px;
    margin-left: 40px;
`;

export const UpSideContentContainer = styled.div`
    height: 24%;
    width: 100%;
    display: flex;
`;

export const LeftContainer = styled.div`
      width: 50%;
      height: 100%;
`;

export const NameSheet = styled.input`
    width: 76%;
    height: 52px;
    border-radius: 8px;
    border: 1px solid black;
    padding-left: 10px;
    margin-bottom: 12px;
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
    width: 72%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid black;
    padding-left: 10px;
    margin-top: 4px;
`;

export const AddItemButton = styled.button`
  background-color: black;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 40px;
  width: 152px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  margin-top: 10px;
  color: #D0D0D0;

  span {
    color: #D0D0D0;
  }
`;

export const RightContainer = styled.div`
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
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
    height: 76%;
    border: 2px solid black;
    width: 100%;
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  height: 100%;
`;

// Estilo para o popup
export const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 300px;
  text-align: center;
`;

// Estilo para o overlay
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

// Estilo para o botão de fechar
export const CloseButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #45a049;
  }
`;
