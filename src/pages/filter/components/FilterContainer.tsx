import React from "react";
import styled from "styled-components";

interface FilterContainerProps {
  children: React.ReactNode;
}

const FilterContainer = ({ children }: FilterContainerProps) => {
  return <Container>{children}</Container>;
};

export default FilterContainer;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
`;