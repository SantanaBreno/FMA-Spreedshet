import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PlusIcon } from "lucide-react";
import { CiImport } from "react-icons/ci";
import { Icon } from "@iconify/react";

import SideBar from '../../components/SideBar';
import NavBar from "../../components/NavBar";
import Input from "../../components/Input";
import SheetsCard from "../../components/SheetsCard";
import { AddCard } from "../../components/NewSheets";
import { SortToggle } from "../../components/SortToggle";

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
  const [spreadsheets, setSpreadsheets] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSpreadsheets = async () => {
      try {
        const response = await axios.get("http://localhost:8000/spreadsheets");
        setSpreadsheets(response.data);
      } catch (error) {
        console.error("Erro ao buscar planilhas:", error);
      }
    };

    fetchSpreadsheets();
  }, []);

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

              {/* Botões de Importar e Nova Planilha */}
              <AddCard>
                <OptionLabel>Importar</OptionLabel>
                <OptionIcon>
                  <CiImport size={20} style={{ color: "#DDDDDD", opacity: 0.8 }} />
                </OptionIcon>
              </AddCard>

              <AddCard onClick={() => navigate("/newsheet")}>
                <OptionLabel>Nova Planilha</OptionLabel>
                <OptionIcon>
                  <PlusIcon size={20} style={{ color: "#DDDDDD", opacity: 0.8 }} />
                </OptionIcon>
              </AddCard>
            </ControlsRight>
          </TopControls>

          {/* Renderização dos Cards com planilhas reais */}
          <SpreadsheetContainer>
            <OptionsWrapper>
            {spreadsheets.map((sheet) => {
              const cleanTitle = sheet.title.replace(/\.[^/.]+$/, ""); // remove extensão .xls, .xlsx, etc.
              return (
                <SheetsCard key={sheet.title} title={cleanTitle} />
              );
            })}
            </OptionsWrapper>
          </SpreadsheetContainer>
        </ContentWrapper>
      </HomeWrapper>
    </>
  );
};

export default HomeSpreadsheets;
