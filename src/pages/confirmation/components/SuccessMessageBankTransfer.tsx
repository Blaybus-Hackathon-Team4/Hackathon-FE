import React from "react";
import styled from "styled-components";

import CheckIcon from "../../../assets/icons/check-purple-icon.svg";

const SuccessMessageBankTransfer: React.FC = () => {
  const bankName = "국민은행";
  const accountNumber = "000000-00-000000";
  const accountHolder = "헤르츠";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNumber);
    alert("계좌번호가 복사되었습니다.");
  };

  return (
    <div>
      <Container>
        <Icon src={CheckIcon} alt="확인이미지" />
        <DepositInformation>
          <SuccessText>
            <PurPle>2025-02-11 23:30</PurPle>까지
          </SuccessText>
          <SuccessText>
            결제금액 <PurPle>20,000</PurPle>원을
          </SuccessText>
          <SuccessText>아래의 계좌로 입금해주세요</SuccessText>
        </DepositInformation>
        <SubText>입금이 확인되면 결제가 정상적으로 완료됩니다</SubText>
      </Container>

      <CardContainer>
        <AccountInfo>
          <BankText>
            {bankName} <AccountNumber>{accountNumber}</AccountNumber>
          </BankText>
          <HolderText>
            예금주명 <b>{accountHolder}</b>
          </HolderText>
        </AccountInfo>
        <CopyButton onClick={copyToClipboard}>계좌번호 복사하기</CopyButton>
      </CardContainer>
    </div>
  );
};

export default SuccessMessageBankTransfer;

const Container = styled.div`
  text-align: center;
  padding: 40px 0 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const DepositInformation = styled.div`
  padding: 12px 0;
`;
const SuccessText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const SubText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const PurPle = styled.span`
  color: ${({ theme }) => theme.colors.primary[500]};
  font-size: 20px;
  font-weight: 500;

  cursor: pointer;
`;
const Icon = styled.img`
  width: 26px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  border-radius: 20px;
`;

const AccountInfo = styled.div`
  text-align: center;
  margin-bottom: 8px;
`;

const BankText = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

const AccountNumber = styled.span`
  font-weight: normal;
`;

const HolderText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[500]};
  margin: 4px 0 0;
`;

const CopyButton = styled.button`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary[500]};
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  font-weight: 500;

  &:hover {
    color: #8e3cb7;
  }
`;
