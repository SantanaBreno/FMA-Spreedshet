import styled from "styled-components";

export const InputContainer = styled.input`
  padding: 12px 16px;
  border: none;
  border-radius: 12px;
  background-color: black;
  color: #D0D0D0;
  font-size: clamp(14px, 1.5vw, 18px);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  width: ${({ $width }) => $width ? `${$width}px` : 'clamp(260px, 60vw, 480px)'};

  &::placeholder {
    color: #D0D0D0;
    opacity: 0.7;
  }
`;