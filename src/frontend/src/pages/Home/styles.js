import styled from 'styled-components';

export const HomeWrapper = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  padding: 0;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px; // espaço entre o título e os cards
`;

export const Title = styled.h2`
  font-size: clamp(20px, 3vw, 32px);
  text-align: center;
  font-weight: 300;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1px;
  margin: 0; 
`;

export const OptionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: clamp(16px, 12vw, 104px);
  flex-wrap: wrap;
  max-width: 100%;
  box-sizing: border-box;
`;

export const OptionCard = styled.div`
  background-color: white;
  color: black;
  padding: 32px;
  border-radius: 12px;
  width: clamp(160px, 40vw, 200px);
  height: clamp(160px, 24vh, 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const OptionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
`;

export const OptionLabel = styled.div`
  font-size: clamp(16px, 1.8vw, 16px);
  color: #DCDCDC;
  text-align: center;
  line-height: 1.2;
  font-weight: 300;
  font-family: Inter, sans-serif;
  letter-spacing: 1px;
  padding-top: 32px;
`;
