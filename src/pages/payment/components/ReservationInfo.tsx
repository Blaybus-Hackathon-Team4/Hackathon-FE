import React from "react";
import styled from "styled-components";

import faceTofaceImage from "../../../assets/icons/face-to-face-icon.svg";

import noneFaceTofaceImage from "../../../assets/icons/non-face-to-face-icon.svg";

import CheckIcon from "../../../assets/icons/check-gray-icon.svg";
import LocationIcon from "../../../assets/icons/location-gray-icon.svg";

import { useReservationStore } from "../../../zustand/reservation.store";

const ReservationInfo: React.FC = () => {
  const { process, date, time, name, address, profilePhoto } =
    useReservationStore();

  const formatDateToKoreanStyle = (dateString: string | null): string => {
    if (!dateString) return "";
    // 날짜 객체 생성
    const date = new Date(dateString);

    // 월과 일 추출
    const month = date.getMonth() + 1; // getMonth()는 0부터 시작하므로 +1
    const day = date.getDate();

    // 요일 배열 (일요일부터 시작)
    const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
    const dayOfWeek = dayNames[date.getDay()];

    // 최종 문자열 반환
    return `${month}.${day} (${dayOfWeek})`;
  };

  const formatTimeToKoreanStyle = (timeString: string | null): string => {
    if (!timeString) return "";
    // 시간과 분을 분리
    const [hourStr, minute] = timeString.split(":");
    const hour = parseInt(hourStr, 10);

    // 오전/오후 결정
    const period = hour < 12 ? "오전" : "오후";

    // 12시간제로 변환 (0시는 12시로, 13~23시는 1~11시로)
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;

    // 최종 문자열 반환
    return `${period} ${formattedHour}:${minute}`;
  };

  return (
    <Card>
      <Profile>
        <ProfileImage src={`/designer/${profilePhoto}`} alt="디자이너" />
        <InfoConainer>
          <Title>{name}</Title>
          <Schedule>
            <Gray>일정</Gray>{" "}
            {`${formatDateToKoreanStyle(date)} · ${formatTimeToKoreanStyle(
              time
            )}`}
          </Schedule>
        </InfoConainer>
      </Profile>
      <InfoBox>
        {process === "대면" ? (
          <InfoConainer>
            <Info>
              <Icon src={CheckIcon} alt="check" />
              실제 샵에 <Purple>방문하여</Purple> 컨설팅 진행
            </Info>
            <Info>
              <Icon src={LocationIcon} alt="location" /> {address}
            </Info>
          </InfoConainer>
        ) : (
          <InfoConainer>
            <Info>
              <Icon src={CheckIcon} alt="check" />
              <div>
                {" "}
                <Text>예약 후 생성되는 구글미트에서</Text>
                <Text>
                  <Purple>화상으로</Purple> 컨설팅 진행
                </Text>
              </div>
            </Info>
          </InfoConainer>
        )}
        {process === "대면" ? (
          <ShopImage src={faceTofaceImage} alt="대면" />
        ) : (
          <ShopImage src={noneFaceTofaceImage} alt="비대면" />
        )}
      </InfoBox>
    </Card>
  );
};

export default ReservationInfo;
const Text = styled.p``;
const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProfileImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const Schedule = styled.span`
  font-size: 16px;
`;
const Gray = styled.span`
  color: gray;
`;
const Purple = styled.span`
  color: ${({ theme }) => theme.colors.primary[500]};
  font-weight: 500;
`;
const InfoConainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;
const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px;
  border-radius: 12px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const ShopImage = styled.img`
  width: 60px;
  margin-right: 10px;
`;
const Icon = styled.img``;
