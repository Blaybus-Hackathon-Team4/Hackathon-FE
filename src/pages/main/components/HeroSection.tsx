import React from "react";
import styled from "styled-components";

import heroImage from "../../../assets/images/main-hero-image.png";

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <Title>
        완벽한 스타일링을 위한 첫걸음!
        <br />
        나에게 맞는 디자이너 추천
      </Title>
      <RecommendButton>디자이너 추천받기</RecommendButton>
    </HeroContainer>
  );
};
const HeroContainer = styled.div`
  width: 100%;
  height: 360px;
  padding: 24px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  position: relative;

  background-image: url(${heroImage}); /* 배경 이미지 추가 */
  background-size: cover; /* 배경 이미지가 컨테이너를 덮도록 설정 */
  background-position: center; /* 배경 이미지를 중앙 정렬 */
  background-repeat: no-repeat; /* 배경 이미지 반복 방지 */
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  font-family: "HSSanTokki20-Regular";
`;

const RecommendButton = styled.button`
  margin-top: 12px;
  padding: 12px 20px;
  background-color: white;
  color: black;
  border-radius: 24px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[50]};
  }
`;
export default HeroSection;
