import styled from "styled-components";
import FilterButton from "./components/FilterButton";
import DesignerCard from "./components/DesignerCard";
import Divider from "./components/Divider";

// 정적인 더미 데이터 (디자인을 미리 확인하기 위함)
const designers = [
  {
    designerId: 1,
    profilePhoto: "./image_designer.svg",
    name: "이초 디자이너",
    field: "펌",
    location: "강남/청담/압구정",
    text: "레드벨벳, ITZY가 방문하는 샵",
    isOnline: false,
    isOffline: true,
  },
  {
    designerId: 2,
    profilePhoto: "./image_designer.svg",
    name: "로로 원장",
    field: "펌",
    location: "홍대/연남/합정",
    text: "화이트 베이지 브라운 전문",
    isOnline: false,
    isOffline: true,
  },
  {
    designerId: 3,
    name: "슈 대표원장",
    profilePhoto: "./image_designer.svg",
    field: "탈염색",
    location: "홍대/연남/합정",
    text: "차별화 된 탈색 & 염색 노하우 기법, 꼼꼼한 컨설팅",
    isOnline: true,
    isOffline: true,
  },
];

const DesignerListPage = () => {
  const filters = ["지역", "가격대", "상담방식", "전문 분야"];

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
          <div key={designer.designerId}>
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
  display: flex;
  justify-content: space-between; //버튼들이 화면 가로 너비에 맞게 보여지도록 
  gap: 8px;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 20px; //버튼 많

  /* 스크롤바 숨기기 (필요 시) */
  &::-webkit-scrollbar {
    display: none;
`;

const DesignerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;