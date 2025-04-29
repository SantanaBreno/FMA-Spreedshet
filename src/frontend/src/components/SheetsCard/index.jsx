import React from "react";
import { Icon } from "@iconify/react"; 

import {
  OptionCard as StyledOptionCard,
  CardHeader,
  CardBody,
} from "./styles";

const SheetsCard = ({ title }) => {
  return (
    <StyledOptionCard>
      <CardHeader>{title}</CardHeader>
      <CardBody>
        <Icon icon="vscode-icons:file-type-excel2" style={{ fontSize: 48, color: "#417636" }} />
      </CardBody>
    </StyledOptionCard>
  );
};

export default SheetsCard;
