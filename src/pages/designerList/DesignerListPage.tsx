import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { api } from "../../api/api";
import DesignerCard from "./components/DesignerCard";
import Divider from "./components/Divider";
import FilterButton from "./components/FilterButton";

import { useFilterStore } from "../../zustand/filterStore";

interface Designer {
  designerId: number;
  profilePhoto: string | null;
  name?: string;
  field: string;
  location: string;
  offPrice: number;
  onPrice: number;
  isOnline: boolean;
  isOffline: boolean;
  rating: number;
  text: string;
}

const DesignerListPage = () => {
  const filters = ["지역", "가격대", "상담방식", "전문 분야"];
  const navigate = useNavigate();
  
  // ✅ Zustand에서 상태를 구독 (useFilterStore()를 직접 호출해야 상태 변경 감지 가능)
  const { location, field, isOnline, isOffline, minPrice, maxPrice } = useFilterStore();

  const [designers, setDesigners] = useState<Designer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getDesignerList = async () => {
    setLoading(true);
    setError(null);

    const requestData = {
      location,
      field,
      isOnline,
      isOffline,
      minPrice,
      maxPrice,
    };

    console.log("🔍 API 요청 데이터:", requestData);

    try {
      const response = await api.post("/designer/readDesignerList", requestData);

      if (response.status === 200) {
        setDesigners(response.data.responseDto);
      } else if (response.status === 403) {
        setError("권한이 없습니다. 로그인 후 다시 시도해주세요.");
      } else if (response.status === 500) {
        setError("서버 오류가 발생했습니다. 다시 시도해주세요.");
      } else {
        setError("알 수 없는 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("API 요청 실패:", error);
      setError("네트워크 오류가 발생했습니다.");
    } finally {
      setTimeout(() => setLoading(false), 500);
    }
  };

  useEffect(() => {
    getDesignerList();
  }, [location, field, isOnline, isOffline, minPrice, maxPrice]); // ✅ Zustand의 상태 변경을 감지하여 API 호출

  const handleDesignerClick = (designerId: number) => {
    navigate(`/designer-detail/${designerId}`);
  };

  return (
    <Container>
      <FilterContainer>
        {filters.map((filter, index) => (
          <FilterButton key={index} label={filter} />
        ))}
      </FilterContainer>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {loading ? (
        <p>로딩 중...</p>
      ) : (
        <DesignerList>
          {designers.length > 0 ? (
            designers.map((designer, index) => (
              <DesignerCardWrapper
                key={designer.designerId}
                onClick={() => handleDesignerClick(designer.designerId)}
              >
                <DesignerCard {...designer} name={designer.name ?? "이름 없음"} />
                {index !== designers.length - 1 && <Divider />}
              </DesignerCardWrapper>
            ))
          ) : (
            <p>디자이너가 없습니다.</p>
          )}
        </DesignerList>
      )}
    </Container>
  );
};

export default DesignerListPage;

// 스타일 정의
const DesignerCardWrapper = styled.div`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Container = styled.div`
  padding: 16px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const DesignerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  text-align: center;
  margin-top: 16px;
`;
