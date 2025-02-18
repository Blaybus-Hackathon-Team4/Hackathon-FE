import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { useModalStore } from "../../../zustand/modal.store";

interface CancelButtonProps {
  onClick?: () => void;
}

const CancelButton: React.FC<CancelButtonProps> = ({ onClick }) => {
  const { openCancelModal } = useModalStore();

  return <Button onClick={onClick || openCancelModal}>예약 취소</Button>;
};

export default CancelButton;

const Button = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid ${theme.colors.gray[300]};
  background: ${theme.colors.white};
  color: ${theme.colors.black};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.gray[50]};
  }
`;