import React, { useState } from "react";
import { PlusIcon, Sidebar } from "lucide-react";
import { FaRegFileExcel } from "react-icons/fa";
import { AddCard } from "../../components/NewSheets";
import { OptionCard } from "../../components/SheetsCard";
import { SortToggle } from "../../components/SortToggle";
import { FilterToggle } from "../../components/FilterToggle";
import SideBar from '../../components/SideBar';

import {
  HomeWrapper,
  OptionsWrapper,
  OptionIcon,
  OptionLabel,
  TopControls,
  ControlsRight,
  ContentWrapper,
} from "./style";

export const HomeSpreadsheets = () => {
  const [sortOrder, setSortOrder] = useState("desc");

  const spreadsheets = Array(12).fill({
    title: "Planilha xx",
    Icon: FaRegFileExcel,
  });

  const handleFilterClick = () => {
    alert("Abrir modal/função de filtro...");
  };

  return (
    <HomeWrapper>
  <SideBar />
  <ContentWrapper>
    <TopControls>
      <ControlsRight>
        <SortToggle
          order={sortOrder}
          onToggle={() =>
            setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
          }
        />
        <FilterToggle onClick={handleFilterClick} />
        <AddCard>
          <OptionLabel>Nova Planilha</OptionLabel>
          <OptionIcon>
            <PlusIcon size={24} style={{ color: "#DDDDDD" }} />
          </OptionIcon>
        </AddCard>
      </ControlsRight>
    </TopControls>

    <OptionsWrapper>
      {spreadsheets.map((sheet, index) => (
        <OptionCard key={index} title={sheet.title} Icon={sheet.Icon} />
      ))}
    </OptionsWrapper>
  </ContentWrapper>
</HomeWrapper>
  );
};

export default HomeSpreadsheets;
