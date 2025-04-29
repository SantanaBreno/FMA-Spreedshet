import React, { useState } from "react";
import { PlusIcon, Sidebar } from "lucide-react";
import { CiImport } from "react-icons/ci";
import { AddCard } from "../../components/NewSheets";
import SheetsCard from "../../components/SheetsCard";
import { SortToggle } from "../../components/SortToggle";
import { Icon } from "@iconify/react"; // Importando Iconify
import SideBar from '../../components/SideBar';
import NavBar from "../../components/NavBar";
import Input from "../../components/Input";

import {
  HomeWrapper,
  OptionsWrapper,
  OptionIcon,
  OptionLabel,
  TopControls,
  ControlsRight,
  ContentWrapper,
  SpreadsheetContainer,
} from "./styles";

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
        <NavBar className="nav-bar" />
        <ContentWrapper>
          <TopControls>
            <Input type="search" placeholder="Pesquisar tabela" />
            <ControlsRight>
              {/* Botão de Filtro */}
              <button
                onClick={handleFilterClick}
                style={{
                  color: "#151515",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px",
                  borderRadius: "8px",
                  transition: "background-color 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <Icon icon="mdi:filter" style={{ fontSize: 32, color: "#262626" }} />
              </button>

              {/* Botão de Ordenação */}
              <button
                onClick={() =>
                  setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
                }
                style={{
                  color: "#151515",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px",
                  borderRadius: "8px",
                  transition: "background-color 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <Icon icon="flowbite:sort-outline" style={{ fontSize: 32, color: "#262626" }} />
              </button>

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
