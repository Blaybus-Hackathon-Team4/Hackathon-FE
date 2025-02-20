import React from "react";
import styled from "styled-components";
import { useReservationStore } from "../../../zustand/reservation.store";

const PaymentDetails: React.FC = () => {
  const { process, price } = useReservationStore();

  return (
    <Card>
      <Title>결제 정보</Title>
      {process === "대면" ? (
        <Row>
          <span>대면 컨설팅</span>
          <span>{price}원</span>
        </Row>
      ) : (
        <Row>
          <span>비대면 컨설팅</span>
          <span>{price}원</span>
        </Row>
      )}

      <Divider></Divider>
      <Row>
        <strong>결제 금액</strong>
        <strong>{price}원</strong>
      </Row>
    </Card>
  );
};

export default PaymentDetails;

const Card = styled.div`
  background: white;
  padding: 24px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  padding: 12px 0;
`;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
