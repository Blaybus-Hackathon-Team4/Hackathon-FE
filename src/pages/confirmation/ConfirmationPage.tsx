import React from "react";
import styled from "styled-components";
import CompleteHeader from "./components/CompleteHeader";
import SuccessMessage from "./components/SuccessMessage";
import ReservationInfo from "./components/ReservationInfo";
import UserInfo from "./components/UserInfo";
import ButtonGroup from "./components/ButtonGroup";

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 24px;
`;

const ConfirmationPage: React.FC = () => {
  return (
    <Container>
      <CompleteHeader />
      <SuccessMessage />
      <ReservationInfo />
      <UserInfo />
      <ButtonGroup />
    </Container>
  );
};

export default ConfirmationPage;
