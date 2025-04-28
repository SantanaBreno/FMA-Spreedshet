import React from "react";
import { Icon } from "@iconify/react"; // <-- Importa Iconify corretamente
import { FilterButton } from "./style"; // Botão já estilizado no seu projeto

export const FilterToggle = ({ onClick }) => {
  return (
    <FilterButton onClick={onClick}>
      <Icon icon="flowbite:sort-outline" style={{ fontSize: 32, color: "#151515" }} />
    </FilterButton>
  );
};

export default FilterToggle;
