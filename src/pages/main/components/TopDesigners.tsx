import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TrendingStyle1 from "../../../assets/images/TrendingStyle1.png";

import designer2 from "../../../assets/images/designer1.jpg";

import designer3 from "../../../assets/images/designer3.jpg";
import { api } from "../../../api/api";
import { useNavigate } from "react-router";

export type DesignerType = {
  designerId: number; // 디자이너 고유 ID
  name: string;
  profilePhoto: string | null; // 프로필 사진 (없을 경우 null)
  field: string; // 전문 분야 (ex: "펌")
  location: string; // 위치 (ex: "성수/건대")
  offPrice: number; // 오프라인 가격
  onPrice: number; // 온라인 가격
  isOnline: boolean; // 온라인 서비스 여부
  isOffline: boolean; // 오프라인 서비스 여부
  rating: number; // 평점 (ex: 60 → 6.0점)
  text: string; // 디자이너 소개 텍스트
};

const TopDesigners: React.FC = () => {
  const navigate = useNavigate();
  const [designers, setDesigners] = useState<DesignerType[]>([]);
  const [tags, setTages] = useState<string[]>(["파마", "대면", "비대면"]);
  setTages(["파마", "대면", "비대면"]);

  useEffect(() => {
    getDesignerList();
  }, []);

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
      setDesigners(response.data.responseDto.slice(0, 3));
      return response.data;
    } catch (error) {
      console.error("Error fetching designer list:", error);
      throw error;
    }
  };

  return (
    <Container>
      <Title>2030이 많이 찾는 디자이너 TOP 3</Title>
      {designers.map((designer, index) => (
        <React.Fragment key={designer.name}>
          <DesignerCard onClick={() => navigate(`/designer-detail/${"1003"}`)}>
            <Rank>{index + 1}</Rank>
            <ProfileImage
              src={`/designer/${designer.profilePhoto}`}
              alt={designer.name}
            />
            <DesignerInfo>
              <Tags>
                {tags.map((tag, index) => (
                  <Tag key={tag} className={index === 0 ? "purple" : ""}>
                    {tag}
                  </Tag>
                ))}
              </Tags>
              <Name>{designer.name}</Name>
              <Description>{designer.text}</Description>
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

const Title = styled.h3`
  font-size: 18px;
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
  gap: 16px;
  padding: 12px 0;
`;

const Rank = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const ProfileImage = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  object-fit: cover;
`;

const DesignerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

const Name = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const Description = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[300]};
`;

const Tags = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
  .purple {
    background: ${({ theme }) => theme.colors.primary[50]};
    color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.colors.secondary[50]};
  color: ${({ theme }) => theme.colors.secondary[500]};
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
`;

const Divider = styled.div`
  height: 1px;
  background: #ddd;
  margin: 0 12px;
`;
