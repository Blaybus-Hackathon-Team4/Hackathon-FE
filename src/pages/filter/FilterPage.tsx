import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ActionButtons from "./components/ActionButtons.tsx";
import ConsultButton from "./components/ConsultButton.tsx";
import FilterButton from "./components/FilterButton";
import PageHeader from "./components/PageHeader";
import PriceInput from "./components/PriceInput";

const locations = [
  "서울 전체",
  "홍대/연남/합정",
  "성수/건대",
  "강남/청담/압구정",
];
const specialties = ["커트", "펌", "매직", "탈염색"];

const FilterPage = () => {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [consultType, setConsultType] = useState<string | null>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(
    null
  );

  const handleApply = () => {
    console.log({
      selectedLocation,
      maxPrice,
      consultType,
      selectedSpecialty,
    });
    navigate(-1); // 적용 후 이전 페이지로 이동
  };

  const handleReset = () => {
    setSelectedLocation(null);
    setMaxPrice("");
    setConsultType(null);
    setSelectedSpecialty(null);
  };

  return (
    <Container>
      <PageHeader title="필터" />
      <ContentWrapper>
        <FilterContainer>
          <Section>
            <Title>지역</Title>
            <ButtonContainer>
              {locations.map((loc) => (
                <FilterButton
                  key={loc}
                  text={loc}
                  isSelected={selectedLocation === loc}
                  onClick={() => setSelectedLocation(loc)}
                />
              ))}
            </ButtonContainer>
          </Section>

          <Section>
            <Title>가격대</Title>
            <PriceInput value={maxPrice} onChange={setMaxPrice} />
          </Section>

          <Section>
            <Title>상담 방식</Title>
            <ConsultContainer>
              <ConsultButton
                type="대면"
                isSelected={consultType === "대면"}
                onClick={() => setConsultType("대면")}
              />
              <ConsultButton
                type="비대면"
                isSelected={consultType === "비대면"}
                onClick={() => setConsultType("비대면")}
              />
            </ConsultContainer>
          </Section>

          <Section>
            <Title>전문 분야</Title>
            <ButtonContainer>
              {specialties.map((spec) => (
                <FilterButton
                  key={spec}
                  text={spec}
                  isSelected={selectedSpecialty === spec}
                  onClick={() => setSelectedSpecialty(spec)}
                />
              ))}
            </ButtonContainer>
          </Section>

          <ActionButtonsWrapper>
            <ActionButtons
              onApply={handleApply}
              onReset={handleReset}
              isFilterApplied={
                !!(
                  selectedLocation ||
                  maxPrice ||
                  consultType ||
                  selectedSpecialty
                )
              }
            />
          </ActionButtonsWrapper>
        </FilterContainer>
      </ContentWrapper>
    </Container>
  );
};

export default FilterPage;

// 스타일 정의
// 전체 컨테이너: (헤더 제외, 필터 영역과 버튼을 중앙 정렬)
const Container = styled.div`
  width: 100%;
  max-width: 480px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: white;
  margin-left: 20px;
  margin-right: 20px;
  //align-items: center;
`;

//필터 컨테이너를 화면 중앙에 배치하되 내부 요소는 왼쪽 정렬
const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center; /* 🔹 전체 컨텐츠를 중앙 정렬 */
  align-items: center;
`;

const FilterContainer = styled.div`
  width: 390px; //내부 요소 크기에 맞게 조정
  margin: 0 auto; //중앙 배치
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  text-align: left; //내부 요소 왼쪽 정렬 유지
`;

const Section = styled.div`
  margin-bottom: 20px;
  //align-items: center
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  align-items: center;
  margin-bottom: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ConsultContainer = styled.div`
  display: flex;
  gap: 16px;
`;

// 선택 초기화 & 적용하기 버튼들을 화면 중앙에 배치
const ActionButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
