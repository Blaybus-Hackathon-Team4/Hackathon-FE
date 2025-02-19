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

export type KakaoPaymentInfo = {
  impuid: string; // 결제 ID
  status: string; // 결제 상태 (ex: "paid")
  amount: number; // 결제 금액
  email: string; // 사용자 이메일
  name: string; // 사용자 이름
  createDate: string; // 결제 생성 날짜 (ISO 8601 형식)
};
export type StatusType = "ONGOING" | "COMPLETE";

export interface IrequestData {
  reservationId: number;
  comment: string;
  status: StatusType;
}

const PaymentPage: React.FC = () => {
  const { reservationId } = useParams();

  const [reservationInfo, setReservationInfo] = useState<IrequestData>({
    reservationId: Number(reservationId),
    comment: "",
    status: "ONGOING",
  });
  const [selectedMethod, setSelectedMethod] = useState<"KAKAO" | "BANK">(
    "BANK"
  );

  return (
    <Container>
      <Header />
      <ReservationInfo />
      <UserInfo setReservationInfo={setReservationInfo} />
      <PaymentDetails />
      <PaymentMethod
        selectedMethod={selectedMethod}
        setSelectedMethod={setSelectedMethod}
      />
      <PrivacyAgreement />
      <ConfirmButton
        selectedMethod={selectedMethod}
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
