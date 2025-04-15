import styled from 'styled-components';

export const HomeWrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  padding: 0; // ou ajuste para não estourar a altura
`;


export const Title = styled.h2`
  font-size: clamp(20px, 3vw, 32px);
  margin-bottom: clamp(32px, 6vh, 60px);
  text-align: center;
  font-weight: 600;
   font-family: 'Poppins', sans-serif;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: clamp(16px, 5vw, 40px);
  flex-wrap: wrap;
  max-width: 100%;
  box-sizing: border-box;
`;

export const OptionCard = styled.div`
  background-color: white;
  color: black;
  padding: 32px;
  border-radius: 12px;
  width: clamp(140px, 40vw, 180px);
  height: clamp(160px, 24vh, 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
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
  font-size: clamp(12px, 1.5vw, 16px);
  text-align: center;
  line-height: 1.3;
  font-weight: 500;
   font-family: 'Poppins', sans-serif;
`;
