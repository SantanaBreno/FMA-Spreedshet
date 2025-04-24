import React from "react";
import { FaRegFileExcel } from "react-icons/fa";

import {
  OptionCard as StyledOptionCard,
  CardHeader,
  CardBody,
} from "./styles";

const SheetsCard = ({ title, Icon }) => {
  return (
    <StyledOptionCard>
      <CardHeader>{title}</CardHeader>
      <CardBody>
        <FaRegFileExcel size={40} color="#417636"/>      
      </CardBody>
    </StyledOptionCard>
  );
};

export default SheetsCard;
