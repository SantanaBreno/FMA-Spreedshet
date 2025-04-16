import React from "react";
import { FilterButton } from "./style";
import { LuFilter } from "react-icons/lu";

export const FilterToggle = ({ onClick }) => {
  return (
    <FilterButton onClick={onClick}>
      <LuFilter size={18} />
    </FilterButton>
  );
};
