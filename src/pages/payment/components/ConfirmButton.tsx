import React from "react";
import styled from "styled-components";

const BottomContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: 480px;

  left: 50%;
  bottom: 0;
  transform: translateX(-50%); /* 중앙 정렬 */
  background-color: white;
  padding: 20px;
`;
const Button = styled.button`
  width: 100%;
  padding: 14px 24px;
  background: ${({ theme }) => theme.colors.primary[500]};
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

const ConfirmButton: React.FC = () => {
  return (
    <BottomContainer>
      <Button>동의하고 결제하기</Button>
    </BottomContainer>
  );
};

export default ConfirmButton;
