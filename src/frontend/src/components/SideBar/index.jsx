import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa o useNavigate corretamente

import { Icon } from "@iconify/react";

import logo from "../../assets/logo_branca.svg";

import {
  Container,
  NavItem,
  Label,
  ToggleButton,
  Logo,
  UpSideContainer,
  LogoContainer,
} from "./styles";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Inicializa o hook para navegação

  return (
    <Container isOpen={isOpen}>
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

      {/* Botões com navegação */}
      <NavItem onClick={() => navigate('/home')} isOpen={isOpen}>
        <Icon icon="mdi:home" style={{ width: 24, height: 24 }} />
        <Label isOpen={isOpen}>Página inicial</Label>
      </NavItem>

      <NavItem onClick={() => navigate('/homespreadsheets')} isOpen={isOpen}>
        <Icon icon="mdi:google-spreadsheet" style={{ width: 24, height: 24 }} />
        <Label isOpen={isOpen}>Planilhas</Label>
      </NavItem>

      <NavItem onClick={() => navigate('/newsheet')} isOpen={isOpen}>
        <Icon
          icon="tabler:plus"
          style={{
            width: 20,
            height: 20,
            backgroundColor: "white",
            color: "black",
            borderRadius: 4,
          }}
        />
        <Label isOpen={isOpen}>Nova tabela</Label>
      </NavItem>
    </Container>
  );
};

export default SideBar;
