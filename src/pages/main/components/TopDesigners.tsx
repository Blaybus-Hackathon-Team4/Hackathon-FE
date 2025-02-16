import React from "react";
import styled from "styled-components";
import TrendingStyle1 from "../../../assets/images/TrendingStyle1.png";

const designers = [
  {
    rank: 1,
    name: "이초 디자이너",
    desc: "레드벨벳, 잇지가 방문하는 샵",
    tags: ["파마", "대면", "비대면"],
    img: TrendingStyle1,
  },
  {
    rank: 2,
    name: "로운 원장",
    desc: "화이트 베이지 브라운 전문",
    tags: ["탈염색", "대면", "비대면"],
    img: TrendingStyle1,
  },
  {
    rank: 3,
    name: "로운 원장",
    desc: "화이트 베이지 브라운 전문",
    tags: ["탈염색", "대면", "비대면"],
    img: TrendingStyle1,
  },
];

const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const DesignerCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
`;

const Rank = styled.div`
  width: 30px;
  height: 30px;
  background: #eaeaea;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const ProfileImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
`;

const DesignerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const Description = styled.span`
  font-size: 12px;
  color: #b6b6b6;
`;

const Tags = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 4px;
  .purple {
    background: ${({ theme }) => theme.colors.primary[50]};
    color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

const Tag = styled.span`
  background: #eaeaea;
  color: gray;
  padding: 2px 12px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
`;

const Divider = styled.div`
  height: 1px;
  background: #ddd;
  margin: 0 12px;
`;
const TopDesigners: React.FC = () => {
  return (
    <Container>
      <Title>2030이 많이 찾는 디자이너 TOP 3</Title>
      {designers.map((designer, index) => (
        <React.Fragment key={designer.rank}>
          <DesignerCard>
            <Rank>{designer.rank}</Rank>
            <ProfileImage src={designer.img} alt={designer.name} />
            <DesignerInfo>
              <Name>{designer.name}</Name>
              <Description>{designer.desc}</Description>
              <Tags>
                {designer.tags.map((tag, index) => (
                  <Tag key={tag} className={index === 0 ? "purple" : ""}>
                    {tag}
                  </Tag>
                ))}
              </Tags>
            </DesignerInfo>
          </DesignerCard>
          {index !== designers.length - 1 && <Divider />}{" "}
          {/* 마지막 요소가 아니면 구분선 추가 */}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default TopDesigners;
