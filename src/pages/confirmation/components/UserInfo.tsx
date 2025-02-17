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

const UserInfo: React.FC = () => {
  return (
    <Card>
      <InfoRow>
        <span>이름</span>
        <BoldText>김서현</BoldText>
      </InfoRow>
      <InfoRow>
        <span>이메일</span>
        <BoldText>ksh123@gmail.com</BoldText>
      </InfoRow>
      <InfoRow>
        <span>결제 금액</span>
        <BoldText>20,000원</BoldText>
      </InfoRow>
    </Card>
  );
};

export default UserInfo;
