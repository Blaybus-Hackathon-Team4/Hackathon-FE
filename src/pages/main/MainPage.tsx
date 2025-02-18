import React from "react";
import styled from "styled-components";
import CategoryTabs from "./components/CategoryTabs";
import HeroSection from "./components/HeroSection";
import TopDesigners from "./components/TopDesigners";
import TrendingStyles from "./components/TrendingStyles";

const MainContainer = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MainPage: React.FC = () => {
  return (
    <MainContainer>
      <HeroSection />
      <CategoryTabs />
      <TopDesigners />
      <TrendingStyles />
    </MainContainer>
  );
};

export default MainPage;
