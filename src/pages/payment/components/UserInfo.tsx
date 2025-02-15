import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  padding: 16px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
`;

const UserInfo: React.FC = () => {
  return (
    <Card>
      <Title>예약자 정보</Title>
      <Input type="text" placeholder="이름" value="김서연" readOnly />
      <Input
        type="email"
        placeholder="이메일"
        value="ksh123@gmail.com"
        readOnly
      />
      <Input
        type="text"
        placeholder="원하는 스타일이나 고민이 있다면 적어주세요!"
      />
    </Card>
  );
};

export default UserInfo;
