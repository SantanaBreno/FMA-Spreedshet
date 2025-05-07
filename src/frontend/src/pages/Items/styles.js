import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const DecorationWorksheetsWrapper = styled.div`
width: 100%;
min-height: 100vh;
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: start;
position: relative;
align-items: center;
background-color: white;
position: relative;
color: white;

.nav-bar {
    justify-content: start;
}
`;

export const ContentContainer = styled.div`
width: 90%;
margin-top: 40px;
margin-left: 40px;
margin-bottom: 40px;
`;

export const UpSideContentContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;
margin-bottom: 24px;
`;

export const LeftContainer = styled.div`
width: 50%;

h2 {
    color: black;
    font-family: Poppins, sans-serif;
    font-size: 32px;
    font-weight: 300;
    margin-bottom: 24px;
}
`;

export const RightContainer = styled.div`
width: 50%;
display: flex;
justify-content: flex-end;
align-items: flex-end;
flex-direction: row;
gap: 16px;
font-weight: 300;
`;

export const CardsWrapper = styled.div`
margin-top: 20px;

.MuiAccordion-root {
    margin-bottom: 16px;
}
`;

export const CardBox = styled.div`
border: 1px solid #ccc;
border-radius: 8px;
padding: 16px;
margin-bottom: 16px;
background-color: #fff;
box-shadow: 0 2px 4px rgba(0,0,0,0.1);

h3 {
    margin-bottom: 8px;
    font-weight: 500;
    color: black;
}

ul {
    margin-left: 20px;
    color: #333;
}
`;

export const SectionWrapper = styled.div`
margin: 24px 0;
`;

export const SearchInputWrapper = styled.div`
position: relative;
width: 100%;
`;

export const SearchInput = styled.input`
  padding: 10px 40px 10px 12px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 100%;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border: 1px solid #ccc;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const SearchIcon = styled(Icon)`
position: absolute;
right: 12px;
top: 50%;
transform: translateY(-50%);
color: #333;
`;

export const EditInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid #ccc;
  font-family: 'Inter', sans-serif;
  font-weight: 200;
  font-size: 14px;
  padding: 4px 8px;
  width: 100%;

  &:focus {
    outline: none;
    border-bottom: 1px solid black;
  }
`;


export const SaveButton = styled.button`
background-color: black;
color: white;
border: none;
padding: 8px 20px;
border-radius: 8px;
cursor: pointer;
font-family: 'Inter', sans-serif;
font-size: 14px;
font-weight: 300;
margin-top: 10px;
align-self: flex-start;

&:hover {
    background-color: #333;
}
`;

export const CardHeader = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 8px;
border-radius: 8px;
font-family: 'Poppins', sans-serif;
font-size: 16px;

span {
    font-weight: 300;
    color: ${({ $isExpanded }) => ($isExpanded ? "#000" : "#555")};
}

svg {
    color: ${({ $isExpanded }) => ($isExpanded ? "#000" : "#999")};
}

&:hover {
    background-color: #f0f0f0;
}
`;

export const CardContent = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 200;  color: #333;
  margin-top: 8px;

  ul {
    list-style: none;
    padding-left: 12px;
    margin-top: -20px;
  }

  li {
    position: relative;
    padding-left: 16px;
    margin-bottom: 4px;
  }

  li::before {
    content: "•";           
    position: absolute;
    left: 0;
    top: 1px;
    font-size: 10px;
    color: #99;
    line-height: 1;
  }
`;

