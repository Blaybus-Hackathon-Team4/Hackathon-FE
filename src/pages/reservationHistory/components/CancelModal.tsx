import { transparentize } from "polished";
import styled from "styled-components";
import { useModalStore } from "../../../zustand/modal.store";

import WarningIcon from "../../../assets/icons/warning.svg";

const CancelModal = () => {
  const { closeCancelModal } = useModalStore();

  const handleCancelReservation = () => {
    closeCancelModal();
    console.log("예약 취소 기능 구현해야 함");
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <ContentSection>
          <img src={WarningIcon} alt="warning" width={32} height={32} />
          <ContentBox>
            <p>정말로 예약을 취소하시겠어요?</p>
          </ContentBox>
          <ReservationBox>
            <Text $bold>25.02.12(수) 오후 12:00</Text>
            <InfoBox>
              <DetailInfo>
                <Text $light>디자이너</Text>
                <Text>이초 디자이너</Text>
              </DetailInfo>
              <DetailInfo>
                <Text $light>가격</Text>
                <Text>40,000원</Text>
              </DetailInfo>
              <DetailInfo>
                <Text $light>대면</Text>
                <Text>서울 강남구 압구정로79길</Text>
              </DetailInfo>
            </InfoBox>
          </ReservationBox>
        </ContentSection>
        <ButtonSection>
          <StButton $yes={true} onClick={handleCancelReservation}>
            네, 취소할래요
          </StButton>
          <StButton onClick={closeCancelModal}>아니요, 취소 안할래요</StButton>
        </ButtonSection>
      </ModalContainer>
    </ModalBackground>
  );
};

export default CancelModal;

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
  z-index: 9999;
  padding: 0 20px;
`;

const ModalContainer = styled.div`
  padding: 32px 20px 20px 20px;
  border-radius: 20px;
  background-color: white;
  max-width: 350px;
  height: 434px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[900]};
`;

const ContentBox = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-top: 16px;
  text-align: center;
`;

const ReservationBox = styled.div`
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  padding: 20px;
  width: 100%;
  height: 142px;
  margin: 32px 0;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-top: 16px;
  /* gap: 8px; */
`;

const DetailInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonSection = styled.div`
  width: 100%;
  height: 104px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Text = styled.p<{ $bold?: boolean; $light?: boolean }>`
  font-weight: ${({ $bold }) => $bold && "bold"};
  color: ${({ $light, theme }) => $light && theme.colors.gray[500]};
`;

const StButton = styled.button<{ $yes?: boolean }>`
  border: 1px solid ${({ $yes, theme }) => !$yes && theme.colors.primary[500]};
  border-radius: 8px;
  font-weight: bold;
  width: 100%;
  height: 48px;
  background-color: ${({ $yes, theme }) =>
    $yes ? theme.colors.primary[500] : theme.colors.white};
  color: ${({ $yes, theme }) =>
    $yes ? theme.colors.white : theme.colors.primary[500]};
  padding: 8px 24px;
`;
