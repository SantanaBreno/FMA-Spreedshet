import React from "react";
import { Icon } from "@iconify/react";
import {
  PopupWrapper,
  Overlay,
  ItemInputWrapper,
  ItemInput,
  CloseButton,
  LabelInputWrapper,
  ItemTextArea,
  ImageUploadArea,
  ButtonWrapper,
  CancelButton,
} from "./styles"; // Estilos da pasta components/Popup/styles.js

const PopupAddItem = ({ onClose }) => (
  <>
    <Overlay onClick={onClose} />
    <PopupWrapper>
      <h2>Adicionar novo item:</h2>
      <ItemInputWrapper>
        {['Nome do item', 'Fornecedor', 'Dimensão', 'Valor unitário'].map((label, idx) => (
          <LabelInputWrapper key={idx}>
            {label}
            <ItemInput type="text" />
          </LabelInputWrapper>
        ))}
        <LabelInputWrapper style={{ width: "48%" }}>
          Descrição
          <ItemTextArea />
        </LabelInputWrapper>
        <LabelInputWrapper style={{ width: "48%" }}>
          Imagem
          <ImageUploadArea>
            Adicionar imagem ao produto
            <Icon icon="mdi:image-outline" style={{ marginTop: 8, fontSize: 24, opacity: 0.8 }} />
          </ImageUploadArea>
        </LabelInputWrapper>
      </ItemInputWrapper>
      <ButtonWrapper>
        <CancelButton onClick={onClose}>Cancelar</CancelButton>
        <CloseButton onClick={onClose}>Adicionar</CloseButton>
      </ButtonWrapper>
    </PopupWrapper>
  </>
);

export default PopupAddItem;
