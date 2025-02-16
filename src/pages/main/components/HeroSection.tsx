import React from "react";
import styled from "styled-components";

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <Title>
        스타일 고민, <br />
        나와 잘 맞는 디자이너는 <Highlight>없을까?</Highlight>
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
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary[500]}; /* 보라색 강조 */
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
`;
export default HeroSection;
