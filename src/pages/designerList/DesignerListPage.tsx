import styled from "styled-components";
//import DummyProfile from "../../assets/icons/image_designer.svg";
import DesignerCard from "./components/DesignerCard";
import Divider from "./components/Divider";
import FilterButton from "./components/FilterButton";
import {useNavigate} from "react-router-dom";
//import {theme} from "../../styles/theme.ts";

// 정적인 데이터 (디자인을 미리 확인하기 위함)
const designers = [
  {
    designerId: 1004,
    profilePhoto: "/designer/1004.jpg",
    name: "이초 디자이너",
    field: "펌",
    location: "강남/청담/압구정",
    text: "레드벨벳, ITZY가 방문하는 샵",
    isOnline: false,
    isOffline: true,
  },
  {
    designerId: 1012,
    profilePhoto: "/designer/1012.jpg",
    name: "로로 원장",
    field: "펌",
    location: "홍대/연남/합정",
    text: "화이트 베이지 브라운 전문",
    isOnline: false,
    isOffline: true,
  },
  {
    designerId: 1013,
    name: "슈 대표원장",
    profilePhoto: "/designer/1013.jpg",
    field: "탈염색",
    location: "홍대/연남/합정",
    text: "차별화 된 탈색 & 염색 노하우 기법, 꼼꼼한 컨설팅",
    isOnline: true,
    isOffline: true,
  },
  {
    designerId: 1005,
    name: "랑 원장",
    profilePhoto: "/designer/1005.jpg",
    field: "탈염색",
    location: "홍대/연남/합정",
    text: "차별화 된 탈색 & 염색 노하우 기법, 꼼꼼한 컨설팅",
    isOnline: true,
    isOffline: true,
  },
  {
    designerId: 1006,
    name: "히지 디자이너",
    profilePhoto: "/designer/1006.jpg",
    field: "탈염색",
    location: "홍대/연남/합정",
    text: "차별화 된 탈색 & 염색 노하우 기법, 꼼꼼한 컨설팅",
    isOnline: true,
    isOffline: true,
  },
  {
    designerId: 1007,
    name: "현영 디자이너",
    profilePhoto: "/designer/1007.jpg",
    field: "탈염색",
    location: "홍대/연남/합정",
    text: "차별화 된 탈색 & 염색 노하우 기법, 꼼꼼한 컨설팅",
    isOnline: true,
    isOffline: true,
  },
  {
    designerId: 1008,
    name: "현영 디자이너",
    profilePhoto: "../../assets/designer/1008.jpg",
    field: "탈염색",
    location: "홍대/연남/합정",
    text: "차별화 된 탈색 & 염색 노하우 기법, 꼼꼼한 컨설팅",
    isOnline: true,
    isOffline: true,
  },
  {
    designerId: 1009,
    name: "나나 디자이너",
    profilePhoto: "../../assets/designer/1009.jpeg",
    field: "탈염색",
    location: "홍대/연남/합정",
    text: "차별화 된 탈색 & 염색 노하우 기법, 꼼꼼한 컨설팅",
    isOnline: true,
    isOffline: true,
  },
  {
    designerId: 1010,
    name: "나나 디자이너",
    profilePhoto: "../assets/designer/1010.jpg",
    field: "탈염색",
    location: "홍대/연남/합정",
    text: "차별화 된 탈색 & 염색 노하우 기법, 꼼꼼한 컨설팅",
    isOnline: true,
    isOffline: true,
  },
  {
    designerId: 1011,
    name: "주 디자이너",
    profilePhoto: "../../assets/designer/1011.jpg",
    field: "염색",
    location: "홍대/연남/합정",
    text: "차별화 된 탈색 & 염색 노하우 기법, 꼼꼼한 컨설팅",
    isOnline: true,
    isOffline: true,
  },
  {
    designerId: 1012,
    name: "이아 디자이너",
    profilePhoto: "../../assets/designer/1012.jpg",
    field: "펌",
    location: "홍대/연남/합정",
    text: "차별화 된 탈색 & 염색 노하우 기법, 꼼꼼한 컨설팅",
    isOnline: true,
    isOffline: true,
  },
  {
    designerId: 1013,
    name: "희 수석 디자이너",
    profilePhoto: "../../assets/designer/1013.jpg",
    field: "탈염색",
    location: "홍대/연남/합정",
    text: "차별화 된 탈색 & 염색 노하우 기법, 꼼꼼한 컨설팅",
    isOnline: true,
    isOffline: true,
  },
  {
    designerId: 1014,
    name: "유하 디자이너",
    profilePhoto: "../../../designer/1014.jpg",
    field: "탈염색",
    location: "홍대/연남/합정",
    text: "차별화 된 탈색 & 염색 노하우 기법, 꼼꼼한 컨설팅",
    isOnline: true,
    isOffline: true,
  },
  {
    designerId: 1015,
    name: "미미 컬러리스트",
    profilePhoto: "../../../assets/designer/1015.jpg",
    field: "탈염색",
    location: "홍대/연남/합정",
    text: "차별화 된 탈색 & 염색 노하우 기법, 꼼꼼한 컨설팅",
    isOnline: true,
    isOffline: true,
  },
  {
    designerId: 1016,
    name: "하루 컬러리스트",
    profilePhoto: "../../../assets/designer/1016.jpg",
    field: "탈염색",
    location: "홍대/연남/합정",
    text: "차별화 된 탈색 & 염색 노하우 기법, 꼼꼼한 컨설팅",
    isOnline: true,
    isOffline: true,
  }

];

const DesignerListPage = () => {
  const navigate = useNavigate();
  const filters = ["지역", "가격대", "상담방식", "전문 분야"];

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
          <div key={designer.designerId} onClick={() => handleDesignerClick(designer.designerId)}>
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
