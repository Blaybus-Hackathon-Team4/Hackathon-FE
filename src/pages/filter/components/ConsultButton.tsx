import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface ConsultButtonProps {
  type: "대면" | "비대면";
  isSelected: boolean;
  onClick: () => void;
}

const ConsultButton = ({ type, isSelected, onClick }: ConsultButtonProps) => {
    const imageSrc = isSelected
      ? type === "대면"
        ? "/inperson-selected.svg"
        : "/untact-selected.svg"
      : type === "대면"
      ? "/inperson.svg"
      : "/untact.svg";
  
    return (
        <StyledButton isSelected={isSelected} onClick={onClick}>
          <IconWrapper>
            <Icon src={imageSrc} alt={type} />
          </IconWrapper>
          <Text isSelected={isSelected}>{type}</Text>
        </StyledButton>
    );
};

export default ConsultButton;

const StyledButton = styled.button<{ isSelected: boolean }>`
  width: 167px;
  height: 175px;
  border: 1px solid ${(props) => (props.isSelected ? theme.colors.primary[500] : theme.colors.gray[300])};
  background-color: ${(props) => (props.isSelected ? theme.colors.primary[50] : "white")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  gap: 10px;
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
`;

const Icon = styled.img`
  width: 108px;
  height: 112px;
  margin-bottom: 10px;
  margin-left: 5px;
`;

const Text = styled.span<{ isSelected: boolean }>`
  position: absolute;
  bottom: 10px;
  color: ${(props) => (props.isSelected ? theme.colors.primary[500] : theme.colors.gray[300])};
  font-weight: ${(props) => (props.isSelected ? "bold" : "medium")};
  font-size: 14px;
`;