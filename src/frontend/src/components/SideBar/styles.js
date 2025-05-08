import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: ${props => (props.$isOpen ? "250px" : "60px")};
  background-color: black;
  color: white;
  padding: 1rem;
  transition: width 0.3s;
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.$isOpen ? 'normal' : 'center')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const UpSideContainer = styled.div`
  border-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  font-family: 'Inter', sans-serif;
  display: ${props => (props.$isOpen ? 'flex': 'none')};
  padding: 0;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  align-self: ${({ $isOpen }) => ($isOpen ? 'flex-end': 'center')};
  cursor: pointer;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0;
  margin-bottom: 30px;
  justify-content: start;

  img {
    height: 25px;
  }

  span {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    padding-left: 5px;
    font-size: 30px;
  }
`;

export const NavItem = styled.a`
  display: flex;
  align-items: center;
  gap: ${props => (props.$isOpen ? "0.75rem" : "0")};
  padding: 0.8rem;
  border-radius: 0.375rem;
  text-decoration: none;
  color: inherit;
  white-space: nowrap;
  overflow: hidden;
  transition: all 0.3s;
  &:hover {
    background-color: #374151;
  }
`;

export const Label = styled.span`
  display: ${props => (props.$isOpen ? "inline" : "none")};
  transition: display 0.3s;
`;
