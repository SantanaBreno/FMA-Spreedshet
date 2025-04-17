import styled from 'styled-components';

export const AddCardWrapper = styled.div`
  width: 214px;
  height: 50px;
  background-color: #151515;
  color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  gap:12px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  svg {
    color: white;
    width: 24px;
    height: 24px;
  }

  font-family: 'Inter', sans-serif;
`;
