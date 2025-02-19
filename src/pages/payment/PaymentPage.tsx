import React, { useState } from "react";
import styled from "styled-components";
import ReservationInfo from "./components/ReservationInfo";
import UserInfo from "./components/UserInfo";
import PaymentDetails from "./components/PaymentDetails";
import PaymentMethod from "./components/PaymentMethod";
import PrivacyAgreement from "./components/PrivacyAgreement";
import ConfirmButton from "./components/ConfirmButton";
import Header from "./components/Header";
import { useParams } from "react-router";
import { useReservationStore } from "../../zustand/reservation.store";
import { Process } from "../selectProcess/SelectProcessPage";

export type KakaoPaymentInfo = {
  impuid: string; // 결제 ID
  status: string; // 결제 상태 (ex: "paid")
  amount: number; // 결제 금액
  email: string; // 사용자 이메일
  name: string; // 사용자 이름
  createDate: string; // 결제 생성 날짜 (ISO 8601 형식)
};
export type StatusType = "ONGOING" | "COMPLETE";
export type PayMethodType = "ONGOING" | "COMPLETE";

export interface IrequestData {
  reservationId: number;
  comment: string;
  status: StatusType;
}
export interface IReservationInfo {
  designerId: string | null; // 디자이너 고유 ID
  process: Process | null; // 컨설팅 방식 (대면 or 비대면)
  date: string | null; // 예약 날짜 (예: "2025-02-19")
  time: string | null; // 예약 시간 (예: "11:00:00")
  name: string | null; // 예약자 이름 추가
  address: string | null; // 예약 장소 추가 (대면 예약 시 필요)
  price: number | null; // 예약 가격 추가
}
const PaymentPage: React.FC = () => {
  const { reservationId } = useParams();

  const reservationInfo: IReservationInfo = useReservationStore((state) => ({
    designerId: state.designerId,
    process: state.process,
    date: state.date,
    time: state.time,
    name: state.name,
    address: state.address,
    price: state.price,
  }));
  console.log(reservationInfo);

  const [extraInfo, setExtraInfo] = useState<IrequestData>({
    reservationId: Number(reservationId),
    comment: "",
    status: "ONGOING",
  });
  const [selectedMethod, setSelectedMethod] = useState<"KAKAO" | "BANK">(
    "BANK"
  );
  console.log(reservationInfo);

  return (
    <Container>
      <Header />
      <ReservationInfo reservationInfo={reservationInfo} />
      <UserInfo setExtraInfo={setExtraInfo} />
      <PaymentDetails reservationInfo={reservationInfo} />
      <PaymentMethod
        selectedMethod={selectedMethod}
        setSelectedMethod={setSelectedMethod}
      />
      <PrivacyAgreement />
      <ConfirmButton
        selectedMethod={selectedMethod}
        extraInfo={extraInfo}
        reservationInfo={reservationInfo}
      />
    </Container>
  );
};

export default PaymentPage;

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  padding: 20px 20px 70px 20px;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
`;
