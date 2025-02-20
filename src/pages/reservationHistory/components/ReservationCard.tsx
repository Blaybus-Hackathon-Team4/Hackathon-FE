import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import CancelButton from "../components/CancelButton";

interface ReservationCardProps {
  date: string;
  status?: string;
  statusColor?: string;
  designer: string;
  price: number;
  location?: string;
  link?: string;
  paymentId: string;
  onClick?: (paymentId: string)=> void;
  isCompleted?: boolean;
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
  // onClick,
}) => {
  const isCancellable = status === "결제 완료" || status === "입금 대기 중"; // 취소 가능 상태 체크

  return (
    <Card>
      <CardHeader>
        <DateTime>{date}</DateTime>
        {status && <StatusBadge color={statusColor}>{status}</StatusBadge>}
      </CardHeader>
      <Info>디자이너: {designer}</Info>
      <Info>가격: {price.toLocaleString()}원</Info> {/* 천 단위 구분 */}
      {location && <Info>대면: {location}</Info>}
      {link && (
        <Info>
          비대면: <a href={link}>{link}</a>
        </Info>
      )}
      {isCancellable && <CancelButton paymentId={paymentId} />}
    </Card>
  );
};

export default ReservationCard;

const Card = styled.div`
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray[100]};
  border-radius: 10px;
  padding: 15px;
  margin-top: 10px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DateTime = styled.span`
  font-weight: bold;
  color: ${theme.colors.black};
`;

const StatusBadge = styled.span<{ color?: string }>`
  font-size: 14px;
  color: ${(props) => props.color || theme.colors.gray[900]};
  font-weight: bold;
`;

const Info = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: ${theme.colors.gray[900]};
`;
