import React from "react";
import styled from "styled-components";
import { IReservation } from "../ConfirmationPage";

interface ReservationInfoProps {
  method: string;
  reservation: IReservation;
}

const ReservationInfo: React.FC<ReservationInfoProps> = ({
  reservation,
  method,
}) => {
  return (
    <Container>
      <Card>
        <InfoRow>
          <BoldText18>25.02.12(수) 오후 12:00</BoldText18>
          {method === "bank" ? (
            <BlueText>・ 입금 대기중</BlueText>
          ) : (
            <PurplrText>・ 결제완료</PurplrText>
          )}
        </InfoRow>
        <InfoRow>
          <Text>디자이너</Text>
          <Text>{reservation.reservationDetail.designerName}</Text>
        </InfoRow>
        <InfoRow>
          <Text>가격</Text>
          <Text>{reservation.reservationDetail.amount}원</Text>
        </InfoRow>
        {!reservation.reservationDetail.online ? (
          <InfoRow>
            <Text>대면</Text>
            <Text>{reservation.reservationDetail.address}</Text>
          </InfoRow>
        ) : (
          <InfoRow>
            <Text>비대면</Text>
            <GoogleMeetsLink
              href={reservation.reservationDetail.meetLink || ""}
              target="_blank"
              rel="noopener noreferrer"
            >
              {reservation.reservationDetail.meetLink || ""}
            </GoogleMeetsLink>
          </InfoRow>
        )}
      </Card>
      <Divider />
      <Card>
        <BoldText16>예약자 정보</BoldText16>
        <InfoRow>
          <Text>이름</Text>
          <Text>{reservation.name}</Text>
        </InfoRow>
        <InfoRow>
          <Text>이메일</Text>
          <Text>{reservation.email}</Text>
        </InfoRow>
      </Card>
      <Divider />
      <Card>
        <InfoRow>
          <BoldText>결제 금액</BoldText>
          <BoldText>{reservation.reservationDetail.amount}원</BoldText>
        </InfoRow>
      </Card>
    </Container>
  );
};

export default ReservationInfo;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  padding: 0px 24px;
  border-radius: 20px;
  margin-top: 32px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  text-align: left;
  gap: 8px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;

const Text = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;
const BoldText = styled.span`
  font-weight: bold;
  font-size: 16px;
`;
const BoldText18 = styled.span`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
`;
const BoldText16 = styled.span`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
`;
const PurplrText = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary[500]};
`;
const BlueText = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary[500]};
`;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const GoogleMeetsLink = styled.a`
  color: ${({ theme }) => theme.colors.secondary[500]};
`;
