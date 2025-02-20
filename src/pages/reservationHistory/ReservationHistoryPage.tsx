import { useState } from "react";
import styled from "styled-components";
import ReservationCard from "./components/ReservationCard";
import { theme } from "../../styles/theme";
import CancelModal from "./components/CancelModal"; // ✅ 예약 취소 모달 추가
import { useModalStore } from "../../zustand/modal.store";

const ReservationHistoryPage = () => {
  const { isModalOpen, openModal } = useModalStore();
  const [selectedPaymentId, setSelectedPaymentId] = useState<string | null>(null);

  // ✅ "예약 취소" 버튼 클릭 시 실행되는 함수
  const handleOpenCancelModal = (paymentId: string) => {
    setSelectedPaymentId(paymentId); // ✅ 선택한 결제 ID 저장
    openModal(<CancelModal paymentId={paymentId} />); // ✅ 모달 열기
  };

  return (
    <Container>
      <Title>내 예약</Title>

      <SectionTitle>다가오는 예약</SectionTitle>
      <ReservationCard
        date="25.02.12(수) 오후 12:00"
        status="결제 완료"
        statusColor={theme.colors.primary[500]}
        designer="이초 디자이너"
        price={40000}
        location="서울 강남구 압구정로79길"
        paymentId="pay_1234567890"
        onClick={handleOpenCancelModal} // ✅ onClick 전달
      />
      <ReservationCard
        date="25.02.12(수) 오후 12:00"
        status="입금 대기 중"
        statusColor={theme.colors.secondary[500]}
        designer="이초 디자이너"
        price={20000}
        link="https://meet.google.com/dad-seuh-ykm"
        paymentId="pay_0987654321"
        onClick={handleOpenCancelModal} // ✅ onClick 전달
      />

      <SectionTitle>완료된 예약</SectionTitle>
      <ReservationCard
        date="24.11.23(토) 오후 1:00"
        status="서비스 완료"
        designer="이초 디자이너"
        price={20000}
        paymentId=""
        isCompleted={true} // ✅ 완료된 예약이라 글자 색상 변경
      />

      {isModalOpen && selectedPaymentId && <CancelModal paymentId={selectedPaymentId} />} {/* ✅ 선택된 결제 ID 전달 */}
    </Container>
  );
};

export default ReservationHistoryPage;

const Container = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 480px;
  background-color: ${theme.colors.gray[50]};
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
