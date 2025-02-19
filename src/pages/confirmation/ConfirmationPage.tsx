import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CompleteHeader from "./components/CompleteHeader";
import ReservationInfo from "./components/ReservationInfo";
import ButtonGroup from "./components/ButtonGroup";
import { useLocation, useParams } from "react-router";
import SuccessMessageKakaoPay from "./components/SuccessMessageKakaoPay";
import SuccessMessageBankTransfer from "./components/SuccessMessageBankTransfer";
import { ISelectedInfo } from "../payment/PaymentPage";
import { api } from "../../api/api";

export interface IReservationDetail {
  reservationId: number;
  designerName: string;
  date: string; // "YYYY-MM-DD"
  time: string; // "HH:MM:SS"
  status: "ONGOING" | "COMPLETE"; // 상태 타입 지정
  meetLink: string | null;
  address: string;
  amount: number;
  online: boolean;
}

const ConfirmationPage: React.FC = () => {
  const { method } = useParams();
  const location = useLocation();
  const selectedInfo: ISelectedInfo = { ...location.state };
  console.log(location);

  const [reservation, setReservation] = useState<IReservationDetail[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); // ✅ 로딩 상태 추가

  useEffect(() => {
    getReservation();
  }, []);

  const getReservation = async () => {
    setIsLoading(true); // ✅ 데이터 요청 전 로딩 시작
    try {
      const response = await api.get(
        `/reservation/readReservationDetail?reservationId=${selectedInfo.reservationId}`
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
          {method === "bank" && <SuccessMessageBankTransfer />}
          <ReservationInfo selectedInfo={selectedInfo} />

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
