import { transparentize } from "polished";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useModalStore } from "../../../zustand/modal.store";

import WarningIcon from "../../../assets/icons/warning.svg";

const ReservationModal = () => {
  const { closeModal } = useModalStore();
  const navigate = useNavigate();

  const handleOutReservationPage = () => {
    closeModal();
    navigate("/designer-detail");
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <ContentSection>
          <img src={WarningIcon} alt="warning" width={32} height={32} />
          <ContentBox $bigger color="900">
            <p>예약이 아직 완료되지 않았어요</p>
            <p>그래도 나가시겠어요?</p>
          </ContentBox>
          <ContentBox color="500">
            <p>나중에 이어서 남은 예약 단계를</p>
            <p>다시 진행할 수 있습니다.</p>
          </ContentBox>
        </ContentSection>
        <ButtonSection>
          <StButton $yes={true} onClick={handleOutReservationPage}>
            네, 나갈래요
          </StButton>
          <StButton onClick={closeModal}>아니요, 계속할게요</StButton>
        </ButtonSection>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ReservationModal;

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
  height: 352px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentSection = styled.div`
  width: 100%;
  height: 164px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentBox = styled.div<{ $bigger?: boolean; color: string }>`
  ${({ $bigger }) => $bigger && `font-size: 20px; font-weight: bold;`};
  color: ${({ theme, color }) => theme.colors.gray[color]};
  margin-top: ${({ $bigger }) => ($bigger ? "12px" : "16px")};
  text-align: center;
`;

const ButtonSection = styled.div`
  width: 100%;
  height: 104px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
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
