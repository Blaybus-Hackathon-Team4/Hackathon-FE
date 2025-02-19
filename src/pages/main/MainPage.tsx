import React from "react";
import styled from "styled-components";
import CategoryTabs from "./components/CategoryTabs";
import HeroSection from "./components/HeroSection";
import TopDesigners from "./components/TopDesigners";

import StyleChangeSlider from "./components/StyleChangeSlider";
import StyleRecommendation from "./components/StyleRecommendation.tsx";
import Header from "./components/Header.tsx";

const MainPage: React.FC = () => {
  return (
    <MainContainer>
      <Header />
      <HeroSection />
      <CategoryTabs />
      <TopDesigners />
      <StyleChangeSlider />
      <StyleRecommendation />
    </MainContainer>
  );
};

export default MainPage;

const MainContainer = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 10px 20px 20px 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
