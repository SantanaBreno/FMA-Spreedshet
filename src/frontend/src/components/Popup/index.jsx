import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
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
  HiddenFileInput,
  UploadedImagePreview,
  ButtonWrapper,
  CancelButton,
} from "./styles";

const PopupAddItem = ({ onClose }) => {
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImagePreview(imageURL);
    }
  };

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) {
    console.error("Elemento #modal-root não encontrado. Adicione <div id='modal-root'></div> no index.html");
    return null;
  }

  return ReactDOM.createPortal(
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
            <ImageUploadArea onClick={handleImageClick}>
              {imagePreview ? (
                <UploadedImagePreview src={imagePreview} alt="Imagem selecionada" />
              ) : (
                <>
                  Adicionar imagem ao produto
                  <Icon icon="mdi:image-outline" style={{ marginTop: 8, fontSize: 24, opacity: 0.8 }} />
                </>
              )}
              <HiddenFileInput
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </ImageUploadArea>
          </LabelInputWrapper>
        </ItemInputWrapper>

        <ButtonWrapper>
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
          <CloseButton onClick={onClose}>Adicionar</CloseButton>
        </ButtonWrapper>
      </PopupWrapper>
    </>,
    modalRoot
  );
};

export default PopupAddItem;
