import styled from 'styled-components';

export const OptionCard = styled.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  width: clamp(180px, 80vw, 216px);
  height: clamp(110px, 24vh, 190px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardHeader = styled.div`
  background-color: black;
  color: #DDDDDD;
  padding: 12px;
  text-align: left;
  width: 100%;
  font-size: 16px;
  font-weight: 300;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.5px;
`;

export const CardBody = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;
