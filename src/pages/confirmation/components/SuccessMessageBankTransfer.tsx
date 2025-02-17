import React from "react";
import styled from "styled-components";

import CheckIcon from "../../../assets/icons/check-purple-icon.svg";
import { useNavigate } from "react-router";

const SuccessMessageBankTransfer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Icon src={CheckIcon} alt="확인이미지" />

      <SuccessText>예약이 완료되었습니다</SuccessText>
      <SubText>구글 미트 링크 및 방문 장소는</SubText>
      <SubText>
        <HighlightLink onClick={() => navigate("/reservation-history")}>
          내 예약
        </HighlightLink>
        에서도 확인할 수 있습니다
      </SubText>
    </Container>
  );
};

export default SuccessMessageBankTransfer;

const Container = styled.div`
  text-align: center;
  padding: 52px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SuccessText = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin: 12px 0;
`;

const SubText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[900]};
`;

const HighlightLink = styled.span`
  color: ${({ theme }) => theme.colors.primary[500]};

  cursor: pointer;
`;
const Icon = styled.img`
  width: 26px;
`;
