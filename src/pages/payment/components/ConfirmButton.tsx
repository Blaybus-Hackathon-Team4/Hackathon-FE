import React from "react";
import styled from "styled-components";
import { ISelectedInfo } from "../PaymentPage";

interface ConfirmButtonProps {
  selectedMethod: "KAKAO" | "BANK";
  selectedInfo: ISelectedInfo;
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({
  selectedInfo,
  selectedMethod,
}) => {
  const handlePayment = () => {
    if (selectedMethod === "BANK") {
      console.log("계좌 결제 진행");
    } else if (selectedMethod === "KAKAO") {
      console.log("카카오페이 결제 진행");
    }
  };

  return (
    <BottomContainer>
      <img src="../../assets/designer/1004.jpg" />
      <Button onClick={handlePayment}>동의하고 결제하기</Button>
    </BottomContainer>
  );
};

export default ConfirmButton;

const BottomContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: 480px;

  left: 50%;
  bottom: 0;
  transform: translateX(-50%); /* 중앙 정렬 */
  background-color: white;
  padding: 20px;
`;
const Button = styled.button`
  width: 100%;
  padding: 14px 24px;
  background: ${({ theme }) => theme.colors.primary[500]};
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;
