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
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
