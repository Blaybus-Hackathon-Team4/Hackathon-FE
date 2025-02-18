import React from "react";
import styled from "styled-components";
import BackIcon from "../../../assets/icons/back-black-icon.svg";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 480px;
  font-size: 20px;
  font-weight: bold;
  padding: 12px 0;
`;

const BackButton = styled.button`
  position: absolute;
  left: 0px;
  background: none;
  border: none;
  font-size: 20px;

  cursor: pointer;
`;
const Icon = styled.img``;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <BackButton onClick={() => window.history.back()}>
        <Icon src={BackIcon} alt="back" />
      </BackButton>
      결제
    </HeaderContainer>
  );
};

export default Header;
