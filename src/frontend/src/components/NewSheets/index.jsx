import React from "react";
import { AddCardWrapper } from "./styles";

export const AddCard = ({ children, onClick }) => {
  return (
    <AddCardWrapper onClick={onClick} style={{ cursor: "pointer" }}>
      {children}
    </AddCardWrapper>
  );
};
