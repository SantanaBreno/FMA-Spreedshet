import React from "react";

import SideBar from '../../components/SideBar';
import PerfilIcon from "../../components/PerfilIcon";
import { DecorationWorksheetsWrapper } from "./styles";

const DecorationWorksheets = () => {
    return (
        <>
            {/* <SideBar /> */}
            <DecorationWorksheetsWrapper>
                <PerfilIcon size={40}/>
            </DecorationWorksheetsWrapper>
        </>
    );
}

export default DecorationWorksheets;