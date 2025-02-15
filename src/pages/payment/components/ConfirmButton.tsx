import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #8a4df3;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

const ConfirmButton: React.FC = () => {
  return <Button>동의하고 결제하기</Button>;
};

export default ConfirmButton;
