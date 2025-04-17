import React from "react";

import { Icon } from "@iconify/react";

import SideBar from '../../components/SideBar';
import PerfilIcon from "../../components/PerfilIcon";
import NavBar from "../../components/NavBar";

import TitleColumn from "../../components/TableColumn";

import { 
    DecorationWorksheetsWrapper, 
    NavBarContainer, 
    ContentContainer, 
    UpSideContentContainer,
    LeftContainer,
    RightContainer,
    EditButton,
    ExportButton,
    SpreadsheetContainer,
    ScrollContainer
} from "./styles";
import TableColumn from "../../components/TableColumn";

const DecorationWorksheets = () => {
    return (
        <>  
            <SideBar />
            <DecorationWorksheetsWrapper>
                
                <NavBarContainer>
                    <NavBar className="nav-bar"/>
                    <ContentContainer >
                        <UpSideContentContainer>
                            <LeftContainer>
                                <h2>Planilha 01</h2>
                            </LeftContainer>
                            <RightContainer>
                              <EditButton>
                                <Icon icon="flowbite:edit-solid" style={{width: 30, height: 30}}/>
                              </EditButton>
                              <ExportButton>
                                <span>Exportar planilha</span>
                                <Icon icon="mi:export" style={{width: 20, height: 20, color: '#D0D0D0', marginLeft: 10}}/>
                              </ExportButton>
                            </RightContainer>
                        </UpSideContentContainer>
                        <SpreadsheetContainer>
                            <ScrollContainer>
                                <TableColumn title="Coluna 1" />
                            </ScrollContainer>
                        </SpreadsheetContainer>       
                    </ContentContainer>
                </NavBarContainer>
            </DecorationWorksheetsWrapper>
        </>
    );
}

export default DecorationWorksheets;