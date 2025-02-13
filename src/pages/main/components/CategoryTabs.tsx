import React from "react";
import styled from "styled-components";

const categories = ["커트", "파마", "매직", "염색", "탈염색", "펌"];

const TabsContainer = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  white-space: nowrap;
  margin-bottom: 40px;
`;

const Tab = styled.button`
  cursor: pointer;
  border: none;
  background-color: #ffffff;
`;
const TabImg = styled.div`
  width: 72px;
  height: 72px;
  background-color: #f2f2f2;
  border-radius: 20px;
  cursor: pointer;
`;
const TabText = styled.span`
  font-size: 16px;
`;
const CategoryTabs: React.FC = () => {
  return (
    <TabsContainer>
      {categories.map((category) => (
        <Tab key={category}>
          <TabImg></TabImg>
          <TabText>{category}</TabText>
        </Tab>
      ))}
    </TabsContainer>
  );
};

export default CategoryTabs;
