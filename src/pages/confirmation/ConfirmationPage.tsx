import React from "react";
import styled from "styled-components";
import CompleteHeader from "./components/CompleteHeader";
import SuccessMessage from "./components/SuccessMessage";
import ReservationInfo from "./components/ReservationInfo";
import ButtonGroup from "./components/ButtonGroup";

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  position: relative;
`;

const ConfirmationPage: React.FC = () => {
  return (
    <Container>
      <CompleteHeader />
      <SuccessMessage />
      <ReservationInfo />

      <ButtonGroup />
    </Container>
  );
};

export default ConfirmationPage;
