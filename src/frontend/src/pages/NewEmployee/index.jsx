import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";

import {
  PageWrapper,
  ContentContainer,
  Title,
  FormRow,
  Input,
  ButtonRow,
  CancelButton,
  AddButton
} from "./styles";

const NewEmployee = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    valorHora: "",
    dataAdmissao: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    navigate(-1); // Voltar para a tela anterior
  };

  const handleAdd = () => {
    console.log("Novo colaborador:", formData);
    // Aqui você pode chamar um backend ou função de contexto para salvar
    navigate(-1); // Ou redirecionar para a lista de colaboradores
  };

  return (
    <>
      <SideBar />
      <PageWrapper>
        <NavBar />
        <ContentContainer>
          <Title>Cadastrar novo colaborador</Title>

          <FormRow className="full">
            <Input
              type="text"
              placeholder="Nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
            />
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormRow>

          <FormRow>
            <Input
              type="number"
              placeholder="Valor da hora"
              name="valorHora"
              value={formData.valorHora}
              onChange={handleChange}
            />
            <Input
              type="date"
              placeholder="Data de admissão"
              name="dataAdmissao"
              value={formData.dataAdmissao}
              onChange={handleChange}
            />
          </FormRow>

          <ButtonRow>
            <CancelButton onClick={handleCancel}>Cancelar</CancelButton>
            <AddButton onClick={handleAdd}>Adicionar</AddButton>
          </ButtonRow>
        </ContentContainer>
      </PageWrapper>
    </>
  );
};

export default NewEmployee;
