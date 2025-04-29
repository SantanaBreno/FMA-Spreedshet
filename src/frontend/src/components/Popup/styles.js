import styled from 'styled-components';

export const HiddenFileInput = styled.input`
  display: none;
`;

export const UploadedImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const PopupWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #151515;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 960px;
  height: 560px;
  text-align: center;

  h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 28px;
    font-weight: 300;
    margin-top: 12px;
    color: #D0D0D0;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ItemInputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
  margin: 40px 0 20px 40px;
  width: 100%;
`;

export const LabelInputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  width: 48%;
  font-size: 14px;
  color: #D0D0D0;
  opacity: 0.8;
  text-align: left;
  font-family: 'Inter', sans-serif;
  font-weight: 300;
`;

export const ItemInput = styled.input`
  width: 84%;
  height: 40px;
  color: #D0D0D0;
  background-color: #151515;
  border-radius: 8px;
  border: 1px #676767 solid;
  padding-left: 10px;
  margin-top: 4px;
`;

export const ItemTextArea = styled.textarea`
  width: 84%;
  height: 150px;
  background-color: #151515;
  border-radius: 8px;
  border: 1px #676767 solid;
  padding: 10px;
  color: #D0D0D0;
  resize: none;
  margin-top: 4px;
  font-family: 'Inter', sans-serif;
  opacity: 0.8;
`;

export const ImageUploadArea = styled.div`
  width: 84%;
  height: 150px;
  border: 1px solid #676767;
  border-radius: 8px;
  background-color: #151515;
  color: #D0D0D0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
  margin-top: 4px;
  font-family: 'Inter', sans-serif;
  opacity: 0.8;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: 40px;
  width: 100%;
  justify-content: center;
`;

export const CancelButton = styled.button`
  width: 16%;
  height: 32px;
  background-color: #151515;
  border: 1px solid red;
  color: white;
  opacity: 0.9;
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: red;
    color: white;
    opacity: 1.0;
  }
`;

export const CloseButton = styled.button`
  width: 16%;
  height: 32px;
  background-color: #151515;
  border: 1px solid #676767;
  color: white;
  opacity: 0.9;
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #23CF5C;
    color: black;
    opacity: 1.0;
  }
`;
