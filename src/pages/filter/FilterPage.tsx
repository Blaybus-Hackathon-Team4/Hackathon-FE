import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ActionButtons from "./components/ActionButtons.tsx";
import ConsultButton from "./components/ConsultButton.tsx";
import FilterButton from "./components/FilterButton";
import PageHeader from "./components/PageHeader";
import PriceInput from "./components/PriceInput";
import { useFilterStore } from "../../zustand/filterStore"; // Zustand 스토어 불러오기

const locations = [
  "서울 전체",
  "홍대/연남/합정",
  "성수/건대",
  "강남/청담/압구정",
];

const specialties = ["커트", "펌", "매직", "탈염색"];

const FilterPage = () => {
  const navigate = useNavigate();
  const {
    location,
    field,
    isOnline,
    isOffline,
    minPrice,
    maxPrice,
    setFilters,
    resetFilters,
  } = useFilterStore();

  const handleApply = () => {
    console.log({
      location,
      field,
      isOnline,
      isOffline,
      minPrice,
      maxPrice,
    });
    navigate(-1); // 적용 후 이전 페이지로 이동
  };

  const handleReset = () => {
    resetFilters();
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
                  isSelected={location === loc}
                  onClick={() => setFilters({ location: loc })}
                />
              ))}
            </ButtonContainer>
          </Section>

          <Section>
            <Title>가격대</Title>
            <PriceInput
              value={maxPrice?.toString() || ""}
              onChange={(value) => setFilters({ maxPrice: Number(value) })}
            />
          </Section>

          <Section>
            <Title>상담 방식</Title>
            <ConsultContainer>
              <ConsultButton
                type="대면"
                isSelected={isOffline}
                onClick={() => setFilters({ isOffline: !isOffline })}
              />
              <ConsultButton
                type="비대면"
                isSelected={isOnline}
                onClick={() => setFilters({ isOnline: !isOnline })}
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
                  isSelected={field === spec}
                  onClick={() => setFilters({ field: spec })}
                />
              ))}
            </ButtonContainer>
          </Section>

          <ActionButtonsWrapper>
            <ActionButtons
              onApply={handleApply}
              onReset={handleReset}
              isFilterApplied={
                !!(location || field || minPrice || maxPrice || !isOnline || !isOffline)
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
const Container = styled.div`
  width: 390px;
  max-width: 480px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: white;
  margin-left: 20px;
  margin-right: 20px;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilterContainer = styled.div`
  width: 390px;
  margin: 0 auto;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
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

const ActionButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
