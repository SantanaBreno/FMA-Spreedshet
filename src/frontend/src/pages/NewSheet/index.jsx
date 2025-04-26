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
    ItemInputWrapper,
    ItemInput,
    CloseButton,
    LabelInputWrapper,
    ItemTextArea,      
    ImageUploadArea,
    ButtonWrapper,
    CancelButton,   
} from "./styles";

const NewSheet = () => {
    const [data, setData] = useState([]);
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
                <ContentContainer>
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
                        <h2>Adicionar novo item:</h2>
                        <ItemInputWrapper>
                            <LabelInputWrapper>
                                Nome do item
                                <ItemInput type="text"  />
                            </LabelInputWrapper>
                            <LabelInputWrapper>
                                Fornecedor
                                <ItemInput type="text" />
                            </LabelInputWrapper>
                            <LabelInputWrapper>
                                Dimensão
                                <ItemInput type="text" />
                            </LabelInputWrapper>
                            <LabelInputWrapper>
                                Valor unitário
                                <ItemInput type="text" />
                            </LabelInputWrapper>
                            <LabelInputWrapper style={{ width: "48%" }}>
                                Descrição
                                <ItemTextArea />
                            </LabelInputWrapper>
                            <LabelInputWrapper style={{ width: "48%" }}>
                                Imagem
                                <ImageUploadArea>
                                    Adicionar imagem ao produto
                                    <Icon icon="mdi:image-outline" style={{ marginTop: 8, fontSize: 24, opacity: 0.8 }} />
                                </ImageUploadArea>
                            </LabelInputWrapper>
                        </ItemInputWrapper>
                        <ButtonWrapper>
                            <CancelButton onClick={handleClosePopup}>Cancelar</CancelButton>
                            <CloseButton onClick={handleClosePopup}>Adicionar</CloseButton>
                        </ButtonWrapper>
                    </Popup>
                </>
            )}
        </>
    );
}

export default NewSheet;
