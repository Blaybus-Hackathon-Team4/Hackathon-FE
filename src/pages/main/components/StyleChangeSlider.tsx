import React from "react";
import styled from "styled-components";

import beforeAfter from "../../../assets/images/before-after.png";

const StyleChangeSlider: React.FC = () => {
  return (
    <Container>
      <Title>비포&애프터로 보는 스타일 변화</Title>
      <ScrollContainer>
        <ImageCard>
          <Image src={beforeAfter} alt="Before" />
        </ImageCard>
        <ImageCard>
          <Image src={beforeAfter} alt="Before" />
        </ImageCard>
        <ImageCard>
          <Image src={beforeAfter} alt="Before" />
        </ImageCard>
      </ScrollContainer>
    </Container>
  );
};

export default StyleChangeSlider;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 30px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

const ScrollContainer = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto; /* 가로 스크롤 가능 */
  padding-bottom: 10px; /* 스크롤바 영역 확보 */

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ImageCard = styled.div`
  flex: 0 0 auto;
  width: 340px; /* 이미지 크기 */
  border-radius: 12px;
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;
