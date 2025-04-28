import styled from 'styled-components';
import { Icon } from '@iconify/react';

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
  width: 80%;
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
  width: 98.6%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const InputSearchWrapper = styled.div`
  position: relative;
  width: 72%;

  input {
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid black;
    padding: 0 40px 0 10px;
    font-size: 16px;
  }

  .search-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: black;
    opacity: 0.6;
    font-size: 20px;
    pointer-events: none;
  }
`;

export const Input = styled.input`
  width: 100%;
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
  justify-content: center;
  height: 40px;
  width: 172px;
  padding: 8px;
  border: none;
  border-radius: 12px;
  margin-top: 8px;
  margin-left: 12px;
  color: #D0D0D0;
  font-family: inter, sans-serif;
  font-size: 14px;
  cursor: pointer;

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

export const DropdownWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 8px;
`;

export const SelectProjectWrapper = styled.div`
  position: relative;
  width: 172px;
`;

export const SelectProject = styled.select`
  height: 40px;
  width: 100%;
  padding: 0 30px 0 8px;
  border-radius: 8px;
  border: 1px solid #505050;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  background-color: white;
  color: #454545;
  cursor: pointer;
  appearance: none;

  option {
    background: white;
    color: black;
  }
`;

export const SpreadsheetContainer = styled.div`
  height: 76%;
  border: 1px solid black;
  width: 100%;
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  height: 100%;
`;

export const ExportButton = styled.button`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 172px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  margin-top: 10px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;

  span {
    color: #D0D0D0;
  }
`;

export const DropdownIcon = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #262626;
  pointer-events: none;
`;
