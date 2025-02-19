import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import cutIcon from "../../../assets/icons/main-cut-icon.svg";
import dyeingIcon from "../../../assets/icons/main-dyeing-icon.svg";
import magicIcon from "../../../assets/icons/main-magic-icon.svg";
import permIcon from "../../../assets/icons/main-perm-icon.svg";

const categories = [
  { name: "커트", imgLink: cutIcon, field: "커트" },
  { name: "펌", imgLink: permIcon, field: "펌" },
  { name: "매직", imgLink: magicIcon, field: "매직" },
  { name: "탈염색", imgLink: dyeingIcon, field: "탈염색" },
];


const CategoryTabs: React.FC = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (field: string) => {
    navigate("/designer-list", { state: { field } });
  };

  return (
    <TabsContainer>
      {categories.map((category) => (
        <Tab key={category.name} onClick={() => handleCategoryClick(category.field)}>
          <TabImg src={category.imgLink} alt={category.name} />
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
