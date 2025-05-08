import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import SideBar from '../../components/SideBar';
import NavBar from "../../components/NavBar";
import { AddCard } from "../../components/NewSheets";
import Popup from "../../components/Popup"; 

import {
  DecorationWorksheetsWrapper,
  ContentContainer,
  UpSideContentContainer,
  LeftContainer,
  RightContainer,
  CardsWrapper,
  SearchInputWrapper,
  SearchInput,
  SearchIcon,
  EditInput,
  SaveButton,
  CardHeader,
  CardContent
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
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCard, setExpandedCard] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false); 

  const handleAddItemClick = () => {
    setIsPopupOpen(true);
  };

  const handleInputChange = (id, field, value) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const filteredData = data.filter(item =>
    item.produto.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.descricao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SideBar />
      <DecorationWorksheetsWrapper>
        <NavBar className="nav-bar" />
        <ContentContainer>
          <UpSideContentContainer>
            <LeftContainer>
              <h2>Itens adicionados</h2>
              <SearchInputWrapper>
                <SearchInput
                  type="text"
                  placeholder="Pesquisar item"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <SearchIcon icon="ic:round-search" />
              </SearchInputWrapper>
            </LeftContainer>

            <RightContainer>
              <AddCard onClick={handleAddItemClick}>
                Novo item
                <Icon icon="ic:baseline-add" style={{ opacity: 0.8 }} />
              </AddCard>
            </RightContainer>
          </UpSideContentContainer>

          <CardsWrapper>
            {filteredData.map(item => (
              <Accordion
                key={item.id}
                expanded={expandedCard === item.id}
                onChange={() =>
                  setExpandedCard(prev => prev === item.id ? null : item.id)
                }
              >
                <AccordionSummary>
                  <CardHeader $isExpanded={expandedCard === item.id}>
                    <span>{item.produto} - {item.descricao}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <Icon
                        icon="flowbite:edit-solid"
                        width="24"
                        height="24"
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingId(item.id);
                        }}
                        style={{ cursor: 'pointer' }}
                      />
                      <Icon
                        icon="eva:arrow-up-fill"
                        width="24"
                        height="24"
                        style={{
                          transform: expandedCard === item.id ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                          cursor: 'pointer'
                        }}
                      />
                    </div>
                  </CardHeader>
                </AccordionSummary>

                <AccordionDetails>
                  {expandedCard === item.id && editingId === item.id ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <EditInput
                        type="text"
                        value={item.descricao}
                        onChange={(e) => handleInputChange(item.id, 'descricao', e.target.value)}
                        placeholder="Descrição"
                      />
                      <EditInput
                        type="text"
                        value={item.dimensao}
                        onChange={(e) => handleInputChange(item.id, 'dimensao', e.target.value)}
                        placeholder="Dimensão"
                      />
                      <EditInput
                        type="text"
                        value={item.fornecedor}
                        onChange={(e) => handleInputChange(item.id, 'fornecedor', e.target.value)}
                        placeholder="Fornecedor"
                      />
                      <EditInput
                        type="number"
                        value={item.valorUnitario}
                        onChange={(e) => handleInputChange(item.id, 'valorUnitario', parseFloat(e.target.value))}
                        placeholder="Valor unitário"
                      />
                      <SaveButton onClick={() => setEditingId(null)}>Salvar</SaveButton>
                    </div>
                  ) : (
                    <CardContent>
                      <ul>
                        <li>{item.descricao}</li>
                        <li>Dimensão: {item.dimensao}</li>
                        <li>Fornecedor: {item.fornecedor}</li>
                        <li>
                          Valor total inicial: R$ {item.valorUnitario.toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                          })}
                        </li>
                      </ul>
                      {editingId === item.id && (
                        <SaveButton onClick={() => setEditingId(null)}>Salvar</SaveButton>
                      )}
                    </CardContent>
                  )}
                </AccordionDetails>
              </Accordion>
            ))}
          </CardsWrapper>
        </ContentContainer>
      </DecorationWorksheetsWrapper>
      {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}

    </>
  );
};

export default DecorationWorksheets;
