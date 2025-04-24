import React, { useState } from "react";

import { Icon } from "@iconify/react";

import SideBar from '../../components/SideBar';
import NavBar from "../../components/NavBar";
import TableSpreadsheet from "../../components/TableSpreadsheet";

import { exportarPlanilha } from "../../utils/exportarPlanilha";

import { 
    DecorationWorksheetsWrapper, 
    ContentContainer, 
    UpSideContentContainer,
    LeftContainer,
    RightContainer,
    EditButton,
    ExportButton,
    SpreadsheetContainer,
    ScrollContainer
} from "./styles";


const DecorationWorksheets = () => {
    const [data, setData] = useState([
        {
          id: 1,
          quant: 1,
          produto: "ESPELHO",
          descricao: "MODELO MIRAGGIO...",
          ambiente: "HALL",
          imagem: "https://s3.amazonaws.com/seu-bucket/caminho/espelho.jpg",
          dimensao: "107X187",
          fornecedor: "FIRMACASA",
          prazoEntrega: "PRONTA ENTREGA",
          valorUnitario: 49999.90,
          desconto: 0,
          valorFinal: 49999.90,
          status: "FECHADO"
        },
        {
            id: 2,
            quant: 12,
            produto: "Mesa",
            descricao: "MODELO MIRAGGIO...",
            ambiente: "HALL",
            imagem: "https://s3.amazonaws.com/seu-bucket/caminho/espelho.jpg",
            dimensao: "107X187",
            fornecedor: "FIRMACASA",
            prazoEntrega: "PRONTA ENTREGA",
            valorUnitario: 49999.90,
            desconto: 0,
            valorFinal: 49999.90,
            status: "FECHADO"
          },
          {
            id: 3,
            quant: 12,
            produto: "Lustre",
            descricao: "MODELO MIRAGGIO...",
            ambiente: "HALL",
            imagem: "https://s3.amazonaws.com/seu-bucket/caminho/espelho.jpg",
            dimensao: "107X187",
            fornecedor: "FIRMACASA",
            prazoEntrega: "PRONTA ENTREGA",
            valorUnitario: 49999.90,
            desconto: 0,
            valorFinal: 49999.90,
            status: "FECHADO"
          },
             {
            id: 2,
            quant: 12,
            produto: "Mesa",
            descricao: "MODELO MIRAGGIO...",
            ambiente: "HALL",
            imagem: "https://s3.amazonaws.com/seu-bucket/caminho/espelho.jpg",
            dimensao: "107X187",
            fornecedor: "FIRMACASA",
            prazoEntrega: "PRONTA ENTREGA",
            valorUnitario: 49999.90,
            desconto: 0,
            valorFinal: 49999.90,
            status: "FECHADO"
          },
    ]);
    const [editMode, setEditMode] = useState(false);

    const toggleEdit = () => setEditMode(prev => !prev);

    const handleChange = (id, field, value) => {
        setData((prev) => prev.map(item => item.id === id ? { ...item, [field]: value } : item));

    }   

    const handleSave = () => {
        console.log("Salvando dados...");
        toggleEdit();
    }

    return (
        <>  
            <SideBar />
            <DecorationWorksheetsWrapper>
                <NavBar className="nav-bar"/>
                <ContentContainer >
                    <UpSideContentContainer>
                        <LeftContainer>
                            <h2>Planilha 01</h2>
                        </LeftContainer>
                        <RightContainer>
                            <EditButton onClick={toggleEdit}>
                                {editMode ? 
                                <span>Salvar</span> : 
                                <Icon icon="flowbite:edit-solid" style={{width: 30, height: 30}}/> 
                                }
                            </EditButton>
                            <ExportButton variant="outlined" onClick={() => exportarPlanilha(data, "planilha_decoracao.xlsx")}>
                                <span>Exportar planilha</span>
                                <Icon icon="mi:export" style={{width: 20, height: 20, color: '#D0D0D0', marginLeft: 10}}/>
                            </ExportButton>
                        </RightContainer>
                    </UpSideContentContainer>
                    <SpreadsheetContainer>
                        <ScrollContainer>
                        <TableSpreadsheet data={data} handleChange={handleChange} editMode={editMode} />
                        </ScrollContainer>
                        </SpreadsheetContainer>       
                </ContentContainer>
            </DecorationWorksheetsWrapper>
        </>
    );
}

export default DecorationWorksheets;