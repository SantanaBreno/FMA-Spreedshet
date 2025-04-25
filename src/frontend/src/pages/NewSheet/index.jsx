import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { FaSearch } from 'react-icons/fa';
import { FaSquarePlus } from "react-icons/fa6";

import SideBar from '../../components/SideBar';
import NavBar from "../../components/NavBar";
import TableSpreadsheet from "../../components/TableSpreadsheet";

import { exportarPlanilha } from "../../utils/exportarPlanilha";

import { 
    NewSheetWrapper, 
    ContentContainer, 
    UpSideContentContainer,
    LeftContainer,
    InputWrapper,
    Input,
    RightContainer,
    AddItemButton,
    ExportButton,
    SpreadsheetContainer,
    ScrollContainer,
    NameSheet,
    Popup,
    Overlay,
    CloseButton
} from "./styles";

const NewSheet = () => {
    const [data, setData] = useState([/* Seu array de dados aqui */]);
    const [editMode, setEditMode] = useState(false);
    const [isPopupVisible, setPopupVisible] = useState(false);

    const toggleEdit = () => setEditMode(prev => !prev);

    const handleChange = (id, field, value) => {
        setData((prev) => prev.map(item => item.id === id ? { ...item, [field]: value } : item));
    };

    const handleSave = () => {
        console.log("Salvando dados...");
        toggleEdit();
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleAddItemClick = () => {
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
    };

    return (
        <>  
            <SideBar />
            <NewSheetWrapper>
                <NavBar className="nav-bar"/>
                <ContentContainer >
                    <UpSideContentContainer>
                        <LeftContainer>
                            <NameSheet type="text" placeholder="Criar nova planilha" />
                            <InputWrapper>
                                <FaSquarePlus style={{ color: "#262626", fontSize: "20px", marginRight: "10px" }} /> 
                                <Input type="text"/>
                                <FaSearch style={{ color: "black", opacity: 0.6, fontSize: "20px", marginLeft: "10px" }} />
                                <AddItemButton onClick={handleAddItemClick}>Adicionar novo item</AddItemButton>
                            </InputWrapper>
                        </LeftContainer>
                        <RightContainer>
                            <ExportButton variant="outlined" onClick={() => exportarPlanilha(data, "planilha_decoracao.xlsx")}>
                                <span>Exportar planilha</span>
                                <Icon icon="mi:export" style={{width: 20, height: 20, color: '#D0D0D0', marginLeft: 10}} />
                            </ExportButton>
                        </RightContainer>
                    </UpSideContentContainer>
                    <SpreadsheetContainer>
                        <ScrollContainer>
                            <TableSpreadsheet data={data} handleChange={handleChange} editMode={editMode} />
                        </ScrollContainer>
                    </SpreadsheetContainer>       
                </ContentContainer>
            </NewSheetWrapper>

            {/* Popup */}
            {isPopupVisible && (
                <>
                    <Overlay onClick={handleClosePopup} />
                    <Popup>
                        <h2>Adicionar Novo Item</h2>
                        <p>Preencha os detalhes do novo item aqui.</p>
                        <CloseButton onClick={handleClosePopup}>Fechar</CloseButton>
                    </Popup>
                </>
            )}
        </>
    );
}

export default NewSheet;
