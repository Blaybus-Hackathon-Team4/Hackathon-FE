import React from "react";
import styled from "styled-components";

import cutIcon from "../../../assets/icons/main-cut-icon.svg";
import dyeingIcon from "../../../assets/icons/main-dyeing-icon.svg";
import magicIcon from "../../../assets/icons/main-magic-icon.svg";
import permIcon from "../../../assets/icons/main-perm-icon.svg";

const categories = [
  { name: "커트", imgLink: cutIcon },
  { name: "펌", imgLink: permIcon },
  { name: "매직", imgLink: magicIcon },
  { name: "탈염색", imgLink: dyeingIcon },
];

const CategoryTabs: React.FC = () => {
  return (
    <TabsContainer>
      {categories.map((category) => (
        <Tab key={category.name}>
          <TabImg src={category.imgLink} alt={category.name}></TabImg>
          <TabText>{category.name}</TabText>
        </Tab>
      ))}
    </TabsContainer>
  );
};

export default CategoryTabs;

const TabsContainer = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  white-space: nowrap;
  margin-bottom: 40px;
  align-items: center;
  justify-content: space-around;
`;

const Tab = styled.button`
  cursor: pointer;
  border: none;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.gray[900]};
`;
const TabImg = styled.img`
  width: 64px;
  height: 64px;
  cursor: pointer;
`;
const TabText = styled.span`
  font-size: 14px;
`;
