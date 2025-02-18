import React from "react";
import styled from "styled-components";

import logo from "../../../assets/logos/logo.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 96px;
  }
`;
