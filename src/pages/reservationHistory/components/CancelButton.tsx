import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { useModalStore } from "../../../zustand/modal.store";
import CancelModal from "../components/CancelModal";

interface CancelButtonProps {
  paymentId: string;
  // onClick?: () => void;
}

const CancelButton: React.FC<CancelButtonProps> = ({ paymentId }) => {
  const { openModal } = useModalStore();

  return (
    <Button onClick={() => openModal(<CancelModal paymentId={paymentId} />)}> {/* ✅ 모달 열기 */}
      예약 취소
    </Button>
  );
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
