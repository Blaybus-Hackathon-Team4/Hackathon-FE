import React, { useState } from "react";
import styled from "styled-components";

import { IrequestData } from "../PaymentPage"; // 타입 import

interface UserInfoProps {
  setReservationInfo: React.Dispatch<React.SetStateAction<IrequestData>>;
}

const UserInfo: React.FC<UserInfoProps> = ({ setReservationInfo }) => {
  const [text, setText] = useState("");
  const maxLength = 500;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value.slice(0, maxLength); // 글자 수 제한 적용
    setText(newValue);

    setReservationInfo((prev) => ({
      ...prev,
      comment: newValue, // ✅ 입력값을 reservationInfo.comment에 반영
    }));
  };

  return (
    <Card>
      <Header>
        <Title>예약자 정보</Title>
      </Header>

      <UserInfoContainer>
        <UserInfoBox>
          <UserName>김서현</UserName>
          <UserEmail>ksh123@gmail.com</UserEmail>
        </UserInfoBox>
        <ChangeButton disabled>변경</ChangeButton>
      </UserInfoContainer>

      <TextAreaWrapper>
        <TextArea
          placeholder="원하는 스타일이나 고민이 있다면 적어주세요!"
          value={text}
          maxLength={maxLength}
          onChange={handleChange}
        />
        <CharCount>
          {text.length}/{maxLength}
        </CharCount>
      </TextAreaWrapper>
    </Card>
  );
};

export default UserInfo;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;

const ChangeButton = styled.button`
  padding: 8px 12px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
`;

const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const UserName = styled.span`
  font-size: 16px;
`;

const UserEmail = styled.span`
  font-size: 14px;
`;

const TextAreaWrapper = styled.div`
  position: relative;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 96px;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 8px;
  font-size: 14px;
  resize: none;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[300]};
  }
`;

const CharCount = styled.span`
  position: absolute;
  bottom: 8px;
  right: 12px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
