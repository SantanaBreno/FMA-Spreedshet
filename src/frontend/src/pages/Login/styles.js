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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  width: clamp(181px, 40vw, 200px);
  height: 36px;
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: clamp(14px, 1.5vw, 16px);
  cursor: pointer;
  transition: 0.3s ease;
  margin-top: clamp(24px, 4vh, 60px);

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: clamp(60px, 12vh, 120px); 
  gap: 28px; 
  width: 100%;
  max-width: 480px;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(120px, 20vh, 300px) 20px 40px; 
  gap: 42px;
  min-height: 100vh;
  background-color: white;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
`;
