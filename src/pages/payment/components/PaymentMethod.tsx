import React, { useState } from "react";
import styled from "styled-components"; // 계좌이체 아이콘 (react-icons 사용)

import KaKaoPayIcon from "../../../assets/icons/kakaopay-icon.svg";
import KaKaoPayGrayIcon from "../../../assets/icons/kakaopay-gray-icon.svg";
import BankGrayIcon from "../../../assets/icons/bank-gray-icon.svg";
import BankPurpleIcon from "../../../assets/icons/bank-purple-icon.svg";

const PaymentMethod: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<"kakao" | "bank">(
    "kakao"
  );

  return (
    <Card>
      <Title>결제 수단</Title>
      <ButtonGroup>
        {/* 카카오페이 버튼 */}
        <PaymentButton
          selected={selectedMethod === "kakao"}
          onClick={() => setSelectedMethod("kakao")}
        >
          <KakaoPayLogo
            src={selectedMethod === "kakao" ? KaKaoPayIcon : KaKaoPayGrayIcon}
            alt="Kakao Pay"
          />
          카카오페이
        </PaymentButton>

        {/* 계좌이체 버튼 */}
        <PaymentButton
          selected={selectedMethod === "bank"}
          onClick={() => setSelectedMethod("bank")}
        >
          <Icon
            src={selectedMethod === "bank" ? BankPurpleIcon : BankGrayIcon}
            alt="계좌이체"
          />
          계좌이체
        </PaymentButton>
      </ButtonGroup>
    </Card>
  );
};

export default PaymentMethod;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

const PaymentButton = styled.button<{ selected: boolean }>`
  flex: 1;
  width: 145px;
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ selected, theme }) =>
    selected
      ? theme.colors.primary[50]
      : theme.colors.white}; // 선택되면 연한 보라색, 아니면 흰색
  border: 1px solid
    ${({ selected, theme }) =>
      selected
        ? theme.colors.primary[500]
        : theme.colors.gray[200]}; // 선택되면 보라색 테두리
  border-radius: 12px;
  font-size: 14px;
  font-weight: ${({ selected }) => (selected ? "bold" : "")};
  color: ${({ selected, theme }) =>
    selected
      ? theme.colors.primary[500]
      : theme.colors.gray[500]}; // 선택되면 보라색 글씨
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${({ selected, theme }) =>
      selected ? theme.colors.primary[50] : theme.colors.gray[50]};
  }
`;

const KakaoPayLogo = styled.img`
  width: 50px;
  height: auto;
`;

const Icon = styled.img`
  width: 26px;
  height: auto;
`;
