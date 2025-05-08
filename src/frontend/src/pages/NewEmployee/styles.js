import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

export const ContentContainer = styled.div`
  width: 90%;
  margin-top: 40px;
  margin-left: 40px;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 300;
  font-family: 'Poppins', sans-serif;
  color: black;
  margin-bottom: 24px;
`;

export const FormRow = styled.div`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  gap: 16px;
  flex-direction: row;

  &.full {
    flex-direction: column;
    gap: 16px;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: black;
  }
`;

export const ButtonRow = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 16px;
`;

export const CancelButton = styled.button`
  background-color: #e63946;
  color: white;
  padding: 10px 24px;
  border: none;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  cursor: pointer;

  &:hover {
    background-color: #c71f2d;
  }
`;

export const AddButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px 24px;
  border: none;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;
