import React from "react";
import styled from "styled-components";
import CompleteHeader from "./components/CompleteHeader";
import ReservationInfo from "./components/ReservationInfo";
import ButtonGroup from "./components/ButtonGroup";
import { useLocation, useParams } from "react-router";
import SuccessMessageKakaoPay from "./components/SuccessMessageKakaoPay";
import SuccessMessageBankTransfer from "./components/SuccessMessageBankTransfer";
import { ISelectedInfo } from "../payment/PaymentPage";

const ConfirmationPage: React.FC = () => {
  const { method } = useParams();
  const location = useLocation();
  const selectedInfo: ISelectedInfo = { ...location.state };
  console.log(selectedInfo);

  return (
    <Container>
      <CompleteHeader />
      {method === "kakaopay" && <SuccessMessageKakaoPay />}
      {method === "bank" && <SuccessMessageBankTransfer />}
      <ReservationInfo selectedInfo={selectedInfo} />

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
