import React from "react";
import styled from "styled-components";

const ReservationInfo: React.FC = () => {
  return (
    <Container>
      <Card>
        <InfoRow>
          <BoldText18>25.02.12(수) 오후 12:00</BoldText18>
          <PurplrText>・ 결제완료</PurplrText>
        </InfoRow>
        <InfoRow>
          <Text>디자이너</Text>
          <Text>이초 디자이너</Text>
        </InfoRow>
        <InfoRow>
          <Text>가격</Text>
          <Text>20,000원</Text>
        </InfoRow>
        <InfoRow>
          <Text>비대면</Text>
          <GoogleMeetsLink
            href="https://meet.google.com/dad-seuh-ykm"
            target="_blank"
            rel="noopener noreferrer"
          >
            구글 미트 링크
          </GoogleMeetsLink>
        </InfoRow>
      </Card>
      <Divider />
      <Card>
        <BoldText16>예약자 정보</BoldText16>
        <InfoRow>
          <Text>이름</Text>
          <Text>김서현</Text>
        </InfoRow>
        <InfoRow>
          <Text>이메일</Text>
          <Text>ksh123@gmail.com</Text>
        </InfoRow>
      </Card>
      <Divider />
      <Card>
        <InfoRow>
          <BoldText>결제 금액</BoldText>
          <BoldText>20,000원</BoldText>
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
  margin-top: 48px;
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
const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const GoogleMeetsLink = styled.a`
  color: ${({ theme }) => theme.colors.secondary[500]};
`;
