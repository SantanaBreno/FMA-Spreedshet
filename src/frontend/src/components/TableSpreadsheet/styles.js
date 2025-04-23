import styled from "styled-components";

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TitleCell = styled.div`
    border: 1px solid black; 
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px; 
    span {
        color: black;
        font-size: 16px;
    }
`;

export const Cell = styled.div`
    border: 1px solid black; 
    height: 50px;
    padding: 10px; 
    display: flex;
    justify-content: flex-start;
`;