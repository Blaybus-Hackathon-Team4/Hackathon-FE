import React, {useState} from "react";
import styled from "styled-components";
import ReservationCard from "./components/ReservationCard";
import { theme } from "../../styles/theme";
import CancelModal from "./components/CancelModal"; // 예약 취소 모달창 추가
import { useModalStore } from "../../zustand/modal.store";

const ReservationHistoryPage = () => {
  const { isCancelModalOpen, openCancelModal } = useModalStore();
  const [selectedPaymentId, setSelectedPaymentId] = useState<string | null>(null);

  const handleOpenCancelModal = (paymentId: string) => {
    setSelectedPaymentId(paymentId); // 선택한 결제 ID 저장
    openCancelModal(); // 모달 열기
  };

  return (
    <Container>
      <Title>내 예약</Title>

      <SectionTitle>다가오는 예약</SectionTitle>
      <ReservationCard
        date="25.02.12(수) 오후 12:00"
        status="결제 완료" // 취소 가능 상태
        statusColor={theme.colors.primary[500]}
        designer="이초 디자이너"
        price={40000}
        location="서울 강남구 압구정로79길"
        paymentId="pay_1234567890" // 결제 ID 추가
        onClick={() => handleOpenCancelModal("pay_1234567890")}
      />
      <ReservationCard
        date="25.02.12(수) 오후 12:00"
        status="입금 대기 중" // 취소 가능 상태
        statusColor={theme.colors.secondary[500]}
        designer="이초 디자이너"
        price={20000}
        link="https://meet.google.com/dad-seuh-ykm"
        paymentId="pay_0987654321" // 결제 ID 추가
        onClick={() => handleOpenCancelModal("pay_0987654321")}
      />

      <SectionTitle>완료된 예약</SectionTitle>
      <ReservationCard
        date="24.11.23(토) 오후 1:00"
        status="" // 취소 불가 상태
        designer="이초 디자이너"
        price={20000}
        paymentId="" // 완료된 예약이라 결제 ID 필요 없음
        font-color={theme.colors.gray[300]}
        isCompleted={true}
      /> 

{isCancelModalOpen && selectedPaymentId && <CancelModal paymentId={selectedPaymentId} />} {/* 선택된 결제 ID 전달 */}
    </Container>
  );
};

export default ReservationHistoryPage;

const Container = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 480px;
  background-color: ${theme.colors.gray[50]}; /*배경색 추가*/
  flex-direction: column;
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
