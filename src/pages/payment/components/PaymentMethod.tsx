import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  flex: 1;
  padding: 12px;
  background: #f5f5f5;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
`;

const PaymentMethod: React.FC = () => {
  return (
    <Card>
      <Title>결제 수단</Title>
      <ButtonGroup>
        <Button>카카오페이</Button>
        <Button>계좌이체</Button>
      </ButtonGroup>
    </Card>
  );
};

export default PaymentMethod;
