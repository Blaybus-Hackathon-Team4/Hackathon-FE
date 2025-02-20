import styled from "styled-components";
import ReservationCard from "./components/ReservationCard";
import { theme } from "../../styles/theme";
import CancelModal from "./components/CancelModal";
import { useModalStore } from "../../zustand/modal.store";

const ReservationHistoryPage = () => {
  const { isCancelModalOpen } = useModalStore();

  return (
    <Container>
      <Title>내 예약</Title>

      <SectionTitle>다가오는 예약</SectionTitle>
      <ReservationCard
        date="25.02.12(수) 오후 12:00"
        status="결제 완료" // ✅ 취소 가능 상태
        statusColor={theme.colors.primary[500]}
        designer="이초 디자이너"
        price={40000}
        location="서울 강남구 압구정로79길"
      />
      <ReservationCard
        date="25.02.12(수) 오후 12:00"
        status="입금 대기 중" // ✅ 취소 가능 상태
        statusColor={theme.colors.secondary[500]}
        designer="이초 디자이너"
        price={20000}
        link="https://meet.google.com/dad-seuh-ykm"
      />

      <SectionTitle>완료된 예약</SectionTitle>
      <ReservationCard
        date="24.11.23(토) 오후 1:00"
        status="서비스 완료" // ✅ 취소 불가 상태
        designer="이초 디자이너"
        price={20000}
      /> 

      {isCancelModalOpen && <CancelModal />}
    </Container>
  );
};

export default ReservationHistoryPage;

const Container = styled.div`
  padding: 20px;
  background-color: ${theme.colors.gray[50]}; /* ✅ 배경색 추가 */
`;

const Title = styled.h1`
  text-align: center;
  color: ${theme.colors.black};
  font-size: 18px;
`;

const SectionTitle = styled.h2`
  margin-top: 20px;
  color: ${theme.colors.gray[900]};
  font-size: 16px;
`;
