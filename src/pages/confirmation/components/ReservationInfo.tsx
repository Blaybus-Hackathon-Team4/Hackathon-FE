import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: ${({ theme }) => theme.colors.gray[100]};
  padding: 16px;
  border-radius: 12px;
  text-align: left;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 4px 0;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const ReservationInfo: React.FC = () => {
  return (
    <Card>
      <InfoRow>
        <BoldText>25.02.12(수) 오후 12:00</BoldText>
        <span style={{ color: "#8D4FD6", fontWeight: "bold" }}>결제완료</span>
      </InfoRow>
      <InfoRow>
        <span>디자이너</span>
        <BoldText>이초 디자이너</BoldText>
      </InfoRow>
      <InfoRow>
        <span>가격</span>
        <BoldText>20,000원</BoldText>
      </InfoRow>
      <InfoRow>
        <span>비대면</span>
        <a
          href="https://meet.google.com/dad-seuh-ykm"
          target="_blank"
          rel="noopener noreferrer"
        >
          구글 미트 링크
        </a>
      </InfoRow>
    </Card>
  );
};

export default ReservationInfo;
