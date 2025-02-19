import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { api } from "../../api/api.ts";
import DesignerCard from "./components/DesignerCard";
import Divider from "./components/Divider";
import FilterButton from "./components/FilterButton";


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

const filters = ["지역", "가격대", "상담방식", "전문 분야"];

const DesignerListPage = () => {
  const [designers, setDesigners] = useState<Designer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // 에러 메시지 상태 추가
  const navigate = useNavigate(); // useNavigate 훅 추가


  const getDesignerList = async () => {
    setLoading(true);
    setError(null); // 새로운 요청 전에 에러 초기화

    try {
      const response = await api.post<{ responseDto: Designer[]; status: number; message: string }>(
        "/designer/readDesignerList",
        {
          location: "성수/건대",
          field: undefined,
          isOnline: true,
          isOffline: true,
          minPrice: null,
          maxPrice: null,
        }
      );

      // 응답 상태 처리
      if (response.status === 200) {
        setDesigners(response.data.responseDto);
      } else if (response.status === 403) {
        setError("권한이 없습니다. 로그인 후 다시 시도해주세요.");
      } else if (response.status === 500) {
        setError("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      } else {
        setError("알 수 없는 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("디자이너 목록 조회 실패:", error);
      setError("네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.");
    } finally {
      setTimeout(() => setLoading(false), 500); // UX 개선 (최소 500ms 로딩)
    }
  };

  useEffect(() => {
    getDesignerList();
  }, []);

  const handleDesignerClick = (designerId: number) => {
    navigate(`/designer-list/${designerId}`);
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
              <DesignerCardWrapper key={designer.designerId} onClick={() => handleDesignerClick(designer.designerId)}>
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

// 에러 메시지 스타일
const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  text-align: center;
  margin-top: 16px;
`;
