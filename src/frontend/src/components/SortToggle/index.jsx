import React from "react";
import { Button } from "./style";
import { BiSortAlt2 } from "react-icons/bi";

export const SortToggle = ({ order, onToggle }) => {
  return (
    <Button onClick={onToggle}>
      <BiSortAlt2 size={18} />
    </Button>
  );
};
