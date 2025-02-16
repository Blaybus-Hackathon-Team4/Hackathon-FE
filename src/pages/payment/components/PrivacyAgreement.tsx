import React, { useState } from "react";
import styled from "styled-components";

import Arrowicon from "../../../assets/icons/bottom-arrow-gray.svg";

const PrivacyAgreement: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Card>
      <Title>개인정보 수집, 제공</Title>
      <AccordionContainer>
        <AccordionItem>
          <AccordionHeader
            onClick={() => toggleAccordion(0)}
            className="divider"
          >
            개인정보 수집 및 이용 안내
            {<ArrowIcon src={Arrowicon} selected={openIndex === 0} />}
          </AccordionHeader>
          <AccordionContent isOpen={openIndex === 0}>
            예약 서비스 제공을 위해 최소한의 개인정보가 수집됩니다.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader onClick={() => toggleAccordion(1)}>
            개인정보 제3자 제공 동의
            {<ArrowIcon src={Arrowicon} selected={openIndex === 1} />}
          </AccordionHeader>
          <AccordionContent isOpen={openIndex === 1}>
            결제 및 서비스 제공을 위해 제3자에게 개인정보가 제공될 수 있습니다.
          </AccordionContent>
        </AccordionItem>
      </AccordionContainer>
      <NoticeText>
        예약 서비스 이용을 위한 개인정보 수집 및 제3자 제공, 취소/환불 규정을
        확인하였으며 이에 동의합니다.
      </NoticeText>
    </Card>
  );
};

export default PrivacyAgreement;

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
  margin-bottom: 16px;
`;
const AccordionContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  border-radius: 8px;
`;

const AccordionItem = styled.div`
  display: flex;
  flex-direction: column;
  .divider {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  }
`;

const AccordionHeader = styled.button`
  width: 100%;
  background: none;
  padding: 16px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  cursor: pointer;
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")}; // 열릴 때 최대 높이
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  padding: ${({ isOpen }) => (isOpen ? "12px" : "0")} 12px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[600]};
  background: ${({ theme }) => theme.colors.gray[50]};
`;
const NoticeText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const ArrowIcon = styled.img<{ selected: boolean }>`
  transform: ${({ selected }) => (selected ? "rotate(180deg)" : "")};
  transition: all 0.2s ease-in-out;
`;
