import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 60px;
`;

const Button = styled.button<{ primary?: boolean }>`
  flex: 1;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary[500]};
  background: ${({ primary, theme }) =>
    primary ? theme.colors.primary[500] : theme.colors.white};
  color: ${({ primary, theme }) =>
    primary ? theme.colors.white : theme.colors.primary[500]};
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: ${({ primary, theme }) =>
      primary ? theme.colors.primary[500] : theme.colors.gray[50]};
  }
`;

const ButtonGroup: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Button onClick={() => navigate("/")}>메인으로</Button>
      <Button primary onClick={() => navigate("/reservation")}>
        예약조회
      </Button>
    </Container>
  );
};

export default ButtonGroup;
