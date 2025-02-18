import React, { useState } from "react";
import styled from "styled-components";
import hairstyle1 from "../../../assets/images/hairstyle1.png";
import hairstyle2 from "../../../assets/images/hairstyle2.png";

type FaceShapeType = "갸름한 얼굴형" | "둥근 얼굴형" | "긴 얼굴형";
const faceShapes: FaceShapeType[] = [
  "갸름한 얼굴형",
  "둥근 얼굴형",
  "긴 얼굴형",
];

const styleRecommendations = {
  "갸름한 얼굴형": [
    { id: 1, imgSrc: hairstyle1, tags: ["#탈염색", "#코토리베이지"] },
    { id: 2, imgSrc: hairstyle2, tags: ["#레이어드컷", "#S컬"] },
    { id: 3, imgSrc: hairstyle2, tags: ["#레이어드컷", "#S컬"] },
  ],
  "둥근 얼굴형": [
    { id: 3, imgSrc: hairstyle2, tags: ["#단발머리", "#C컬펌"] },
    { id: 4, imgSrc: hairstyle1, tags: ["#허쉬컷", "#볼륨펌"] },
    { id: 3, imgSrc: hairstyle2, tags: ["#레이어드컷", "#S컬"] },
  ],
  "긴 얼굴형": [
    { id: 5, imgSrc: hairstyle1, tags: ["#긴머리", "#웨이브펌"] },
    { id: 6, imgSrc: hairstyle2, tags: ["#앞머리", "#볼륨매직"] },
    { id: 3, imgSrc: hairstyle2, tags: ["#레이어드컷", "#S컬"] },
  ],
};

const StyleRecommendation: React.FC = () => {
  const [selectedShape, setSelectedShape] =
    useState<keyof typeof styleRecommendations>("갸름한 얼굴형");
  return (
    <Container>
      <Title>당신을 위한 스타일 추천</Title>
      <ButtonGroup>
        {faceShapes.map((shape) => (
          <ShapeButton
            key={shape}
            selected={selectedShape === shape}
            onClick={() => setSelectedShape(shape)}
          >
            {shape}
          </ShapeButton>
        ))}
      </ButtonGroup>
      <ScrollContainer>
        {styleRecommendations[selectedShape].map((style) => (
          <ImageCard key={style.id}>
            <Image src={style.imgSrc} alt="Style" />
            <TagContainer>
              {style.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagContainer>
          </ImageCard>
        ))}
      </ScrollContainer>
    </Container>
  );
};

export default StyleRecommendation;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 30px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const ShapeButton = styled.button<{ selected: boolean }>`
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  border: 1px solid
    ${({ selected, theme }) =>
      selected ? theme.colors.primary[500] : theme.colors.gray[200]};
  background: ${({ selected, theme }) =>
    selected ? theme.colors.primary[50] : "white"};
  color: ${({ selected, theme }) =>
    selected ? theme.colors.primary[500] : theme.colors.gray[200]};
  transition: 0.2s;
  &:hover {
    background: ${({ selected, theme }) =>
      selected ? theme.colors.primary[50] : theme.colors.gray[50]};
  }
`;

const ScrollContainer = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ImageCard = styled.div`
  flex: 0 0 auto;
  width: 166px;
  height: 166px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 6px;
`;

const Tag = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[300]};
`;
