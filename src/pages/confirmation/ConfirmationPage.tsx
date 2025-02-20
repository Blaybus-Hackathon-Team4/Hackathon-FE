import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CompleteHeader from "./components/CompleteHeader";
import ReservationInfo from "./components/ReservationInfo";
import ButtonGroup from "./components/ButtonGroup";
import { useParams } from "react-router";
import SuccessMessageKakaoPay from "./components/SuccessMessageKakaoPay";
import SuccessMessageBankTransfer from "./components/SuccessMessageBankTransfer";

import { api } from "../../api/api";

interface ReservationDetail {
  address: string | null; // 예약 장소 (대면 예약 시 필요, 없을 수도 있음)
  amount: number | null; // 예약 금액 (없을 수도 있음)
  date: string; // 예약 날짜 (예: "2025-02-22")
  designerName: string; // 디자이너 이름
  meetLink?: string | null; // 온라인 예약 시 미팅 링크 (없을 수도 있음)
  online: boolean; // 대면/비대면 여부 (true: 온라인, false: 대면)
  reservationId: number; // 예약 ID
  status: "ONGOING" | "COMPLETED" | "PASSED" | "CANCELED"; // 예약 상태 (예: 진행 중, 완료, 취소)
  time: string; // 예약 시간 (예: "11:00:00")
}

export interface IReservation {
  email: string; // 예약자의 이메일
  name: string; // 예약자의 이름
  reservationDetail: ReservationDetail; // 예약 상세 정보
}

const ConfirmationPage: React.FC = () => {
  const { method, reservationId } = useParams();

  const [reservation, setReservation] = useState<IReservation>({
    name: "강조은",
    email: "kangjoen12@gmail.com",
    reservationDetail: {
      reservationId: 3,
      designerName: "로로 원장",
      date: "2025-02-19",
      time: "10:30:00",
      status: "ONGOING",
      meetLink: null,
      address: "서울 마포구 어울마당로 19",
      amount: 50000,
      online: false,
    },
  });
  const [isLoading, setIsLoading] = useState<boolean>(true); // ✅ 로딩 상태 추가

  useEffect(() => {
    getReservation();
  }, []);

  const getReservation = async () => {
    setIsLoading(true); // ✅ 데이터 요청 전 로딩 시작
    try {
      const response = await api.get(
        `/reservation/readReservationDetail?reservationId=${reservationId}`
      );
      console.group(response);
      setReservation(response.data);
    } catch (error) {
      console.error("🚨 Error fetching designer list:", error);
    } finally {
      setIsLoading(false); // ✅ 데이터 요청이 끝나면 로딩 종료
    }
  };

  return (
    <Container>
      <CompleteHeader />
      {isLoading ? ( // ✅ 로딩 중이면 "Loading..." 표시
        <LoadingMessage>Loading...</LoadingMessage>
      ) : (
        <>
          {method === "kakaopay" && <SuccessMessageKakaoPay />}
          {method === "bank" && (
            <SuccessMessageBankTransfer reservation={reservation} />
          )}
          {reservation && method && (
            <ReservationInfo method={method} reservation={reservation} />
          )}

          <ButtonGroup />
        </>
      )}
    </Container>
  );
};

export default ConfirmationPage;

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  position: relative;
`;

const LoadingMessage = styled.p`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[500]};
`;
