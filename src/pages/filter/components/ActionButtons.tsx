import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface ActionButtonsProps {
  onApply: () => void;
  onReset: () => void;
  isFilterApplied: boolean;
}

const ActionButtons = ({ onApply, onReset, isFilterApplied }: ActionButtonsProps) => {
  return (
    <ButtonContainer>
      <ResetButton onClick={onReset}>선택 초기화</ResetButton>
      <ApplyButton onClick={onApply} isFilterApplied={isFilterApplied}>
        적용하기
      </ApplyButton>
    </ButtonContainer>
  );
};

export default ActionButtons;

const ButtonContainer = styled.div`
  display: flex;
  justfity-content: spcae-between //버튼 가로 정렬
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  margin-top: 20px;
`;

const ResetButton = styled.button`
  width: 80px;
  height: 30px;
  border: none;
  background: none;
  font-size: 14px;
  cursor: pointer;
  color: ${theme.colors.gray[300]};
`;

const ApplyButton = styled.button<{ isFilterApplied: boolean }>`
  width: 261px;
  height: 48px;
  border-radius: 10px;
  border: none;
  background-color: ${(props) =>
    props.isFilterApplied ? theme.colors.primary[500] : theme.colors.gray[100]};
  color: ${(props) =>
    props.isFilterApplied ? theme.colors.white : theme.colors.gray[300]};
  font-size: 14px;
  font-weight: bold;
  cursor: ${(props) => (props.isFilterApplied ? "pointer" : "default")};
  transition: background-color 0.2s ease;
`;