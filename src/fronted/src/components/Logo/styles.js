import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(100px, 15vh, 260px) 20px;
  gap: 40px;
  min-height: 100vh;
  background-color: white;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
`;

export const LogoArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  max-width: 90vw;
  flex-wrap: wrap;
  justify-content: center;
`;

export const BarsGroup = styled.div`
  display: flex;
  gap: 11px;
`;

export const BarTall = styled.div`
  width: 15px;
  height: clamp(90px, 12vw, 123px);
  background-color: black;
`;

export const BarShort = styled.div`
  width: 15px;
  height: clamp(70px, 9vw, 96px);
  background-color: black;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: clamp(120px, 16vw, 123px);
  text-transform: uppercase;
  color: black;
  font-size: clamp(14px, 2vw, 24px);
  font-weight: 500;
  line-height: 1.1;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: clamp(40px, 8vh, 80px); 
  gap: 27px; 
  width: 100%;
  max-width: 480px;
`;

export const Input = styled.input`
  padding: 12px 16px;
  border: none;
  border-radius: 12px;
  background-color: black;
  color: #D0D0D0;
  font-size: clamp(14px, 1.5vw, 18px);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  width: clamp(260px, 60vw, 480px);

  &::placeholder {
    color: #D0D0D0;
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  width: clamp(181px, 40vw, 320px);
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  font-weight: 500;
  font-size: clamp(14px, 1.5vw, 18px);
  cursor: pointer;
  transition: 0.3s ease;
  margin: clamp(24px, 6vh, 60px) auto 0 auto;

  &:hover {
    background-color: black;
    color: white;
  }
`;
