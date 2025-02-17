import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import XIcon from "../../../assets/icons/x-black-icon.svg";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 480px;
  font-size: 20px;
  font-weight: bold;
  padding: 12px 16px;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

const Icon = styled.img``;

const CompleteHeader: React.FC = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      예약 완료
      <CloseButton onClick={() => navigate("/")}>
        <Icon src={XIcon} alt="home" />
      </CloseButton>
    </HeaderContainer>
  );
};

export default CompleteHeader;
