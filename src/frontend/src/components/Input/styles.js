import styled from "styled-components";

export const InputContainer = styled.input`
  padding: 12px 16px;
  border: none;
  border-radius: 12px;
  background-color: black;
  color: #D0D0D0;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  letters-spacing: 1px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  height: 40px;
  width: ${({ $width }) => $width ? `${$width}px` : 'clamp(260px, 60vw, 480px)'};

  &::placeholder {
    color: #D0D0D0;
    opacity: 0.7;
  }
`;