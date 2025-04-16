import React from "react";
import {
  OptionCard as StyledOptionCard,
  CardHeader,
  CardBody,
} from "./styles";

export const OptionCard = ({ title, Icon }) => {
  return (
    <StyledOptionCard>
      <CardHeader>{title}</CardHeader>
      <CardBody>
        {Icon && <Icon size={40} color="#417636" />}
      </CardBody>
    </StyledOptionCard>
  );
};
