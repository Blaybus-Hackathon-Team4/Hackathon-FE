import React from "react";
import styled from "styled-components";
import CategoryTabs from "./components/CategoryTabs";
import HeroSection from "./components/HeroSection";
import TopDesigners from "./components/TopDesigners";
import { api } from "../../api/api";
import StyleChangeSlider from "./components/StyleChangeSlider";
import StyleRecommendation from "./components/StyleRecommendation.tsx";
import Header from "./components/Header.tsx";

const MainPage: React.FC = () => {
  // API 요청 함수
  const getDesignerList = async () => {
    try {
      const response = await api.post("/designer/readDesignerList", {
        location: null, // 지역구(건대/성수 <= 이런식으로 요청 가능)
        field: null, // 전문 분야 (4가지 중 1개, 추가 필요시 요청)
        isOnline: true, // 비대면 찾고 싶으면 true
        isOffline: true, // 대면 찾고 싶으면 true
        minPrice: null, // 최소 금액 null 가능
        maxPrice: null, // 최대 금액 => 최소 금액이 최대 금액보다 큰 경우 오류 반환됨 null 가능
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error fetching designer list:", error);
      throw error;
    }
  };
  getDesignerList();
  return (
    <MainContainer>
      <img src="/1004.jpg" />
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
