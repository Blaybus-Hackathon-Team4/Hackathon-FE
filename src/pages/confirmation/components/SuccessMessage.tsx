import React from "react";
import styled from "styled-components";

import CheckIcon from "../../../assets/icons/check-purple-icon.svg";
const Container = styled.div`
  text-align: center;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary[100]};
  color: ${({ theme }) => theme.colors.primary[500]};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 0 auto;
`;

const SuccessText = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const SubText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const HighlightLink = styled.span`
  color: ${({ theme }) => theme.colors.primary[500]};
  font-weight: bold;
  cursor: pointer;
`;
const Icon = styled.img``;

const SuccessMessage: React.FC = () => {
  return (
    <Container>
      <IconWrapper>
        <Icon src={CheckIcon} alt="확인이미지" />
      </IconWrapper>
      <SuccessText>예약이 완료되었습니다</SuccessText>
      <SubText>
        구글 미트 링크 및 방문 장소는 <HighlightLink>내 예약</HighlightLink>
        에서도 확인할 수 있습니다.
      </SubText>
    </Container>
  );
};

export default SuccessMessage;
