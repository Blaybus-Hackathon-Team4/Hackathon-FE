import React from "react";
import styled from "styled-components";

import DesignerImage from "../../../assets/images/TrendingStyle2.png";

import CheckIcon from "../../../assets/icons/check-gray-icon.svg";
import LocationIcon from "../../../assets/icons/location-gray-icon.svg";

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
  color: red;
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
  gap: 12px;
  padding: 16px;
  border-radius: 12px;
  font-size: 14px;
  border: 1px solid #dddddd;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const ShopImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 4px;
`;
const Icon = styled.img``;

const ReservationInfo: React.FC = () => {
  return (
    <Card>
      <Profile>
        <ProfileImage src={DesignerImage} alt="디자이너" />
        <InfoConainer>
          <Title>이초 디자이너</Title>
          <Schedule>
            <Gray>일정</Gray> 2.12 (수) · 오후 12:00
          </Schedule>
        </InfoConainer>
      </Profile>
      <InfoBox>
        <ShopImage src={DesignerImage} alt="샵" />
        <InfoConainer>
          <Info>
            <Icon src={CheckIcon} alt="check" />
            실제 샵에 <Purple>방문하여</Purple> 컨설팅 진행
          </Info>
          <Info>
            <Icon src={LocationIcon} alt="location" /> 서울 강남구 압구정로79길
          </Info>
        </InfoConainer>
      </InfoBox>
    </Card>
  );
};

export default ReservationInfo;
