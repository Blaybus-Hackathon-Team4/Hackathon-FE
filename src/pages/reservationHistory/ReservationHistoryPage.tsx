import React, {useEffect, useState} from "react";
import styled from "styled-components";
import ReservationCard from "./components/ReservationCard";

const PageContainer = styled.div`
  padding: 20px;
  display: flex; 
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  width: 100px;
  max-width: 400px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
`;

const CompletedSection = styled.div`
  width: 100%;
  max-width: 400px;
  background: #f5f5f5;
  padding: 10px;
  border-radius: 8px;
`;

const BottomNav =styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  broder-top: 1px solid #add;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
`;

const NavItem = styled.div<{active?: boolean}>`
  font-size: 14px;
  font-weight: ${({active}) => (active ? "bold" : "normal")};
  color: ${({active}) => active ? "#000" : "#999"};
`;

// const ReservationHistoryPage = () => {
//   return <div>예약 조회 페이지</div>;
// };

interface Reservation {
  id: number;
  date: string;
  time: string;
  designer: {
    name: string;
  };
  isOnline: boolean;
  meetLink?: string;
  price: number;
  location?: string; //비대면 예약일 경우 undefined
  status: "결제 완료" | "입금 대기 중";
}

const ReservationHistoryPage = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    fetch("/api/v1/reservations") //백엔드에서 예약 목록 가져오기 
      .then((res) => res.json())
      .then((data) =>
        setReservations(
          data.map((res: any) => ({
            ...res,
            // 백엔드에서 데이터 가져와서 가격, 미용실 주소 설정 
            price: typeof res.price === "string" ? parseInt(res.price, 10) : res.price, //문자열일 경우, number로 변환함
            location: res.isOnline ? undefined : res.location, 
            meetLink: res.meetLink //구글 미트 링크 
              ? `<a href='${res.meetLink}' target='_blank' rel='nooper noreferrer'>Google Meet 링크</a>`
              : undefined,
          }))
        )
      )
      .catch((error) => console.error("예약 데이터를 불러오는 중 오류 발생:", error));
  }, []);

  return (
    <PageContainer>
      <Header>예약 조회</Header>

      {/*다가오는 예약*/}
      <SectionTitle>다가오는 예약</SectionTitle>
      {reservations
        .filter((res) => new Date(res.date) >= new Date()) // 현재 날짜 이후의 예약만 표시
        .map((res) => (
          <ReservationCard
            key={res.id}
            date={res.date}
            time={res.time}
            designer={res.designer.name}
            price= {res.price} //가격 정보
            location= {res.location}
            meetingLink={res.meetLink}
            status={res.status}
          />
        ))}

        {/*완료된 예약*/}
        <SectionTitle>완료된 예약</SectionTitle>
        <CompletedSection>
          {reservations
            .filter((res) => new Date(res.date) < new Date())
            .map((res) => (
              <ReservationCard
                key={res.id}
                date={res.date}
                time={res.time}
                designer={res.designer.name}
                price={res.price}
                location={res.location}
                meetingLink={res.meetLink}
                status={res.status}
              />
            ))  
          }
        </CompletedSection>

        {/* 하단 네비게이션 */}
        <BottomNav>
          <NavItem>홈</NavItem>
          <NavItem>탐색</NavItem>
          <NavItem active>예약 조회</NavItem>
          <NavItem>마이</NavItem>
        </BottomNav>
    </PageContainer>
  );
};

export default ReservationHistoryPage;
