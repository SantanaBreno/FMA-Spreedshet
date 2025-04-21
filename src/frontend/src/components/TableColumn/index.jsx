import React from "react";

import { ColumnContainer, TitleCell, Cell } from "./styles";

const TableColumn = ({ title }) => {
    return (
       <ColumnContainer>
       <TitleCell>
            <span><b>{title}</b></span>
        </TitleCell>
        <Cell>
            
        </Cell>
       </ColumnContainer>
    );
};

export default TableColumn;