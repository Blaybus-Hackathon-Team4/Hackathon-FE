import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
  position: relative;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 18px;
  border: none;
  background: none;
  cursor: pointer;
`;

const CompleteHeader: React.FC = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      예약 완료
      <CloseButton onClick={() => navigate("/")}>✕</CloseButton>
    </HeaderContainer>
  );
};

export default CompleteHeader;
