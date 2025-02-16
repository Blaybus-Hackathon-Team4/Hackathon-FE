import React from "react";
import styled from "styled-components";

interface ReservationCardProps {
    date: string;
    time: string;
    designer: string;
    price: number | string;
    location?: string;
    meetingLink?: any;
    status: "결제 완료" | "입금 대기 중";
}

const Card = styled.div`
    padding: 16px;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin: 12px;
    width: 100%;
    max-width: 400px;
    border: 1px solid #ddd;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center; 
    font-size: 16px;
    font-weight: bold;
`;

const Status = styled.span<{status: "결제 완료" | "입금 대기 중"}>`
font-size: 14px;
font-weight: bold;
color: ${({status}) => (status === "결제 완료" ? "#a855f7" : "#007aff")};
`;

const Info = styled.p`
    font-size: 14px;
    color: #333;
    margin: 5px 0;
`;

const CancelButton = styled.button`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    background: white;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;

    @media (hover: none) {
        cursor: default;
    }
`;

const ReservationCard: React.FC<ReservationCardProps> = ({
    date,
    time,
    designer,
    price,
    location,
    meetingLink,
    status, 
}) => {
    return (
        <Card>
            <Header>
                <span>{`${date} ${time}`}</span>
                <Status status={status}>• {status}</Status>
            </Header>
            <Info>디자이너: {designer}</Info>
            <Info>가격: {price}</Info>
            {location ? (
                <Info>대면 {location}</Info>
            ) : (
                <Info>
                    비대면 <span dangerouslySetInnerHTML = {{ __html: meetingLink || ""}} />
                </Info>
            )}
            <CancelButton>예약 취소</CancelButton>
        </Card>
    );
};

export default ReservationCard;