import React, { useState } from "react";

import { Icon } from "@iconify/react";

import logo from "../../assets/logo_branca.svg";

import {
  SidebarContainer,
  NavItem,
  Label,
  ToggleButton,
  Logo,
  UpSideContainer,
  LogoContainer,
} from "./styles";


const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SidebarContainer isOpen={isOpen}>
      <UpSideContainer>
      <LogoContainer isOpen={isOpen}> 
      <Logo>
        <img src={logo} alt="Logo" />
        <span>FMA</span>
      </Logo>
      </LogoContainer>
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>
        <Icon icon="heroicons:bars-3-bottom-right-16-solid" />
      </ToggleButton>
      </UpSideContainer>

      <NavItem href="#" isOpen={isOpen}>
        <Icon icon="mdi:home" style={{width: 20, height: 20}}/>
        <Label isOpen={isOpen}>Página inicial</Label>
      </NavItem>

      <NavItem href="#" isOpen={isOpen}>
        <Icon icon="mdi:google-spreadsheet" style={{width: 20, height: 20}}/>
        <Label isOpen={isOpen}>Planilhas</Label>
      </NavItem>

      <NavItem href="#" isOpen={isOpen}>
        <Icon icon="tabler:plus" style={{backgroundColor: "white", color: "black", borderRadius: 4}}/>
        <Label isOpen={isOpen}>Nova tabela</Label>
      </NavItem>
    </SidebarContainer>
  );
};

export default SideBar;
