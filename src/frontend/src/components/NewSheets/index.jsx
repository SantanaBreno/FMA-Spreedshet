import React from "react";
import { AddCardWrapper } from "./styles";

// Repassa apenas o onClick se estiver definido
export const AddCard = ({ children, onClick }) => {
  return (
    <AddCardWrapper {...(onClick ? { onClick } : {})}>
      {children}
    </AddCardWrapper>
  );
};
