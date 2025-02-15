import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  padding: 16px;
  border-radius: 12px;
  font-size: 14px;
`;

const PrivacyAgreement: React.FC = () => {
  return (
    <Card>
      <p>예약 서비스 이용을 위한 개인정보 수집 및 제공에 동의합니다.</p>
    </Card>
  );
};

export default PrivacyAgreement;
