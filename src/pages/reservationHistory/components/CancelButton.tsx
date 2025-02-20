import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { useModalStore } from "../../../zustand/modal.store";
import CancelModal from "./CancelModal";

interface CancelButtonProps {
  onClick?: () => void;
}

const CancelButton: React.FC<CancelButtonProps> = ({ onClick }) => {
  const { openModal } = useModalStore();
  const { paymentId } = useParams<{ paymentId: string }>();

  // 여기서 Modal 컴포넌트를 정의하여 openModal에 전달
  const handleOpenModal = () => {
    const modalElement = <CancelModal paymentId={paymentId!} />;
    openModal(modalElement);
  };

  return <Button onClick={onClick || handleOpenModal}>예약 취소</Button>;
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
