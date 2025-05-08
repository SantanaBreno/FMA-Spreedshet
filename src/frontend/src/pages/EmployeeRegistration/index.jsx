import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import SideBar from '../../components/SideBar';
import NavBar from "../../components/NavBar";
import { AddCard } from "../../components/NewSheets";

import {
  DecorationWorksheetsWrapper,
  ContentContainer,
  UpSideContentContainer,
  LeftContainer,
  RightContainer,
  CardsWrapper,
  SearchInputWrapper,
  SearchInput,
  EditInput,
  SaveButton,
  CardHeader,
  CardContent
} from "./styles";

const Colaboradores = () => {
  const [colaboradores, setColaboradores] = useState([
    { id: 1, nome: "Laura Bueno", email: "", valorHora: "", dataAdmissao: "" },
    { id: 2, nome: "Breno Santana", email: "", valorHora: "", dataAdmissao: "" },
    { id: 3, nome: "Marcelo Cintra", email: "", valorHora: "", dataAdmissao: "" },
    { id: 4, nome: "Renata Marques", email: "", valorHora: "", dataAdmissao: "" }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCard, setExpandedCard] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const navigate = useNavigate(); // <- Para redirecionar

  const handleInputChange = (id, field, value) => {
    setColaboradores((prev) =>
      prev.map((colaborador) =>
        colaborador.id === id ? { ...colaborador, [field]: value } : colaborador
      )
    );
  };

  const filteredColaboradores = colaboradores.filter(colaborador =>
    colaborador.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SideBar />
      <DecorationWorksheetsWrapper>
        <NavBar className="nav-bar" />
        <ContentContainer>
          <UpSideContentContainer>
            <LeftContainer>
              <h2>Colaboradores</h2>
              <SearchInputWrapper>
                <SearchInput
                  type="text"
                  placeholder="Pesquisar colaborador"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Icon
                  icon="ic:round-search"
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#333'
                  }}
                />
              </SearchInputWrapper>
            </LeftContainer>

            <RightContainer>
            <AddCard onClick={() => {
                console.log("clicado!");
                navigate("/newemployee");
                }}>
                Novo colaborador
                <Icon icon="ic:baseline-add" style={{ opacity: 0.8 }} />
            </AddCard>
            </RightContainer>
          </UpSideContentContainer>

          <CardsWrapper>
            {filteredColaboradores.map(colaborador => (
              <Accordion
                key={colaborador.id}
                expanded={expandedCard === colaborador.id}
                onChange={() =>
                  setExpandedCard(prev => prev === colaborador.id ? null : colaborador.id)
                }
              >
                <AccordionSummary>
                  <CardHeader $isExpanded={expandedCard === colaborador.id}>
                    <span>{colaborador.nome}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <Icon
                        icon="flowbite:edit-solid"
                        width="24"
                        height="24"
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingId(colaborador.id);
                        }}
                        style={{ cursor: 'pointer' }}
                      />
                      <Icon
                        icon="eva:arrow-up-fill"
                        width="24"
                        height="24"
                        style={{
                          transform: expandedCard === colaborador.id ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                          cursor: 'pointer'
                        }}
                      />
                    </div>
                  </CardHeader>
                </AccordionSummary>

                <AccordionDetails>
                  {expandedCard === colaborador.id && editingId === colaborador.id ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <EditInput
                        type="email"
                        value={colaborador.email}
                        onChange={(e) => handleInputChange(colaborador.id, 'email', e.target.value)}
                        placeholder="Email"
                      />
                      <EditInput
                        type="number"
                        value={colaborador.valorHora}
                        onChange={(e) => handleInputChange(colaborador.id, 'valorHora', e.target.value)}
                        placeholder="Valor da hora"
                      />
                      <EditInput
                        type="date"
                        value={colaborador.dataAdmissao}
                        onChange={(e) => handleInputChange(colaborador.id, 'dataAdmissao', e.target.value)}
                        placeholder="Data de admissão"
                      />
                      <SaveButton onClick={() => setEditingId(null)}>Salvar</SaveButton>
                    </div>
                  ) : (
                    <CardContent>
                      <ul>
                        <li>Email: {colaborador.email || '—'}</li>
                        <li>Valor da hora: {colaborador.valorHora || '—'}</li>
                        <li>Data de admissão: {colaborador.dataAdmissao || '—'}</li>
                      </ul>
                    </CardContent>
                  )}
                </AccordionDetails>
              </Accordion>
            ))}
          </CardsWrapper>
        </ContentContainer>
      </DecorationWorksheetsWrapper>
    </>
  );
};

export default Colaboradores;
