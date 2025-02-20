import styled from "styled-components";

import { useNavigate } from "react-router";
import BackIcon from "../../../assets/icons/back.svg";
import { useReservationStore } from "../../../zustand/reservation.store";

const DetailHeader = () => {
  const { name, address } = useReservationStore();
  const navigate = useNavigate();

  return (
    <HeaderBar>
      <StSection>
        <img src={BackIcon} alt="back" onClick={() => navigate(-1)} />
        <StDiv>
          <StH1>{name}</StH1>
          <Stick></Stick>
          <StH3>{address}</StH3>
        </StDiv>
      </StSection>
    </HeaderBar>
  );
};

export default DetailHeader;

const HeaderBar = styled.header`
  height: 48px;
  padding: 12px 16px;
`;

const StSection = styled.section`
  display: flex;
  gap: 12px;
`;

const StDiv = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const StH1 = styled.h1`
  font-weight: bold;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray[900]};
`;

const StH3 = styled.h3`
  font-size: 16px;
  font-weight: medium;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const Stick = styled.div`
  height: 13px;
  border: 1px solid ${({ theme }) => theme.colors.gray[500]};
`;
