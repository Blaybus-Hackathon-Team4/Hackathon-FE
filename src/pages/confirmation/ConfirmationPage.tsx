import React from "react";
import styled from "styled-components";
import CompleteHeader from "./components/CompleteHeader";
import ReservationInfo from "./components/ReservationInfo";
import ButtonGroup from "./components/ButtonGroup";
import { useParams } from "react-router";
import SuccessMessageKakaoPay from "./components/SuccessMessageKakaoPay";
import SuccessMessageBankTransfer from "./components/SuccessMessageBankTransfer";

const ConfirmationPage: React.FC = () => {
  const { method } = useParams();
  return (
    <Container>
      <CompleteHeader />
      {method === "kakaopay" && <SuccessMessageKakaoPay />}
      {method === "bank" && <SuccessMessageBankTransfer />}
      <ReservationInfo />

      <ButtonGroup />
    </Container>
  );
};

export default ConfirmationPage;

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  position: relative;
`;
