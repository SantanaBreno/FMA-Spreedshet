import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { FaSearch } from 'react-icons/fa';
import { FaSquarePlus } from "react-icons/fa6";

import SideBar from '../../components/SideBar';
import NavBar from "../../components/NavBar";
import TableSpreadsheet from "../../components/TableSpreadsheet";
import PopupAddItem from "../../components/Popup";
import { exportarPlanilha } from "../../utils/exportarPlanilha";

import {
    NewSheetWrapper,
    ContentContainer,
    UpSideContentContainer,
    LeftContainer,
    InputWrapper,
    InputSearchWrapper,
    Input,
    RightContainer,
    AddItemButton,
    ExportButton,
    SelectProject,
    SelectProjectWrapper,
    DropdownWrapper,
    DropdownIcon,
    SpreadsheetContainer,
    ScrollContainer,
    NameSheet,
  } from "./styles";

// Estilos para os ícones
const IconStyles = {
  FaSquarePlus: { color: "#262626", fontSize: 24, marginRight: 10 },
  ExportIcon: { width: 20, height: 20, color: '#D0D0D0', marginLeft: 24 },
};

const NewSheet = () => {
  const [data, setData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleEdit = () => setEditMode(prev => !prev);

  const handleChange = (id, field, value) => {
    setData(prev => prev.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const handleAddItemClick = () => setPopupVisible(true);
  const handleClosePopup = () => setPopupVisible(false);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleExport = () => exportarPlanilha(data, "planilha_decoracao.xlsx");

  return (
    <>
      <SideBar />
      <NewSheetWrapper>
        <NavBar className="nav-bar" />
        <ContentContainer>
          <UpSideContentContainer>
            <LeftContainer>
              <NameSheet type="text" placeholder="Criar nova planilha" />
              <InputWrapper>
                <button
                  type="button" // importante definir o tipo para evitar comportamento inesperado
                  onClick={() => { /* vazio por enquanto */ }}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <FaSquarePlus style={IconStyles.FaSquarePlus} />
                </button>

                <InputSearchWrapper>
                  <Input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Buscar..."
                  />
                  <FaSearch className="search-icon" />
                </InputSearchWrapper>

                <AddItemButton onClick={handleAddItemClick}>
                  Adicionar novo item
                </AddItemButton>
            </InputWrapper>
            </LeftContainer>

            <RightContainer>
                <DropdownWrapper>
                    <SelectProjectWrapper>
                    <SelectProject>
                        <option value="xlsx">Projeto</option>
                        <option value="pdf">CYRELA</option>
                    </SelectProject>
                    <DropdownIcon icon="mdi:chevron-down" />
                    </SelectProjectWrapper>
                </DropdownWrapper>

                <ExportButton onClick={handleExport}>
                    <span>Exportar planilha</span>
                    <Icon icon="mi:export" style={IconStyles.ExportIcon} />
                </ExportButton>
            </RightContainer>
          </UpSideContentContainer>

          <SpreadsheetContainer>
            <ScrollContainer>
              <TableSpreadsheet
                data={data}
                handleChange={handleChange}
                editMode={editMode}
              />
            </ScrollContainer>
          </SpreadsheetContainer>
        </ContentContainer>
      </NewSheetWrapper>

      {isPopupVisible && <PopupAddItem onClose={handleClosePopup} />}
    </>
  );
};

export default NewSheet;
