import styled from "styled-components";
//import DummyProfile from "../../assets/icons/image_designer.svg";
import DesignerCard from "./components/DesignerCard";
import Divider from "./components/Divider";
import FilterButton from "./components/FilterButton";
import { useNavigate, useLocation } from "react-router-dom";
import { api } from "../../api/api";
import React, { useEffect, useState } from "react";

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

const DesignerListPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const field = location.state?.field || null
  console.log(field, location)
  const filters = ["지역", "가격대", "상담방식", "전문 분야"];
  const [designers, setDesignerss] = useState<DesignerType[]>([]);

  useEffect(() => {
      getDesignerList();
    }, []);

  const getDesignerList = async () => {
      try {
        const response = await api.post("/designer/readDesignerList", {
          location: null, // 지역구(건대/성수 <= 이런식으로 요청 가능)
          field: field, // 전문 분야 (4가지 중 1개, 추가 필요시 요청)
          isOnline: true, // 비대면 찾고 싶으면 true
          isOffline: true, // 대면 찾고 싶으면 true
          minPrice: null, // 최소 금액 null 가능
          maxPrice: null, // 최대 금액 => 최소 금액이 최대 금액보다 큰 경우 오류 반환됨 null 가능
        });
        setDesignerss(response.data.responseDto);
        return response.data;
      } catch (error) {
        console.error("Error fetching designer list:", error);
        throw error;
      }
    };


  const handleDesignerClick = (designerId: number) => {
    navigate(`/designer-detail/${designerId}`);
  };

  return (
    <Container>
      {/* 필터 버튼 영역 */}
      <FilterContainer>
        {filters.map((filter, index) => (
          <FilterButton key={index} label={filter} />
        ))}
      </FilterContainer>

      {/* 디자이너 리스트 */}
      <DesignerList>
        {designers.map((designer, index) => (
          <div
            key={designer.designerId}
            onClick={() => handleDesignerClick(designer.designerId)}
          >
            <DesignerCard {...designer} />
            {index !== designers.length - 1 && <Divider />}
          </div>
        ))}
      </DesignerList>
    </Container>
  );
};

export default DesignerListPage;

// 스타일 정의
const Container = styled.div`
  padding: 16px;
`;

const FilterContainer = styled.div`
  // position: fixed;
  // top: 0;
  // left: 0;
  // width: 100vw;
  // max-width: 480px;
  display: flex;
  justify-content: space-between; //버튼들이 화면 가로 너비에 맞게 보여지도록
  gap: 8px;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 20px; //버튼 많
  background: white;

  /* 스크롤바 숨기기 (필요 시) */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const DesignerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
