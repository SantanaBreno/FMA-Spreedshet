import React from "react";

import SideBar from '../../components/SideBar';
import PerfilIcon from "../../components/PerfilIcon";
import NavBar from "../../components/NavBar";

import { DecorationWorksheetsWrapper } from "./styles";
import NavBar from "../../components/NavBar";



const DecorationWorksheets = () => {
    return (
        <>
            {/* <SideBar /> */}
            <DecorationWorksheetsWrapper>
                <PerfilIcon></PerfilIcon>
                {/* <NavBar /> */}
            </DecorationWorksheetsWrapper>
        </>
    );
}

export default DecorationWorksheets;