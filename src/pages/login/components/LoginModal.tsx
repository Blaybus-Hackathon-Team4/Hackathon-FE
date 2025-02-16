import { transparentize } from "polished";
import styled from "styled-components";

const LoginModal = () => {
  return (
    <ModalBackground>
      <ModalContainer>
        <ContentSection>
          <img src="/warning_circle.svg" alt="warning" width={32} height={32} />
          <ContentBox $bigger color="900">
            <p>로그인이 필요한 서비스예요</p>
          </ContentBox>
          <ContentBox color="500">
            <p>로그인하고 실패 없는 헤어스타일을 위한</p>
            <p>맞춤 컨설팅을 받아보세요</p>
          </ContentBox>
        </ContentSection>
        <ButtonSection>
          <StButton>구글 계정으로 로그인</StButton>
          <SmallText>
            구글 미트 링크 생성을 위해 Google 계정이 필요합니다.
          </SmallText>
        </ButtonSection>
      </ModalContainer>
    </ModalBackground>
  );
};

export default LoginModal;

const ModalBackground = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) =>
    transparentize(0.5, theme.colors.gray[900])};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  padding: 40px 20px 20px 20px;
  border-radius: 20px;
  background-color: white;
  width: 350px;
  height: 307px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentBox = styled.div<{ $bigger?: boolean; color: string }>`
  ${({ $bigger }) => $bigger && `font-size: 20px; font-weight: bold;`};
  color: ${({ theme, color }) => theme.colors.gray[color]};
  margin-top: 16px;
  text-align: center;
`;

const ButtonSection = styled.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const StButton = styled.button`
  border-radius: 8px;
  border: none;
  font-weight: bold;
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: white;
  padding: 8px 24px;
`;

const SmallText = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;
