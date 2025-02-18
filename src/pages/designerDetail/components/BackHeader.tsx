import styled from "styled-components";

import BackIcon from "../../../assets/icons/back.svg";

const BackHeader = () => {
  return (
    <HeaderBar>
      <StSection>
        <img src={BackIcon} alt="back" />
        <StDiv>
          <StH1>이초 디자이너</StH1>
          <Stick></Stick>
          <StH3>강남/청담/압구정</StH3>
        </StDiv>
      </StSection>
    </HeaderBar>
  );
};

export default BackHeader;

const HeaderBar = styled.header`
  height: 48px;
  padding: 12px 16px;
`;

const StSection = styled.section`
  display: flex;
  gap: 12px;
`;

const StDiv = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const StH1 = styled.h1`
  font-weight: bold;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray[900]};
`;

const StH3 = styled.h3`
  font-size: 16px;
  font-weight: medium;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const Stick = styled.div`
  height: 13px;
  border: 1px solid ${({ theme }) => theme.colors.gray[500]};
`;
