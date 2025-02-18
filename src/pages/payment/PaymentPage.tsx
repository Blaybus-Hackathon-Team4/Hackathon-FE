import React from "react";
import styled from "styled-components";
import ReservationInfo from "./components/ReservationInfo";
import UserInfo from "./components/UserInfo";
import PaymentDetails from "./components/PaymentDetails";
import PaymentMethod from "./components/PaymentMethod";
import PrivacyAgreement from "./components/PrivacyAgreement";
import ConfirmButton from "./components/ConfirmButton";
import Header from "./components/Header";

export type KakaoPaymentInfo = {
  impuid: string; // 결제 ID
  status: string; // 결제 상태 (ex: "paid")
  amount: number; // 결제 금액
  email: string; // 사용자 이메일
  name: string; // 사용자 이름
  createDate: string; // 결제 생성 날짜 (ISO 8601 형식)
};

const PaymentPage: React.FC = () => {
  // const [paymentInfo, setPaymentInfo] = useState<KakaoPaymentInfo>({
  //   impuid: "imp_1234567890",
  //   status: "paid",
  //   amount: 10000,
  //   email: "user@example.com",
  //   name: "홍길동",
  //   createDate: "2025-02-17T12:00:00",
  // });

  return (
    <Container>
      <Header />
      <ReservationInfo />
      <UserInfo />
      <PaymentDetails />
      <PaymentMethod />
      <PrivacyAgreement />
      <ConfirmButton />
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
