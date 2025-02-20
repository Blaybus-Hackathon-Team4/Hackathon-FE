import { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { api } from "../../api/api";
import { useModalStore } from "../../zustand/modal.store";
import CancelModal from "./components/CancelModal";
import ReservationCard from "./components/ReservationCard";

interface Reservation {
  reservationId: number;
  designerName: string;
  date: string;
  time: string;
  status: "READY" | "ONGOING" | "COMPLETE" | "PASSED" | "CANCELED";
  meetLink?: string | null;
  address: string;
  amount: number;
  online: boolean;
}

const ReservationHistoryPage = () => {
  const { isCancelModalOpen, openCancelModal } = useModalStore();
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [selectedPaymentId, setSelectedPaymentId] = useState<string | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await api.get("/reservation/readReservation");
        console.log("API 응답 데이터:", response.data);
  
        // API 응답이 배열인지 확인하고, 적절한 데이터를 설정
        if (Array.isArray(response.data)) {
          setReservations(response.data);
        } else if (response.data && Array.isArray(response.data.reservations)) {
          setReservations(response.data.reservations); // ✅ `reservations` 키 내부의 데이터를 사용
        } else {
          console.error("API 응답이 배열이 아닙니다:", response.data);
          setReservations([]); // 오류 발생 시 빈 배열 설정
        }
      } catch (err) {
        console.error("예약 정보를 불러오는 중 오류 발생:", err);
        setError("예약 정보를 불러오는 데 실패했습니다.");
        setReservations([]); // 오류 발생 시 안전하게 처리
      } finally {
        setLoading(false);
      }
    };
  
    fetchReservations(); // 수정된 `fetchReservations()` 실행
  
    // 5초마다 최신 데이터 가져오기
    const interval = setInterval(fetchReservations, 5000);
  
    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, []);  

  // 예약을 "다가오는 예약"과 "완료된 예약"으로 구분
  const upcomingReservations = reservations.filter(
    (res) => res.status === "READY" || res.status === "ONGOING"
  );
  const completedReservations = reservations.filter(
    (res) => res.status === "COMPLETE" || res.status === "PASSED"
  );

  // 결제 ID 설정 후 취소 모달 열기
  const handleOpenCancelModal = (paymentId: string) => {
    setSelectedPaymentId(paymentId);
    openCancelModal();
  };

  return (
    <Container>
      <Title>내 예약</Title>

      {loading ? (
        <LoadingMessage>불러오는 중...</LoadingMessage>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : reservations.length === 0 ? (
        <EmptyMessage>예약 내역이 없습니다.</EmptyMessage>
      ) : (
        <>
          {/* 다가오는 예약 */}
          {upcomingReservations.length > 0 && (
            <>
              <SectionTitle>다가오는 예약</SectionTitle>
              {upcomingReservations.map((res) => (
                <ReservationCard
                  key={res.reservationId}
                  date={`${res.date} ${res.time}`}
                  status={res.status}
                  statusColor={
                    res.status === "COMPLETE"
                      ? theme.colors.primary[500]
                      : theme.colors.secondary[500]
                  }
                  designer={res.designerName}
                  price={res.amount}
                  location={res.online ? undefined : res.address}
                  link={res.online ? res.meetLink ?? undefined : undefined}
                  paymentId={`pay_${res.reservationId}`}
                  onClick={() => handleOpenCancelModal(`pay_${res.reservationId}`)}
                />
              ))}
            </>
          )}

          {/* 완료된 예약 */}
          {completedReservations.length > 0 && (
            <>
              <SectionTitle>완료된 예약</SectionTitle>
              {completedReservations.map((res) => (
                <ReservationCard
                  key={res.reservationId}
                  date={`${res.date} ${res.time}`}
                  status="PASSED"
                  designer={res.designerName}
                  price={res.amount}
                  location={res.online ? undefined : res.address}
                  link={res.online ? res.meetLink ?? undefined : undefined}
                  paymentId=""
                  isCompleted={true}
                />
              ))}
            </>
          )}
        </>
      )}

      {/* 취소 모달 */}
      {isCancelModalOpen && selectedPaymentId && (
        <CancelModal paymentId={selectedPaymentId} />
      )}
    </Container>
  );
};

export default ReservationHistoryPage;

const Container = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 480px;
  background-color: ${theme.colors.gray[50]};
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

const LoadingMessage = styled.p`
  font-size: 16px;
  text-align: center;
  color: #666;
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  text-align: center;
`;

const EmptyMessage = styled.p`
  font-size: 16px;
  text-align: center;
  color: #666;
`;
