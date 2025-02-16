import React from "react";
import styled from "styled-components";
import TrendingStyle1 from "../../../assets/images/TrendingStyle1.png";
import TrendingStyle2 from "../../../assets/images/TrendingStyle2.png";

const styles = [
  { src: TrendingStyle1, alt: "레이어드컷" },
  { src: TrendingStyle2, alt: "히피펌" },
  { src: TrendingStyle2, alt: "히피펌" },
];

const TrendingStyles: React.FC = () => {
  return (
    <Container>
      <Title>🔥 이런 스타일, 요즘 핫해요!</Title>
      <ImageList>
        {styles.map((style, index) => (
          <ImageItem key={index}>
            <Image src={style.src} alt={style.alt} />
            <ImageDescription>#레이어드펌</ImageDescription>
          </ImageItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default TrendingStyles;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ImageList = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
`;

const ImageItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const Image = styled.img``;
const ImageDescription = styled.span`
  font-size: 14px;
  color: #c0c0c0;
`;
