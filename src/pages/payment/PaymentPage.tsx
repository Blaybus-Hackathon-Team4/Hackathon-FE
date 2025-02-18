import React from "react";
import styled from "styled-components";
import ReservationInfo from "./components/ReservationInfo";
import UserInfo from "./components/UserInfo";
import PaymentDetails from "./components/PaymentDetails";
import PaymentMethod from "./components/PaymentMethod";
import PrivacyAgreement from "./components/PrivacyAgreement";
import ConfirmButton from "./components/ConfirmButton";
import Header from "./components/Header";

const PaymentPage: React.FC = () => {
  return (
    <Container>
      <Header />
      <ReservationInfo />
      <UserInfo />
      <PaymentDetails />
      <PaymentMethod />
      <PrivacyAgreement />
      <ConfirmButton />
    </Container>
  );
};

export default PaymentPage;

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  padding: 20px 20px 70px 20px;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
`;
