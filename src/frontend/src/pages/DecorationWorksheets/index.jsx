import React from "react";

import SideBar from '../../components/SideBar';
import PerfilIcon from "../../components/PerfilIcon";
import NavBar from "../../components/NavBar";


import { DecorationWorksheetsWrapper } from "./styles";

const DecorationWorksheets = () => {
    return (
        <>
            {/* <SideBar /> */}
            <DecorationWorksheetsWrapper>
                <NavBar />
            </DecorationWorksheetsWrapper>
        </>
    );
}

export default DecorationWorksheets;