import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface FilterButtonProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

const FilterButton = ({ text, isSelected, onClick }: FilterButtonProps) => {
  return (
    <StyledButton isSelected={isSelected} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default FilterButton;

const StyledButton = styled.button<{ isSelected: boolean }>`
  padding: 5px 16px;
  border-radius: 30px;
  border: 1px solid
    ${(props) =>
      props.isSelected ? theme.colors.primary[500] : theme.colors.gray[300]};
  background-color: ${(props) =>
    props.isSelected ? theme.colors.primary[50] : "white"};
  color: ${(props) =>
    props.isSelected ? theme.colors.primary[500] : theme.colors.gray[300]};
  font-weight: ${(props) => (props.isSelected ? "bold" : "medium")};
  cursor: pointer;
  //transition: all 0.3s ease;
  font-size: 14px;
`;