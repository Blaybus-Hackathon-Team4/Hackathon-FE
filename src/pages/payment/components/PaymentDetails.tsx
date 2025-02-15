import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  padding: 16px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

const PaymentDetails: React.FC = () => {
  return (
    <Card>
      <Title>결제 정보</Title>
      <Row>
        <span>대면 컨설팅</span>
        <strong>40,000원</strong>
      </Row>
      <Row>
        <span>결제 금액</span>
        <strong>40,000원</strong>
      </Row>
    </Card>
  );
};

export default PaymentDetails;
