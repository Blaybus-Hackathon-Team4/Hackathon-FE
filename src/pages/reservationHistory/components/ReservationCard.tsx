import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import CancelButton from "../components/CancelButton";
//import {useModalStore} from "../../../zustand/modal.store";

interface ReservationCardProps {
  date: string;
  status?: string;
  statusColor?: string;
  designer: string;
  price: number;
  location?: string;
  link?: string;
  paymentId: string; // 결제 취소 API 호출을 위한 paymentId 추가
  onClick?: (paymentId: string) => void;
  isCompleted?: boolean; // 완료된 예약 여부 추가
}

const ReservationCard: React.FC<ReservationCardProps> = ({
  date,
  status,
  statusColor,
  designer,
  price,
  location,
  link,
  paymentId,
  onClick,
  isCompleted, //완료된 예약인지 확인
}) => {
  //const { openCancelModal } = useModalStore(); //모달 열기 함수 

  // "결제 완료" 또는 "입금 대기 중" 상태에서만 취소 버튼 보이도록 설정
  const isCancellable = status === "결제 완료" || status === "입금 대기 중"; // ✅ 취소 가능 상태 체크

  return (
    <Card isCompleted={isCompleted}>
      <CardHeader>
        <DateTime isCompleted={isCompleted}>{date}</DateTime>
        {status && <StatusBadge color={statusColor} isCompleted={isCompleted}>{status}</StatusBadge>}
      </CardHeader>
      <InfoWrapper>
        <Label>디자이너:</Label>
        <Value isCompleted={isCompleted}>{designer}</Value>
      </InfoWrapper>

      <InfoWrapper>
        <Label>가격:</Label>
        <Value isCompleted={isCompleted}>{price.toLocaleString()}원</Value>
      </InfoWrapper>

      {location && (
        <InfoWrapper>
          <Label>대면:</Label>
          <Value isCompleted={isCompleted}>{location}</Value>
        </InfoWrapper>
      )}

      {link && (
        <InfoWrapper>
          <Label>비대면:</Label>
          <Value isCompleted={isCompleted}>
            <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
          </Value>
        </InfoWrapper>
      )}
      {isCancellable && <CancelButton onClick={() => onClick && onClick(paymentId)} />} {/* ✅ onClick 사용 */}
      {/* {isCancellable && <CancelButton />} 상태가 "결제 완료" 또는 "입금 대기 중"일 때만 버튼 표시 */}
    </Card>
  );
};

export default ReservationCard;

const Card = styled.div<{ isCompleted?: boolean }>`
  background: ${theme.colors.white};
  // border: 1px solid ${theme.colors.gray[100]};
  border-radius: 10px;
  padding: 15px;
  margin-top: 10px;
  color: ${({ isCompleted }) => (isCompleted ? theme.colors.gray[300] : theme.colors.black)};
`;

const CardHeader = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DateTime = styled.span<{ isCompleted?: boolean }>`
  font-weight: bold;
  color: ${({ isCompleted }) => (isCompleted ? theme.colors.gray[300] : theme.colors.black)};;
`;

const StatusBadge = styled.span<{ color?: string; isCompleted?: boolean }>`
  font-size: 14px;
  color: ${({ isCompleted, color }) => (isCompleted ? theme.colors.gray[300] : color || theme.colors.gray[900])};
  font-weight: bold;
`;

const Info = styled.p<{ isCompleted?: boolean }>`
  margin-top: 5px;
  font-size: 14px;
  color: ${({ isCompleted }) => (isCompleted ? theme.colors.gray[300] : theme.colors.gray[900])};
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%
`;

const Label = styled.span`
text-align: left;
font-size: 14px;
color: ${theme.colors.gray[900]};
`;

const Value = styled.span<{ isCompleted?: boolean }>`
  text-align: right;
  font-size: 14px;
  color: ${({ isCompleted }) => (isCompleted ? theme.colors.gray[300] : theme.colors.black)};
`;