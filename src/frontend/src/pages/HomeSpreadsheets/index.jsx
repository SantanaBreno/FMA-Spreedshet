import React, { useState } from "react";
import { PlusIcon, Sidebar } from "lucide-react";
import { CiImport } from "react-icons/ci";
import { AddCard } from "../../components/NewSheets";
import SheetsCard from "../../components/SheetsCard";
import { SortToggle } from "../../components/SortToggle";
import { FilterToggle } from "../../components/FilterToggle";
import SideBar from '../../components/SideBar';
import NavBar from "../../components/NavBar";
import Input  from "../../components/Input";

import {
  HomeWrapper,
  OptionsWrapper,
  OptionIcon,
  OptionLabel,
  TopControls,
  ControlsRight,
  ContentWrapper,
  SpreadsheetContainer,
} from "./style";

export const HomeSpreadsheets = () => {
  const [sortOrder, setSortOrder] = useState("desc");

  const spreadsheets = Array(12).fill({
    title: "Planilha xx",
  });

  const handleFilterClick = () => {
    alert("Abrir modal/função de filtro...");
  };

  return (
    <>
      <SideBar />
      <HomeWrapper>
        <NavBar className="nav-bar"/>
        <ContentWrapper>
          <TopControls>
            <Input type="search" placeholder="Pesquisar tabela"/>
            <ControlsRight>
              <SortToggle
                order={sortOrder}
                onToggle={() =>
                  setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
                }
              />
              <FilterToggle onClick={handleFilterClick} />
              <AddCard>
                <OptionLabel>Importar</OptionLabel>
                <OptionIcon>
                  <CiImport size={20} style={{ color: "#DDDDDD", opacity: 0.8 }} />
                </OptionIcon>
              </AddCard>
              <AddCard>
                <OptionLabel>Nova Planilha</OptionLabel>
                <OptionIcon>
                  <PlusIcon size={20} style={{ color: "#DDDDDD", opacity: 0.8 }} />
                </OptionIcon>
              </AddCard>
            </ControlsRight>
          </TopControls>

        <SpreadsheetContainer>
          <OptionsWrapper>
            {spreadsheets.map((sheet, index) => (
              <SheetsCard key={index} title={sheet.title} />
            ))}
          </OptionsWrapper>
        </SpreadsheetContainer>
        </ContentWrapper>
    </HomeWrapper>
    </>
  );
};

export default HomeSpreadsheets;
