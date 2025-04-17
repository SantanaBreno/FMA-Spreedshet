import React from "react";

import { TitleCell } from "./styles";

const TableColumn = ({ title }) => {
    return (
        <TitleCell>
            <span><b>{title}</b></span>
        </TitleCell>
    );
};

export default TableColumn;