import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 16px;
  background-color: #f2f2f2;
`;

export const Button = styled.button`
  padding: 12px 16px;
  width: clamp(181px, 40vw, 320px);
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  font-weight: 500;
  font-size: clamp(14px, 1.5vw, 18px);
  cursor: pointer;
  transition: 0.3s ease;
  margin-top: clamp(24px, 6vh, 60px);

  &:hover {
    background-color: black;
    color: white;
  }
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